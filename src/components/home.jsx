import React, { Component } from 'react';

class Home extends Component {
  state = { 
    error: null,
    isLoaded: false,
    stats:[]
   }

  componentDidMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://localhost:5555/stats/hourly"
    fetch(proxyurl + url)
     .then(res => res.json)
     .then(stats => {
      //  this.setState({
      //     stats,
      //     isLoaded: true
      //  })
      console.log(stats, "<--stats")
     })
     .catch(error => {
           this.setState({
             isLoaded: true,
             error
           })
     });
  };

  render() { 
    // const { stats } = state 
    return ( <h1>EQ Works</h1> );
  }
}
 
export default Home;