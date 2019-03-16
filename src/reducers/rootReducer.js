import { invoke } from "q";

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
    },
    {
      id: 2,
      company: "Facebook",
      title: "Frontend Developer",
      firstName: "Edward",
      lastName: "Simmons",
      officePh: "408-516-4662",
      ext: "003",
      cell: "669-252-4251",
      email: "edwardsimmons@gmail.com"
    },
    {
      id: 3,
      company: "Amazon",
      title: "Data Scientist",
      firstName: "Harry",
      lastName: "Davis",
      officePh: "",
      ext: "",
      cell: "408-344-2110",
      email: "harrydavis0@gmail.com"
    },
    {
      id: 4,
      company: "Google",
      title: "Googler",
      firstName: "Katherine",
      lastName: "Jones",
      officePh: "408-963-7156",
      ext: "846",
      cell: "408-828-0550",
      email: "katherinejones0@gmail.com"
    },
    {
      id: 5,
      company: "Alibaba",
      title: "Scammer",
      firstName: "Eric",
      lastName: "Brown",
      officePh: "510-663-5552",
      ext: "462",
      cell: "408-644-0110",
      email: "ericbrown@gmail.com"
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
      let compare = (a,b) =>{
        let aa = a[action.headerKeyActive].toUpperCase();
        let bb = b[action.headerKeyActive].toUpperCase();
        return((aa>bb)?1:-1)      
      }
      console.log('sort by: ' + action.headerKeyActive)
      Object.assign(state.newcontacts,state.newcontacts.sort((a,b) => compare(a,b)))
      return state;

    case 'DUPLICATE_DATA':
      Object.assign(state.newcontacts, state.contacts);
      console.log(state.newcontacts)
      return state
      
    default:
      return state;
  }   
};

export default rootReducer;
