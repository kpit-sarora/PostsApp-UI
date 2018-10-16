import * as constants from '../Constants/index';
import{AddUser} from '../types/index';
import { AddUserAction} from '../Actions/userAdd.actions';

const init:AddUser={
     isError:false,
     isAdded:false,
     isLoading:false
}    

export default function PostsReducer (state:AddUser=init,action:AddUserAction){
    switch(action.type)
    {
       case constants.ADD_USER_STARTED:
        return { ...state, isLoading: true };
       case constants.ADD_USER_FINISHED:
           return {...state,isLoading:false,isError:false,isAdded:true}
       case constants.ADD_USER_FINISHED:
           return {...state,isLoading:false,isError:true}
       default:
       return {...state}
    }
}