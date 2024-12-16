import { createContext, useReducer } from "react";

export const VehicleContext = createContext()
export const vehicleReducer = (state, action) =>{
    switch(action.type){
        case 'SET_VEHICLE':
            return {vehicles: action.payload}
        case 'CREATE_VEHICLE':
            return {vehicles: [action.payload, ...state.vehicles]}
        case 'DELETE_VEHICLE':
            return {
              vehicles: state.vehicles.filter((vehicle) => vehicle._id !== action.payload._id)
            }
    }
}
export const VehicleContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(vehicleReducer, {
        vehicles: []
    })
    return (
        <VehicleContext.Provider value={{...state, dispatch}}>
            {children}
        </VehicleContext.Provider>
    )
}