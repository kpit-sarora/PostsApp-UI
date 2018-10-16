import AddUser from '../Components/AddUser';
import * as loginActions from '../Actions/userLogin.actions';

import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import { StoreState } from '../types';
export function mapStateToProps(props:StoreState,ownProps:any) {
      const {isError,isLoading,isAdded} =props.addUser;
      var errorMsg:string='';
      
      if(isError)
      {
        errorMsg='Something Went Wrong';
      }
      if(isLoading)
      {
        errorMsg='Connecting to Server !!';
      }
  return {
      isError,
      isLoading,
      isAdded,
      errorMsg
      }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    AddUser: (name:string,emailId:string,password:string) => dispatch<any>(loginActions.UserLogin(emailId,password))
  } 
}


export default connect(mapStateToProps,mapDispatchToProps) (AddUser);
