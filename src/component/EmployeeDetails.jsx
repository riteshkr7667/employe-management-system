
import {useState,useEffect} from  'react';
import {useParams} from 'react-router-dom';
function EmployeeDetails(){
const [employee, setEmployee] = useState({})
 const {id}=useParams();
    useEffect(()=>{
        fetch(`https://dummyjson.com/user/${id}`).then(((res)=>res.json()))
        .then(((data)=>setEmployee(data)))
    },[])
    return(
        <div>
            <h1>Employee Details</h1>
            <p>Name: {employee.firstName} {employee.lastName}</p>
            <p>Email: {employee.email}</p>
            <p>Phone: {employee.phone}</p>
            <p>Adress: {employee.address?.city}, {employee.address?.state}</p>
            <p>Company: {employee.company?.name}</p>
             <button onClick={()=>window.history.back()}>Back</button>
        </div>
       
    )
}
export default EmployeeDetails;