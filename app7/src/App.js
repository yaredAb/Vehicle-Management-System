import React from 'react'
import './static/index.css';
import Header from './components/Header'
import FormField from './components/FormField'
import DataTable from './components/DataTable';
import Info from './components/Info';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='main-content'>
        <FormField />
        <DataTable />
      </div>
      {/* <Info /> */}
    </div>
  )
}

export default App
