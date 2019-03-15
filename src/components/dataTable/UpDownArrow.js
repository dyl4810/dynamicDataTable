import React from 'react'
import '../../styles/App.css'

class UpDownArrow extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      IsDown: true,
      arrowStyle: 'upDownArrow',
      isActive: false      
    }
  }

  onClick(){
    this.setState({
      IsDown: !this.state.IsDown,
      arrowStyle: 'upDownArrowActive',
      isActive: true
    })
    this.props.onArrowClick(this.props.id)
  }

  defaultDownArrow(){
    this.setState({
      IsDown: true,
      arrowStyle: 'upDownArrow',
      isActive: false
    })
  }

  render(){
    return this.state.IsDown?
    <span 
      onClick ={this.onClick.bind(this)} 
      className = {this.state.arrowStyle}>
        &#x025BE;
    </span>
    :
    <span 
      onClick ={this.onClick.bind(this)} 
      className = {this.state.arrowStyle}>
        &#x025B4;
    </span>
  }
}
export default UpDownArrow