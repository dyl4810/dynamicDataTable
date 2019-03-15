const initState = {
  treeData: [
    {
      id: 1,
      name: "Contacts",
      children: []
    }
  ],

  treeDepth: 0,

  contacts: [
    {
      id: 1,
      company: "Rapid Precision Mfg.",
      title: "Quality Engineer",
      firstName: "Dongyob",
      lastName: "Lee",
      officePh: "",
      ext: "",
      cell: "669-294-0910",
      email: "dyl4810@gmail.com"
    }
  ],
  contactsKeyNames: [
    {
      id: "ID",
      company: "Company",
      title: "Title",
      firstName: "First Name",
      lastName: "Last Name",
      officePh: "Office",
      ext: "Ext",
      cell: "Cell",
      email: "Email"
    }
  ],
  newcontacts: []
};
const rootReducer = (state = initState, action) => {
  switch(action.type){
    case 'SORT_BY_FIELD':
      break;

    case 'DUPLICATE_DATA':
      let newState = state;
      newState.newcontacts = newState.contacts;
      state = newState;
      console.log('modified redux state inside of redux action DUPLICATE_DATA:')
      console.log(state.newcontacts)
      return state;

    default:
      return state;
  }   
  return state;
};

export default rootReducer;
