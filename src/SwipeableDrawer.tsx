import * as React  from 'react';
import IconButton from "@material-ui/core/IconButton";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from "@material-ui/core/styles/withStyles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import { MailFolderListItems} from './titleData';
import { createStyles } from '../node_modules/@material-ui/core';
import {Dispatch} from 'redux';
import * as loginActions from './Actions/userLogin.actions';
import { connect } from 'react-redux';

const styles = createStyles({
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButtonRight: {
        marginRight: -25
      //paddingRight:-25
      },
    list: {
        width: 200,
      }
  });
  
interface Props{
  history?:any,
  classes: {
    list:string,
    flex:string,
    menuButtonRight:string
  },
  Logout: () => void,
  name:string
}

interface State{
  width:number,
  right:boolean
}

interface Direction{
  right:boolean
}
class Swipe extends React.Component<Props,State> {

  public readonly state: State = {
  width:100,
  right:false
  }
    constructor(props:Props) {
        super(props);
        this.setRedirect=this.setRedirect.bind(this);
        this.state.width = window.innerWidth;
        this.Logout=this.Logout.bind(this);
        console.log(this.props.name);
      }
      direction : Direction= {
        right: false,
      };
    
      componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

      toggleDrawer = (open1:boolean) => () => {
        this.setState({
          right:open1
        });
      };
       
      setRedirect(path:string){
        console.log("Hello" + path);

        this.props.history.push({
          pathname: path,
        });

        
        
       // browserHistory.push('/about');
      }

      Logout(){
        this.props.Logout();
        this.props.history.push({
          pathname: '/'
        });
      }
   
      render() {
        const {classes}=this.props;
        //It could be written as const classes = this.props.classes
      //  console.log(this.props);
         const  width  = this.state.width;
        const isMobile = width <= 500;

        const sideList = (
          <div className={classes.list}>
            <List> <MailFolderListItems setRedirect={this.setRedirect} Logout={this.Logout}/></List>
          </div>
        );
      
        if (isMobile) {
          return (
              <div>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.flex}>
                  Post's App
                </Typography>
                <IconButton  color="inherit" aria-label="Menu" className={classes.menuButtonRight}
                   onClick={this.toggleDrawer(true)} />
              <MenuIcon/>
              </Toolbar>
            </AppBar>
            
            <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
           </div>
          );
        } else {
          return (
            <div >
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" color="inherit" className={classes.flex}>
               Post's App
                </Typography>
                <Button color="inherit" onClick={()=>this.setRedirect('/posts')}>Home</Button> 
                <Button color="inherit" onClick={()=>this.setRedirect('/about')}>About us</Button>  
                <Button color="inherit"  onClick={()=>this.setRedirect('/products')}>Products</Button>
                <Button color="inherit"  onClick={()=>this.Logout(

                )}>Logout</Button>
              </Toolbar>
            </AppBar>
          </div>
          );
        }
      }
}
export function mapStateToProps(props:any) {
  console.log(props);
 const name='Sahil';
return {
   name
  }
}


export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    Logout: () => dispatch<any>(loginActions.UserLogout())
  } 
}


export default  connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Swipe));
