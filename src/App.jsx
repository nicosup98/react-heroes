import React,{Component} from 'react';
import './App.scss';
import {NavBar} from './components/navBar'

export class App extends Component {
  state = {
    heroes:[]
  }
  componentDidUpdate(){
    //api call
  }

  filter(name){
   const heroes =this.state.heroes.filter(v => v == name)
   this.setState({heroes})
  }
  render(){
    return(
      <div>
        <NavBar />
        <div className="section has-background-light">
          <div className="container">
            <div className="columns">
              <div className="column "><span>hola</span></div>
              <div className="column"><span>perro</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


