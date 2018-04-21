import React from 'react';

const Suggesstion=(props)=>{
    const options=props.results.map(r=>(
        <li key={r.id}>
        <a href="">{r.name}</a>
        </li>  
    
))
        return <ul style={{listStyleType:'none'}}>{options}</ul>
    }

export default Suggesstion;