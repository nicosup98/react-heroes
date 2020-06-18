import React from 'react'
import {DisplayData} from './displayData'
export const Search = (props)=>(
    <div>
        <div className="columns">
            <div className="column">
                <input type="text" value={props.name} onChange={props.cangeName} className='input is-rounded is-medium'/>
            </div>
            <div className="column">
                <button className="button is-info" onClick={props.search} >buscar</button>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="columns">
                {props.heroes.forEach(element => {
                    <div className="column">
                        <DisplayData info={...element} />
                    </div>
                })}
                </div>
            </div>
        </div>
    </div>
)