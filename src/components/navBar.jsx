import React from "react"

export const NavBar = (props) => (
    <nav className="hero is-info">
        <div className="hero-head">
            <div className="container ">
                <h1 className="title">navbar</h1>
            </div>
        </div>
        <div className="hero-body">
            <div className="container">
                {props.children}
            </div>
        </div>
    </nav>
)