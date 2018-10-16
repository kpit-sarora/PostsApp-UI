import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles,createStyles} from '@material-ui/core/styles';
import {Theme} from '@material-ui/core';
import {UserLogin} from '../types/index';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = (theme:Theme) =>createStyles ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


 interface Props extends UserLogin{
    classes:{
        layout:string,
        paper:string,
        avatar:string,
        form:string,
        submit:string
    },
    history:any,
    errorMsg:string,

    UserLogin:(emailId:string,password:string) =>void
}


interface State{
  emailId:string,
  password:string,
  open:boolean,
  msg:string
}
class  SignIn extends React.Component<Props,State> {
    public constructor(props:Props)
    {
        super(props);
        this.handleForm=this.handleForm.bind(this);
        this.handleEmail=this.handleEmail.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleSignUp=this.handleSignUp.bind(this);
        
        this.state={
          emailId:'',
          password:'',
          open:false,
          msg:''

        }
    console.log("Constructor Called");
    
    }

    componentWillReceiveProps(nextProps:Props) {
    //console.log(nextProps);
    if(nextProps.isAuthenticated==null){
       this.setState({msg:'Unauthorized Access',open:true})
    }
    if(nextProps.isError)
    {
      this.setState({msg:'Oops..Something Went Wrong',open:true})
    }
  }
    

    handleForm(){
console.log("Handle View Clicked");
this.props.UserLogin(this.state.emailId,this.state.password);
/*this.props.history.push({
         pathname: `/posts/`
        
})*/
    }

    handleSignUp(){
      console.log("Handle SignUp Called");
      this.props.history.push({
        pathname: `/adduser/`       
       })
    }
 handleEmail(event:any)
 {
   //console.log("I am Clicked")
   this.setState({emailId: event.target.value});
     //console.log(event.target.value);
 }

 handlePassword(event:any)
 {
  this.setState({password: event.target.value});
  // console.log(event.target.value);
 }

 handleClose = () => {
   console.log("I am called");
  this.setState({ open: false });
};

 
render(){
  const { classes } = this.props;
    if(this.props.isAuthenticated)
    {
     this.props.history.push({
         pathname: `/posts/`   
         })
    }

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleEmail}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handlePassword}
            />
          </FormControl>
         
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleForm}
          >
            Sign in
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleSignUp}
          >
            Sign Up
          </Button>


        </form>
        <br/>

     
        { /*<p style={divstyle}> {this.props.errorMsg}</p>*/}

           
           <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.state.msg}</DialogTitle>
        
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
            
          </DialogActions>
        </Dialog>
      </Paper>
    </main>
  )}
}

export default withStyles(styles)(SignIn);
/*
const divstyle={
  backgroundColor:'red'
}*/