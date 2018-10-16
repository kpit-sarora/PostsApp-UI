import {Dispatch} from 'redux';
import axios from 'axios';
import * as Constants from '../Constants';


interface IUserLoginStarted {
    type:Constants.LOGIN_STARTED
}

 interface IUserLoginFinished{
   type:Constants.LOGIN_FINISHED,
   isAuthenticated:boolean|null
}

interface IUserLoginError {
    type:Constants.LOGIN_ERROR
}

interface IUserLogOut {
    type:Constants.USER_LOGOUT
}

export type LoginAction = IUserLoginStarted|IUserLoginFinished|IUserLoginError|IUserLogOut;

export function UserLogin(emailId:string,password:string)
{
    return(dispatch:Dispatch<LoginAction>)=>{
       dispatch(UserLoginStarted());
       console.log(emailId);
       axios.post('http://localhost:4000/api/login',{
           emailId:emailId,
           password:password
       })
       .then((res)=>{
         console.log("Response Aageya");
         //console.log(res.data);
         dispatch(UserLoginFinished(res.data));
       }).catch((err)=>{
           dispatch(UserLoginError());
        //console.log("Error aayaa Re");
       })
               
    }
}

function UserLoginStarted():IUserLoginStarted{
    console.log("User Login Started ");
return{
type:Constants.LOGIN_STARTED
}
}

function UserLoginFinished(data:any):IUserLoginFinished{
    console.log("User Login Finished");
   console.log(data);
   if(data==''){
       console.log("In Null");
return{
    type:Constants.LOGIN_FINISHED,
    isAuthenticated:null
}
   }
   return{
    type:Constants.LOGIN_FINISHED,
    isAuthenticated:true
     }
}
function UserLoginError():IUserLoginError{
  
  console.log("Posts  Loading Error ");
    return{
        type:Constants.LOGIN_ERROR      
    }

}

export function UserLogout():IUserLogOut{
    return{
        type:Constants.USER_LOGOUT      
    }

}
