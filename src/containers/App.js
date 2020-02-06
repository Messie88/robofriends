
import React, { Component } from 'react';
import Cardlist from '../components/cardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

 // Components that use state are called smart components
class App  extends Component {
    // Create the state
    // Mounting
    //1.initialize the robots
    constructor(){
        // We need to write super() before we use: this
        super()
        this.state = {
            robots: [],
            searchfield: '', 
            found: false
        };
    }
  
    //2. Update the robots through an API
    componentDidMount() {
        //to call our api
        // fetch is a method that allow us to make request to the server
        fetch('https://jsonplaceholder.typicode.com/users')
          .then( response => {
              return response.json();
          })
          .then(users => {
              this.setState({robots: users})
          })
    }

    onSearchChange = event => {
        this.setState({searchfield: event.target.value})
    }

     render() {
         const {robots, searchfield} = this.state;
         const filteredRobots = robots.filter((robot, i) =>{
             return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
       
         // robots.length === 0 is the same of !robots.length
         if (robots.length === 0) {
             return (
                 <div style={{height: '800px', lineHeight: '800px'}}>
                     <h1 className="tc">Loading...</h1>
                 </div>
             )
         } else {
             
             return (
              <div className="tc">
                <h1 className="f1 ma5">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={ filteredRobots } /> 
                    </ErrorBoundary>
                    
                </Scroll>
                
              </div>    
             );
         } 
         
     }
}

export default App;

/* NOTE: if, in the terminal, we run: npm run build, this will
create a new folder called 'build' with all our files optimized, 
minified, and ready to be deployed in the internet*/