

import {useState,useEffect} from  'react';
import { useNavigate } from "react-router-dom";

function EmployeeList(){
   const navigate=useNavigate();
    const[emp ,setEmployees]=useState([]);

    useEffect(()=>{

        fetch('https://dummyjson.com/users')
        .then((res)=>res.json()).then((data)=>setEmployees((data.users)))
    },[])
    const DeleteEmployee=(id)=>{

        if(!window.confirm("Are you sure you want to delete this employee?")){
            return;
        }
        fetch(`https://dummyjson.com/user/${id}`,{
            method:'DELETE'
        }).then((res)=>res.json()).then((data)=>{console.log(data); 
            alert("Employee Deleted Successfully")
        setEmployees(emp.filter((e) => e.id !== id));
        });
    }

    return( 
        <div>
             <h1>Employees List</h1>
            <button onClick={() => navigate("/add")}>
                Add Employee
            </button>
           <button onClick={() => navigate("/search")}>
                Search Employee
            </button>
            <table border={1}>
             <thead>
                <tr>
                    <th>ID</th>
                     <th>Name</th>
                      <th>Email</th>
                    <th>Action</th>

</tr>
</thead>
<tbody>
    
       {emp.map((e)=>(
          <tr key={e.id}> 
                <td>{e.id}</td>
                <td>{e.firstName} {e.lastName}</td>
                <td>{e.email}</td>
                <td>
                    <button onClick={()=>navigate(`/employee/${e.id}`)}>view</button>
                     <button onClick={()=>navigate(`/employee/edit/${e.id}`)}>edit</button>
                     <button onClick={()=>DeleteEmployee(e.id)}>delete</button>
                </td>
              </tr> 
                
    ))}
</tbody>
            </table>
            
        </div>
    );
}

export default EmployeeList;