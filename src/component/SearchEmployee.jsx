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
            <button onClick={SearchEmployee}>Search</button>

            {result.map((e)=>(
                <div key={e.id}>

                    <p>{e.firstName} {e.lastName}</p>
                    <p>{e.email}</p>
                </div>
            ))}
        </div>
    )
}
export default SearchEmployee;