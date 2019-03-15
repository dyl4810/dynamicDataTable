import React, {Component} from 'react';
import '../../styles/App.css'

class Filter extends Component{
  renderAllFilters = () => {
    let filter = this.props.filter
    
      let renderedFilter = []
      for(let i = 0; i <= filter.length-1; i++){
        let isEmptyFilter = (filter[i].condition === 'Is Not Empty' || filter[i].condition === 'Is Empty');
          renderedFilter.push(
            <span key = {i}>
              <span className = 'filter' key = {i}>
                <b>{filter[i].field}</b>
                &nbsp;
                <i>{filter[i].condition}</i>
                &nbsp;
                {!isEmptyFilter ? <q>{filter[i].input}</q>: null}
                &nbsp;
                <b className ='filterClose' onClick = {() => this.props.removeFilter(filter[i])}>&times;</b>
              </span>
              &nbsp;&nbsp;
            </span>
          )
      }
      return renderedFilter     
  }
  
  render(){
    return (this.props.filter.length > 0)?this.renderAllFilters():null
  }
}
export default Filter
