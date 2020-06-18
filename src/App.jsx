import React,{Component} from 'react';
import './App.scss';
import {NavBar} from './components/navBar'
import {Route,Switch,BrowserRouter as Router,Link} from 'react-router-dom'
import {routes} from './routes/routes'

export class App extends Component {
  state = {
    heroes:[],
    name:""
  }
  componentDidMount(){
    //api call
  }
  search(event){

  }
  cangeName(event){

  }
  
  render(){
    return(
      <Router>
        <NavBar >
          <div className="columns">
            <div className="column "><Link to="/"><span className="has-text-link-light">Home</span></Link></div>
            <div className="column "><Link to="/about"> <span className="has-text-link-light">About</span></Link></div>
          </div>
        </NavBar>
        <div className="section has-background-light">
          <div className="container">
            <div className="columns">
              <Switch>
                {routes.map((route,i)=>(
                  <Route
                    key={i}
                    path={route.path}
                    exact={route.exact}
                    children={<route.component />}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}


