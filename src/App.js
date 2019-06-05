import React, { Component } from 'react';
import './App.css';
import Login from './component/AppComponent/login';
import LoginBootstrap from './component/AppComponent/LoginBootstrap';
import './stylesheets/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      selectedVendor: 'Semantic'
    }
    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme(){
    if(this.state.selectedVendor === 'Semantic'){
      this.setState({
        selectedVendor: 'Bootstrap'
      })
    }else if(this.state.selectedVendor === 'Bootstrap'){
      this.setState({
        selectedVendor: 'Semantic'
      })
    }
  }

  render() {
    const { selectedVendor } = this.state
    console.log("Output: App -> render -> selectedVendor", selectedVendor)
    
    return (
      <Router>    
          <div className='theme-select'><Link to={selectedVendor === 'Semantic' ? '/semantic' : '/bootstrap' }><button type="button" className="btn btn-dark" onClick={this.changeTheme}>{this.state.selectedVendor}</button></Link></div>
          <Route exact path="/semantic" component={Login}/>
          <Route exact path='/bootstrap' component={LoginBootstrap}/>
      </Router>
    )
  }
}

export default App


