import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import NavigationBar from './SwipeableDrawer';
import Footer from './Footer' ;
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers,ReducersMapObject } from 'redux';
import {StoreState} from './types/index';
import PostsReducer from './Reducers/posts.reducers';
import thunkMiddleware from 'redux-thunk';
import Posts from './Containers/Posts';
import PostDetails from './Containers/PostDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './NotFound';
import UserLoginReducer from './Reducers/userLogin.reducers';
//import ReduxForm from './SimpleForm';
import SignIn from './Containers/SignIn';
import AddUser from './Containers/AddUser';
import AddUserReducer from './Reducers/AddUser.reducers';

const store = createStore<StoreState,any,any,any>(combineReducers({
  loadPosts:PostsReducer,
  userLogin:UserLoginReducer,
  addUser:AddUserReducer
}as ReducersMapObject),
applyMiddleware(thunkMiddleware));

store.subscribe(()=>{
   console.log(store.getState());
 })
 


const Products = ()=>{
  return (
      <div>
      <h3>Products</h3>
      </div>  
  )
}

const About = ()=>{
  return(
   <div>
       <h3> About Us </h3>
    </div>
  )
}
/*
const PostRouting=(props:any)=>{
  return(
    <div>
    <NavigationBar {...props}/>
    <Posts {...props}/>
    <Footer/>
    </div>

  )
}
*/
const DefaultConatiner=(props:any)=>(
<div>
  <NavigationBar{...props}/>
  <Switch>
  <Route  path="/posts" component={Posts}/>
    <Route  path='/postdetails/:id' component={PostDetails}/>
    <Route path='/about' component={About}/>
    <Route exact path='/products' component={Products}/>
    <Route component={NotFound}/>
    </Switch>
    <Footer/>
  </div>

)

const Routing = () =>(
  <BrowserRouter >
  <div>
  <Switch>
  <Route exact path="/" component={SignIn}/>
  <Route exact path="/adduser" component={AddUser}/>
  <Route component={DefaultConatiner}/>
    {/*
    <Route component={AppContainer}>
    <Route  path="/signin" component={SignIn}/>
    <Route  path="/posts" render={PostRouting}/>
    <Route  path='/postdetails/:id' component={PostDetails}/>
    <Route path='/about' component={About}/>
    <Route exact path='/products' component={Products}/>
    <Route component={NotFound}/>
    </Route>
    */}
  
  </Switch>
  
  </div>
</BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
  <Routing/>
  </Provider> ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
