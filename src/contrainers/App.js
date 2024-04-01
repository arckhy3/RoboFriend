import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users=>this.setState({robots:users}));
    }

    onSearchEvent = (event) =>{
        this.setState({searchfield: event.target.value});
    }

    render (){
        const {robots,searchfield} = this.state;
        const filterRobot = robots.filter(robot=>
            robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()));
        return !robots.length ?
        <h1>loading</h1> :
        (
            <div className="h-screen text-center bg-gradient-to-r from-cyan-500 to-blue-500 ...">
                <h1 className="text-4xl text-neutral-600">RoboFriends</h1>
                <SearchBar SearchEvent={this.onSearchEvent}/>
                <Scroll>
                    <CardList robots={filterRobot}/>
                </Scroll>
            </div>
        );
    }
}

export default App;