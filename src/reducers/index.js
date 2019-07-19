const Category = (state ='Nenhuma', action ) =>{
    switch (action.type){
      case 'ADDSTATE' : return state = action.lastCategory;
    }
    return state
  }
  
  export default Category;