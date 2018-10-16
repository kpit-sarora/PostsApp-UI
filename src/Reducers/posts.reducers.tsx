import { loadPosts } from '../types/index';
import {PostsAction} from '../Actions/posts.actions';
import * as constants from '../Constants/index';

const init={iserror:false,
isloading:false,
isSignedIn:false,
posts:[]
}

export default function PostsReducer (state:loadPosts=init,action:PostsAction){
    switch(action.type)
    {
       case constants.POSTS_LOADING:
        return { ...state, isloading: true };
       case constants.POSTS_LOADED:
           return {...state,posts:action.data,isloading:false}
       case constants.POSTS_LOADING_ERROR:
           return {...state,isloading:false,iserror:true}
       default:
       return {...state}
    }
}