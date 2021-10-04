import React from 'react';
import './OwnerDetails.css';

export default function OwnerDetails(props) {
    console.log('owners', props.owners)
    const owner = props.owners.find(owner => {
        return owner.id == props.match.params.id;
    })
    // console.log(owner)
    const clothes = owner.Clothes.map(clothes => <li key={clothes.id}>
        <h3>{clothes.type}: {clothes.description}</h3>
        <p className='details'><span className='heading'>Location:</span> {clothes.location} |
        <span className='heading'>Color:</span> {clothes.color}  |  <span className='heading'>Length:</span> {clothes.length}</p>
        </li>);

    return (
        <div className='OwnerDetails'>
            <h2>{owner.name}'s Clothes</h2>

            <form onSubmit={props.addClothes}>
                <p><input type='hidden' name='owner_id' value={owner.id} />
                <input type='text' name='description' placeholder='Description'/> 
                <input type='text' name='type' placeholder='Type' size='5'/> 
                <input type='text' name='location' placeholder='Location'/></p>
                <p><input type='text' name='color' placeholder='Color' size='10'/>  
                <input type='text' name='length' placeholder='Length' size='10'/>
                    </p>  
                <input id='submit' type='submit' value='Add Clothes'/>
            </form>

            <ul>{clothes}</ul>
        </div>
    );
};