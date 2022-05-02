import React, { Component } from "react";
import CardList from '../components/CardList'
import SearchBox  from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component{
    constructor(){
        super();
        //initializing state
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    //React lifecycle method to load data
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    //changes state of searchField to the value in searchbox
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const {searchField, robots} = this.state ;
        //returns filtered robots bases on searchfield query
        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(robots.length === 0){
            return (
                <h1 className="tc">Loading....</h1>
            )
        }else{
            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox  searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App