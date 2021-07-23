import React,{Component} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Login from "./pages/login"
import Regisx from './pages/regisx';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
        ismsg:'login'
    }
  }
  handleApp=(val)=>{
    this.setState({
       ismsg:val
    })
   

  }
 
  render(){
    return (
      <div className="APP">
            {
               this.state.ismsg=='login'?<Login 
               switchfn={this.handleApp}/>:<Regisx switchfn={this.handleApp}/>
            }
            {/* <BrowserRouter>
                
            </BrowserRouter> */}
      </div>
    )
  }
}

export default App;
