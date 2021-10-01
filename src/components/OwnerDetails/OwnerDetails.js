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
        <p>Location: {clothes.location} |
         Color: {clothes.color}  |  Length: {clothes.length}</p>
        {/* <p>{clothes.image_url}</p> */}
        {/* <img src='https://lh3.googleusercontent.com/pw/AM-JKLXrY99f9YL-zemGDKm1o_XfwNM23ipFSSKbAwCXK2DP3DhAvcwxPYedGiBTMRJYF-5tgQli4VMxV9BWZMoy5XBgAt5DQtNpR0buTPWQFCV_uxf2uIjtKC_Vkt0czZI8C9GX2at9b_CA4eZLqM-lL0VC=w1639-h1080-no?authuser=0' alt_text='' /> */}
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
                <input type='submit' value='Add Clothes'/>
            </form>

            <ul>{clothes}</ul>
        </div>
    );
};