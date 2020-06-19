import React from 'react'
import {Home} from '../pages/home'
import {About} from '../pages/about'
export const routes = [{
    path:"/",
    exact:true,
    component: function(props){
        return <Home {...props} />
    }
},
{
    path:"/about",
    component: function(){
        return <About/>
    }
}]