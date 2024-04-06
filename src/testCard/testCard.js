import React from 'react';

export default function miniCard(props) {
    return (
        <>
            <article className='testimonials-card'>
                <div>
                    <p>{props.firstText}</p>
                </div>
                <div className='circle-img d-flex'>
                  <img src={props.circleImg} alt={props.altTitle} />
                  <p className='profile-info'>{props.name} <br/> <span>{props.subtitle}</span> </p>
                </div>
            </article>
        </>
    )
}