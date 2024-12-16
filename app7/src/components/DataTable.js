import { useEffect } from 'react';
import { useVehicleContext } from '../hooks/useVehicleContext';

const DataTable = () => {
  //const [vehicles, setVehicles] = useState([]); // Initialize as empty array
  const {vehicles, dispatch} = useVehicleContext()
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('http://localhost:4000/vehicle');
        const json = await response.json();

        if (response.ok) {
          dispatch({type: 'SET_VEHICLE', payload: json})
        }
      }
      catch(error){
        console.log("cannot fetch data from database. try again!")
      }
      
  };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch ('http://localhost:4000/vehicle/'+id, {
      method: 'DELETE',
    })
    const json = await response.json()

    if(response.ok){
      dispatch({type: 'DELETE_VEHICLE', payload: json})
    }
  }

  return (
    <div className="table">
      <table>
        <thead>
          <tr className="table-header">
            <th>No</th>
            <th>Vehicle Name</th>
            <th>Status</th>
            <th>Last Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.length > 0 ? (
            vehicles.map((vehicle, index) => (
              <tr key={vehicle._id || index}>
                <td>{index + 1}</td> 
                <td>{vehicle.name}</td>
                <td>{vehicle.status}</td>
                <td>{new Date(vehicle.updatedAt).toLocaleDateString()}</td>
                <td className="action">
                  <button onClick={() => handleDelete(vehicle._id)} className="delete">Delete</button>
                </td>
              </tr>
            ))
          ) 
          : (
            <tr>
              <td colSpan="5">No vehicles found</td>
            </tr>
          )
          }
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
