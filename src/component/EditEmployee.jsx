import {useState,useEffect} from  'react';
import { useNavigate,useParams } from "react-router-dom";


function EditEmployee(){
     const {id}=useParams();
    const navigate=useNavigate();
    const[emp ,setEmployees]=useState([]);

    useEffect(()=>{
        fetch(`https://dummyjson.com/user/${id}`)
        .then((res)=>res.json()).then((data)=>{console.log(data); setEmployees(data)});
       
    },[])

   const UpdateEmployee=()=>{
    fetch(`https://dummyjson.com/user/${id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(emp)
    }).then((res)=>res.json()).then((data)=>{console.log(data); 
        alert("Employee Updated Successfully")
    navigate("/");
    });
        
   }


    return(
        <div>
            <h1>Edit Employee</h1>
            Name: <input type="text" placeholder='Enter Name' value={emp.firstName} onChange={(e)=>setEmployees({...emp,firstName:e.target.value})} />
            <br></br>
            Email: <input type="email" placeholder='Enter Email' value={emp.email} onChange={(e)=>setEmployees({...emp,email:e.target.value})} />   
<br></br>    Phone: <input type="text" placeholder='Enter Phone' value={emp.phone} onChange={(e)=>setEmployees({phone:e.target.value})} />
            <br></br>
            Address: <input type="text" placeholder='Enter Address' value={emp.address?.city} onChange={(e)=>setEmployees({...emp,address:{...emp.address,city:e.target.value}})} />    
        <br></br>
            Company: <input type="text" placeholder='Enter Company' value={emp.company?.name} onChange={(e)=>setEmployees({company:{...emp.company,name:e.target.value}})} />    
        <br></br>
            <button onClick={UpdateEmployee}>Update Employee</button>
            <button onClick={()=>window.history.back()}>Back</button>

        </div>
    )
}

export default EditEmployee;