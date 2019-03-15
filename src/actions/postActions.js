export const sortByField = (headerKeyActive, dataName) =>{
  return{
    type: 'SORT_BY_FIELD',
    headerKeyActive,
    dataName
  }
}

export const duplicateData = (dataName) =>{
  return{
    type: 'DUPLICATE_DATA',
    dataName
  }
}