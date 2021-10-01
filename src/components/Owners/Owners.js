import React from 'react';
import './Owners.css';
import { Link } from 'react-router-dom'

export default function Owners(props) {
    const owners = props.owners.map((owner, key) => {
        return (
            <li key={owner.id}>
                <Link to={`/owners/${owner.id}`}>{owner.name}</Link>
            </li>
        )
    })

    return (
        <div className='Owners'>
            <h2>List of Owners</h2>
        
            <form onSubmit={props.addOwner}>
                <input type='text' name='name' />
                <input type='submit' value='Add Owner'/>
            </form>

            <ul>{owners}</ul>
        </div>
    );
};