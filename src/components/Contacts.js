import React, {Component} from 'react';
import '../styles/App.css';
import {connect} from 'react-redux';
import Table from './dataTable/Table';

class Contacts extends Component{

  render(){
     return(
       <div className ='contacts'>
         <Table dataName = {'contacts'} headerNames = {'contactsKeyNames'}/>
       </div>
    )
  }
}

const getContacts = state =>{
  return {
    contacts: state.contacts
  };
}

export default connect(getContacts)(Contacts);