import React from 'react';


const Card = ({name,id,email}) =>{
    return (
        <div className='bg-cyan-400 inline-block rounded-3xl p-3 m-2 hover:scale-105 text-center border2 shadow-md'>
            <img src={`https://robohash.org/${id}?200x2001`} alt='robots'></img>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;