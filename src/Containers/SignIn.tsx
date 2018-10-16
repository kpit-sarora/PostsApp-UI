import SignIn from '../Components/SignIn';
import * as loginActions from '../Actions/userLogin.actions';

import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import { StoreState } from '../types';


export function mapStateToProps(props:StoreState,ownProps:any) {
      const {isError,isLoading,isAuthenticated} =props.userLogin;
      var errorMsg:string='';
      if(isAuthenticated==null)
      {
        errorMsg='Authentication Failed';
      }
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
      isAuthenticated,
      errorMsg
      }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    UserLogin: (emailId:string,password:string) => dispatch<any>(loginActions.UserLogin(emailId,password))
  } 
}


export default connect(mapStateToProps,mapDispatchToProps) (SignIn);
