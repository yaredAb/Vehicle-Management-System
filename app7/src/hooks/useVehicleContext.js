import { VehicleContext } from "../context/vehicleContext";
import { useContext } from "react";

export const useVehicleContext = () => {
    const context = useContext(VehicleContext)

    if(!context){
        throw new Error("use context error")
    }

    

    return context
}