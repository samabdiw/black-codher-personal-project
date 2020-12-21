import React from 'react';
import { Link } from "react-router-dom";

const Learn = ({titles}) => { 
    console.log(titles)
    return (<div>{titles.map(title => <p><Link to={`/learn/${title.title}`}>{title.title}</Link></p>)}</div>)

}



export default Learn;