import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Newscomponent from './Components/Newscomponent';
import Heading from './Components/Heading';
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      country : 'in'
    }
  };
  pageSize = 6;
  country = 'in'
  state = {
    progress :0
  }
  setProgress=(progress)=>{
        this.setState({
          progress : progress
        })
    }
  render() {
    
    return (
      <div>
        <Router>
          <LoadingBar
            color='#FFD93B'
            progress={this.state.progress}
            height={3}
          />
        <Navbar />
        <Heading/>
         <Switch>
          <Route exact path = '/'><Newscomponent setProgress={this.setProgress} key="general" pageSize={this.pageSize} category='general' country={this.country}/></Route>
          <Route exact path = '/business'><Newscomponent setProgress={this.setProgress} key="business" pageSize={this.pageSize} category='business' country={this.country}/></Route>
          <Route exact path = '/health'><Newscomponent setProgress={this.setProgress} key="health" pageSize={this.pageSize} category='health' country={this.country}/></Route>
          <Route exact path = '/science'><Newscomponent setProgress={this.setProgress} key="science" pageSize={this.pageSize} category='science' country={this.country}/></Route>
          <Route exact path = '/technology'><Newscomponent setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category='technology' country={this.country}/></Route>
          <Route exact path = '/entertainment'><Newscomponent setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category='entertainment' country={this.country}/>
          </Route>
          <Route exact path = '/sports'><Newscomponent setProgress={this.setProgress} key='sports' pageSize={this.pageSize} category='sports' country={this.country}/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

