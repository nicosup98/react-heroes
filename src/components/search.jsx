import React from 'react'
import { DisplayData } from './displayData'
import '../styles/search.scss'

export const Search = (props) => (
    <div>
        <div className="columns">
            <div className="column is-flex is-12">
                <div className="field">
                    <div className="control">
                        <input type="text" value={props.name} onChange={props.changeName} className='input is-rounded is-medium' />
                    </div>
                </div>
                <button className="button is-info ml-4 is-medium" onClick={props.search} >buscar</button>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="columns scroll is-desktop is-block-table is-flex-desktop">
                    {props.heroes.map((element, i) => (
                        <div className="column is-2" key={i}>
                            <figure className="image" onClick={() => { props.selectHero(element) }}>
                                <img className='img-hover' src={element.image.url} alt="" />
                            </figure>

                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <DisplayData {...props.heroSelected} />
            </div>
        </div>
    </div>
)