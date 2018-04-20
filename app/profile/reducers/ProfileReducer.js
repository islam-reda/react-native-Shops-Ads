//login
const INITAL_STATE = {loading : false,  error : '', name : null,collection : ''};
import {
  GET_PROFILE_ATTEMP,GET_PROFILE_ATTEMP_SUCCESS,GET_PROFILE_ATTEMP_FAILED
} from '../actions/types';
export default(state = INITAL_STATE,action) => {
  switch (action.type) {

    case GET_PROFILE_ATTEMP:
      return {...INITAL_STATE ,loading : true}
    case GET_PROFILE_ATTEMP_FAILED:
      return {...INITAL_STATE ,loading : false,error: action.error,collection:[]}
    case GET_PROFILE_ATTEMP_SUCCESS:      
      console.log(action.collection);
      return {...INITAL_STATE ,loading : false,name: action.name,email: action.email,image: action.image,products: action.collection}


    default:
      return state;
  }
}
