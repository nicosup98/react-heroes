import React,{Component} from 'react';
import './App.scss';
import {NavBar} from './components/navBar'
import {Route,Switch,BrowserRouter as Router,Link} from 'react-router-dom'
import {routes} from './routes/routes'

export class App extends Component{
  constructor(props){
    // encontrar el one-liner de esto
    super(props)
    this.state = {
      heroes:[],
      name:""
    }
    this.search = this.search.bind(this)
    this.changeName = this.changeName.bind(this)
  }
  componentDidMount(){
    //api call
  }
  search(event){
    console.log("a buscar",event.target.value)
  }
  changeName(event){
    console.log(event.target.value)
    let {name} = this.state
    name =event.target.value
    this.setState({...this.state,name})
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
                    children={<route.component {...this.state} search={this.search} changeName={this.changeName} />}
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


