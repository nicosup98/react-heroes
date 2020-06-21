import React from 'react'

export const DisplayData = (props)=>(
    <figure className="image is-3by3">
        <img src={props.image.url} alt=""/>
    </figure>
    // <div className="card">
    //     <div className="card-image">
    //         <figure className="image  is-3by3">
    //             <img src={props.image.url} alt="image"/>
    //         </figure>
    //     </div>
    //     <div className="card-content">
    //         <div className="title is-3">
    //         {props.name}
    //         </div>
    //         <div className="subtitle">
    //             {props.biography['full-name']}
    //         </div>
    //         <div className="container">
    //             Alias
    //             <ul>{props.biography.aliases.map((v,i)=>(
    //                 <li key={i}>{v}</li>
    //             ))}</ul>
    //         </div>
    //     </div>
    //     <div className="card-footer">
    //         <div className="container">
    //             <span>{props.biography.alignment}</span>
    //         </div>
    //     </div>
    // </div>
)