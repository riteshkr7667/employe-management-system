import {useState,useEffect} from  'react';

function SearchEmployee(){
 
    const[emp ,setEmployees]=useState([]);
    const[search,setSearch]=useState('');
    const[result,setResult]=useState(['']);
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then((res)=>res.json()).then(((data)=>setEmployees((data.users))))
    },[]);

    const SearchEmployee=()=>{
        const result=emp.filter((e)=>e.firstName.toLowerCase().includes(search.toLowerCase())
         || e.lastName.toLowerCase().includes(search.toLowerCase()));
        setResult(result);  
        
    }

    return(
        <div>
            <h2>Search Employee</h2>
            <input type="text" placeholder="Search Employee" value={search} onChange={(e)=>setSearch(e.target.value)} />
          <br></br><br></br>  <button onClick={SearchEmployee}>Search</button>
            <br></br><br></br>
            <table border={1}>
             <thead>
                <tr>
                    <th>ID</th>
                     <th>Name</th>
                      <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Company</th>
                        </tr>
</thead>
<tbody>             

         {result.map((e)=>(
            <tr>

                <td>{e.id}</td>
                <td>{e.firstName} {e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td> {e.address?.city}</td>
                <td>{e.company?.name}</td>
            </tr>
         ))}
        </tbody>
        </table>
        </div>
    )
}
export default SearchEmployee;