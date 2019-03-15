import React, {Component} from 'react'
import Tree from './Tree'
import '../styles/App.css'

class Sidebar extends Component{

  render(){
     return(
       <div className = 'sidebar'>
         <Tree />
       </div>      
    )
  }
}

export default Sidebar