import React, { Component } from "react";
import CardList from './CardList'
import SearchBox  from './SearchBox'
import { robots } from "./robots";

class App extends Component{
    constructor(){
        super();
        //initializing state
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    //changes state of searchField to the value in searchbox
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        //returns filtered robots bases on searchfield query
        const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox  searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App