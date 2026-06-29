

import {useState,useEffect} from  'react';
import { useNavigate } from "react-router-dom";

function EmployeeList(){
   const navigate=useNavigate();
    const[emp ,setEmployees]=useState([]);

    useEffect(()=>{

        fetch('https://dummyjson.com/users')
        .then((res)=>res.json()).then((data)=>setEmployees((data.users)))
    },[])

    return( 
        <div>
             <h1>Employees List</h1>
            <button onClick={() => navigate("/add")}>
                Add Employee
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
                </td>
              </tr> 
                
    ))}
</tbody>
            </table>
            
        </div>
    );
}

export default EmployeeList;