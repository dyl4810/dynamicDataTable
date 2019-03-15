import React from "react";
import "../../styles/App.css";
import { connect } from "react-redux";
import Search from './Search';
import UpDownArrow from './UpDownArrow';
import {sortByField, duplicateData} from '../../actions/postActions'

class Table extends React.Component {

  constructor(props){
    super(props);
    this.onArrowClick =this.onArrowClick.bind(this)
  }

  componentWillMount(){
    this.props.duplicateData(this.props.dataName)
    console.log('Redux state passed onto Table component after completion of duplicateData action:')
    console.log(this.props.modifiedState.newcontacts)
  }

  createDataRows(){
    console.log('creating data rows')
    let renderedRows = [];
    let data = this.props.modifiedState.newcontacts;
    let fieldKeys = Object.keys(data[0]);
 
    for(let i=0; i <= data.length -1; i++){
      let tds =[]
      for(let j=0; j <= fieldKeys.length -1; j++){
        tds.push(<td className ='tableCell' key={j}>{data[i][fieldKeys[j]]}</td>)
      }
      renderedRows.push(<tr key = {i}>{tds}</tr>)
    }
    return renderedRows;
  }

  createDataHeader(){
    console.log('creating data header')
    let headers = Object.values(this.props.headerObj[0]);
    let headerKeys = Object.keys(this.props.headerObj[0]);
    let ths =[];
    for(let i =0; i<= headers.length-1; i++){
      ths.push(
        <th className='tableCell' key = {i}>
          {headers[i]}
          <UpDownArrow
            onArrowClick = {this.onArrowClick}
            ref={(fieldArrow)=>this[headerKeys[i] + 'Arrow'] = fieldArrow}
            id= {headerKeys[i]} 
          />
        </th>
      )
    }
    return ths;    
  }

  onArrowClick(headerKeyActive){
    Object.keys(this.props.headerObj[0]).forEach(headerKey =>{
      if(headerKey !== headerKeyActive){
        this[headerKey + 'Arrow'].defaultDownArrow()
      }
    })
    this.props.sortByField(headerKeyActive, this.props.dataName)
    console.log(this.props.modifiedState.newcontacts)
  }  

  render() {
    return (
      <div>
        <Search headerNames = {this.props.headerNames}/>
        <table>
          <thead>
            <tr>
              {this.createDataHeader()}
            </tr>
          </thead>
          <tbody>
            {this.createDataRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    headerObj: state[props.headerNames],
    modifiedState: state
    /* duplicatedData: state['new' + props.dataName],
    duplicatedData2: state['newcontacts'],  Need to understand why these won't work*/
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    sortByField: (headerKeyActive, dataName) => dispatch(sortByField(headerKeyActive, dataName)),
    duplicateData: (dataName) => dispatch(duplicateData(dataName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
