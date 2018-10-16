import Post from '../Components/Posts';
import * as actions from '../Actions/posts.actions';

import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import { StoreState } from '../types';


export interface OwnProps {
  name: string
}

export function mapStateToProps(props:StoreState,ownProps:any) {
      const {iserror,isloading,posts,isSignedIn} =props.loadPosts;
  return {
        iserror,
        isloading,
        posts,
        ownProps,
        isSignedIn
      }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    LoadPosts: () => dispatch<any>(actions.LoadPosts())
  } 
}


export default connect(mapStateToProps,mapDispatchToProps) (Post);
