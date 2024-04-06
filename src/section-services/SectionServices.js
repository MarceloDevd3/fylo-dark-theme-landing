import React from 'react';

export default function Services(props) {
    return (
            <article className={props.classitem}>
                <div>
                    <img src={props.ServiceCard} alt={props.altIMG} />
                </div>
                <section>
                    <h2>{props.title}</h2>
                    <p className='text-zone'>{props.text}</p>
                </section>
            </article>
    )
}