import React from 'react'
import '../styles/search.scss'
export const DisplayData = (props) => {
    console.log({ props })
    if (Object.entries(props).length == 0) {
        return <h2>Seleccione un heroe</h2>
    } else {
        return (
            <div className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">nombre <br />{props.name}</div>
                        <div className="column">full Name <br />{props.biography['full-name']}</div>
                    </div>
                </div>
            </div>
        )
    }
}
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
