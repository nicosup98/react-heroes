import React, { Component } from 'react'
import { Search } from '../components/search'
import {apiKey} from '../api.key'
import axios from 'axios'
export class Home extends Component {
    constructor(props) {
        // encontrar el one-liner de esto
        super(props)
        this.state = {
            heroes: [],
            name: "",
            isLoading: false,
            heroSelected: null
        }
        this.search = this.search.bind(this)
        this.changeName = this.changeName.bind(this)
        this.selectHero = this.selectHero.bind(this)
    }

    componentWillUnmount(){
        this.props.setListHeroes(this.state)
    }
    componentWillMount(){
        this.setState(prev=>({...prev,heroes:this.props.heroes}))
    }

    async search() {
            try {
                this.setState(prev => ({ ...prev, isLoading: !prev.isLoading }))
                const resp = await axios.get(`http://superheroapi.com/api/${apiKey}/search/${this.state.name}`)
                console.log({ resp })
                this.setState(prev => ({ ...prev, heroes: resp.data.results, isLoading: !prev.isLoading }))
            } catch (error) {
                console.error("Error->", error)
            }
    }

    selectHero(hero) {
        this.setState(prev => ({ ...prev, heroSelected: hero }))
    }

    changeName(event) {
        console.log(event.target.value)
        let { name } = this.state
        name = event.target.value
        this.setState(prev=>({ ...prev, name }))
    }

    render() {
        return (
            <div>
                <Search {...this.state} selectHero={this.selectHero} search={this.search} changeName={this.changeName} />
            </div>
        )
    }
}