import {useState} from 'react';
import { useNavigate } from "react-router-dom";
function AddEmployee() {    

    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[department,setDepartment] = useState('');
    const[salary,setSalary] = useState('');
      const navigate=useNavigate();

    const saveEmployee=()=>{
        const empData={name,email,phone,department,salary};

        if(!name || !email || !phone || !department || !salary){
            alert("Please fill all the fields");
            return;
        }
        const reuestOptions= fetch('https://dummyjson.com/users/add',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(empData)
        })
         alert("Employee Saved Successfully");

        navigate("/");
    }
    
    return (
        <div>
            <h1>Add Employee</h1>
            Name: <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
            <br></br>
            Email: <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br></br>
            Phone: <input type="number" placeholder='Enter Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <br></br>
            Department: <input type="text" placeholder='enter department' value={department} onChange={(e)=>setDepartment(e.target.value)} />
            <br></br>
            Salary: <input type="number" placeholder='Enter Salary' value={salary} onChange={(e)=>setSalary(e.target.value)} />
            <br></br><br></br>
            <button onClick={saveEmployee}>Add Employee</button>
            <button onClick={()=>window.history.back()}>Back</button>
        </div>
    )
}
export default AddEmployee