import React, {Component} from 'react';
import '../../styles/App.css';
import {connect} from 'react-redux';
import Filter from './Filter'


class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      filter: []
    }

    this.removeFilter = this.removeFilter.bind(this);
  }

  onClickAddFilter(){
    let condition = document.getElementById(this.props.headerNames+' condition').value;
    let filterInputValue = document.getElementById(this.props.headerNames+' filterInput').value;
    let fieldValue = document.getElementById(this.props.headerNames).value;
    let addFilter = true;

    for(let i = 0; this.state.filter.length > i; i++){
      let filterObj = this.state.filter[i]
      if(filterObj.field === fieldValue && filterObj.condition === condition && filterObj.input === filterInputValue){
        alert('that filter already exists');
        addFilter = !addFilter;
        break;
      }
      else if((filterObj.field === fieldValue && this.state.filter.length > 0 && condition === 'Is Empty')||(filterObj.field === fieldValue && filterObj.condition === 'Is Empty')){
        alert('Is Empty condition cannot be combined with any other conditions for the same field');
        addFilter = !addFilter;
        break;
      }
      else if((filterObj.field === fieldValue && condition === 'Is Not Empty' && this.state.filter.length > 0 && (filterObj.condition === 'Contains'|| filterObj.condition === 'Not Contain'))){
        alert('This filter will not change the outcome');
        addFilter = !addFilter;
        break;
      }
      else if(filterObj.field === fieldValue && (condition === 'Contains' || condition === 'Not Contain')&& filterObj.input === filterInputValue && (filterObj.condition === 'Contains' || filterObj.condition === "Not Contain")){
        alert('The exact opposite condition exists');
        addFilter = !addFilter;
        break;
      }
    }
    
    if((filterInputValue.length === 0 || filterInputValue === null) && (condition === 'Contains'|| condition === 'Not Contain')){
      alert('Please input value you wish to filter');
        addFilter = !addFilter;
    }    

    if(addFilter){
      let newFilter = [...this.state.filter, {field: fieldValue, condition: condition, input: filterInputValue}];
      this.setState({
        filter: newFilter
      })
    }    
  }

  onConditionChange(){           
    let disableInput = false;
    let condition = document.getElementById(this.props.headerNames+ ' condition').value;
    let filterInput = document.getElementById(this.props.headerNames+' filterInput')
    if((condition === 'Is Not Empty')||(condition === 'Is Empty')){
      disableInput = true;
      filterInput.value = '' 
      filterInput.disabled = disableInput; 
    }
    else{
      filterInput.disabled = disableInput; 
    }    
  }

  removeFilter(objToDelete){
    let newFilter = this.state.filter
    let i = 0
    while(i <= newFilter.length-1){
      if(newFilter[i].field === objToDelete.field && newFilter[i].condition === objToDelete.condition && newFilter[i].input === objToDelete.input){
        newFilter.splice(i,1)
        i -= 1        
      }
      i += 1
    }    
    this.setState({
      filter: newFilter
    })
  }

  createFieldOptions(){
    let fieldNames =  Object.values(this.props.headerObj[0]);
    let options = []
    for(let i = 0; i <= fieldNames.length-1; i++){
      options.push(<option value={fieldNames[i]} key = {i}>{fieldNames[i]}</option>)
    }
    return options;
  }

  render(){
    return(
      <div className ='search'>
        <div>
          <span role ='img' aria-label='Search'>&#x1f50e;&nbsp;&nbsp;</span>
          <select id = {this.props.headerNames}>
            {this.createFieldOptions()}
          </select>
          
          <select id ={this.props.headerNames+ ' condition'} onChange ={this.onConditionChange.bind(this)}>
            <option value = 'Contains'>Contains</option>
            <option value = 'Not Contain'>Not Contain</option>
            <option value = 'Is Empty'>Is Empty</option>
            <option value = 'Is Not Empty'>Is Not Empty</option>               
          </select>
          
          <input type="text" id= {this.props.headerNames+ ' filterInput'}></input>
          <button onClick = {this.onClickAddFilter.bind(this)}>Add filter</button>
        </div>
        <div>
          <Filter
            filter = {this.state.filter}
            removeFilter = {this.removeFilter}
            key = {Math.random()}
          />                                                             
        </div>
      </div>
    )
  }
}

const getHeaderKeys = (state, props) =>{
  return{
    headerObj: state[props.headerNames]    
  }
}

export default connect(getHeaderKeys)(Search);