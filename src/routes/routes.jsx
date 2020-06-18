import React from 'react'
import {Home} from '../pages/home'
import {About} from '../pages/about'
export const routes = [{
    path:"/",
    exact:true,
    component: function(){
        return <Home />
    }
},
{
    path:"/about",
    component: function(){
        return <About/>
    }
}]