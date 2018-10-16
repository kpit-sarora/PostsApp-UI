import {Dispatch} from 'redux';
import axios from 'axios';
import * as Constants from '../Constants';


interface ILoading {
    type:Constants.ADD_USER_STARTED
}

 interface IFinished{
   type:Constants.ADD_USER_FINISHED

}

interface IError {
    type:Constants.ADD_USER_ERROR
}


export type AddUserAction = ILoading|IFinished | IError;

export function UserLogin(name:string,emailId:string,password:string)
{
    return(dispatch:Dispatch<AddUserAction>)=>{
       dispatch(Loading());
       console.log(emailId);
       axios.post('http://localhost:4000/api/login',{
           emailId:emailId,
           password:password
       })
       .then((res)=>{
         console.log("Response Aageya");
         //console.log(res.data);
         dispatch(Finished(res.data));
       }).catch((err)=>{
           dispatch(Error());
        //console.log("Error aayaa Re");
       })
               
    }
}

function Loading():ILoading{
    console.log("User Add Started ");
return{
type:Constants.ADD_USER_STARTED
}
}

function Finished(data:any):IFinished{
    console.log("User Add Finished");
   
   return{
    type:Constants.ADD_USER_FINISHED
     }
}
function Error():IError{
  
  console.log("User Add Error ");
    return{
        type:Constants.ADD_USER_ERROR    
    }

}


