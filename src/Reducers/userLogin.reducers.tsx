import{UserLogin} from '../types/index';
import * as constants from '../Constants/index';
import {LoginAction} from '../Actions/userLogin.actions';

const init:UserLogin={
    isAuthenticated:false,
    userEmail:'',
    userName:'',
    isError:false,
    isLoading:false
}    
export default function PostsReducer (state:UserLogin=init,action:LoginAction){
    switch(action.type)
    {
       case constants.LOGIN_STARTED:
        return { ...state, isLoading: true ,isAuthenticated:false,isError:false};
       case constants.LOGIN_FINISHED:
           return {...state,isLoading:false,isError:false,isAuthenticated:action.isAuthenticated}
       case constants.LOGIN_ERROR:
           return {...state,isLoading:false,isError:true}
       case constants.USER_LOGOUT:
       return{...state,isAuthenticated:false}
       default:
       return {...state}
    }
}