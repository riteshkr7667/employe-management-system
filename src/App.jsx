import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeList from './component/EmployeeList'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AddEmployee from './component/AddEmployee'
import EmployeeDetails from './component/EmployeeDetails'
import EditEmployee from './component/EditEmployee'
function App() {

  return (
    <>
     <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeList/>}/>
        <Route path='/add' element={<AddEmployee/>}/>
        <Route path='/employee/:id' element={<EmployeeDetails/>}/>
        <Route path='/employee/edit/:id' element={<EditEmployee/>}/>
      </Routes>
      </BrowserRouter>
     </div> 
    </>
  )
}

export default App
