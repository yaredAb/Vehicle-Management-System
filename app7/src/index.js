import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { VehicleContextProvider } from './context/vehicleContext';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <VehicleContextProvider>
        <App />
    </VehicleContextProvider>
)