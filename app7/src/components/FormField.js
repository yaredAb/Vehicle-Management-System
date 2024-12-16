import { useState, useEffect} from 'react'
import { useVehicleContext } from '../hooks/useVehicleContext';

const FormField = () => {
  const { dispatch } = useVehicleContext()
  const [name, setName] = useState('')
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const vehicle = {name, status}
    if(name.length > 0 && status.length > 0){
      setError(null)
      try{
        const response = await fetch('http://localhost:4000/vehicle', {
          method: 'POST',
          body: JSON.stringify(vehicle),
          headers: {
            'Content-Type' : 'application/json'
          }
        })
        const json = await response.json()
    
        if(!response.ok){
          setError(json.err)
        }
        if(response.ok){
          setError(null)
          setName('')
          setStatus('')
          console.log("data inserted", json)
          dispatch({type: 'CREATE_VEHICLE', payload: json})
        }
      }catch(error){
        setError("Check your server connection and make sure it's running!")
        console.log("cannot post into database. please check your connection and try again!", error)
      }
    }
    else{
      setError("Please enter all the information")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Vehicle</h1>
      <input type='text' name='name' placeholder='Vehicle Name' onChange={(e) => setName(e.target.value)} value={name}/>
      <select name='status' value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="" disabled>Select Status</option>
        <option value="Rented">Rented</option>
        <option value="Sold">Sold</option>
      </select>
      <button>Add Vehicle</button>
      {error && 
      <div className='error-container'>
        <ul>
          <li className='error-message'>{error}</li>
        </ul>
      </div>
        }
    </form>
  )
}

export default FormField
