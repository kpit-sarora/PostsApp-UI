
import * as React from 'react';
import { Posts } from '../types';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {Theme} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddPostModal from '../Components/AddPostModal';


const styles = (theme:Theme) => createStyles({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 5}px 0`,
  },
  card: {
    width:'250px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  headerUnit: {
     backgroundColor: theme.palette.background.paper,
     },
     headerContent: {
       maxWidth: 600,
       margin: '0 auto',
       padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
     },
     headerButtons: {
       marginTop: theme.spacing.unit * 4,
     },
    
     addPostModal: {
     // width: '100%',
      maxHeight: '500px'    }
    
});

export interface Props {
    iserror: boolean;
    isloading: boolean;
    posts:Array<Posts>;
    name:string;
    isSignedIn:boolean;
    history:any,
    classes:{
      layout:string,
      cardGrid:string,
      card:string,
      cardMedia:string,
      cardContent:string,
      headerUnit:string,
      headerContent:string,
      headerButtons:string,
      addPostModal:string,
      root:string
     }
    LoadPosts: () => void;
  }

  interface State{
    openAddPostModal:boolean
  }
  class Post extends React.Component<Props,State> {
    
   public constructor(props:Props)
    {
        super(props);
        this.handleView=this.handleView.bind(this);
        this.state={
          openAddPostModal:false
        }
      
        this.handleAddPostClick=this.handleAddPostClick.bind(this);
        this.handleAddPostClose=this.handleAddPostClose.bind(this);
    }
    componentWillMount(){
      this.props.LoadPosts();
    }

    handleAddPostClick ()  {
      console.log("Handle Add Post Click");
      this.setState({ openAddPostModal: true });
    };
  
    handleAddPostClose =() => {
      this.setState( {openAddPostModal: false });
    };

    /** @type ... */
    handleView(postid:number){
           console.log(postid);
           this.props.history.push({
            pathname: `/postdetails/${postid}`
           /*
           pathname:'/postdetails',
          state: { detail: postid }
           */
           
          });
    }
     render() {
    /*
      if(this.props.isSignedIn==false)
      {
        return(
          <div>
            Hello
            </div>
        )
      }
      */
      console.log(this.props.name);
      console.log(this.state.openAddPostModal);
    //  return(<div>Hello</div>)

    let condRender = null;
    const { classes,posts } = this.props;

       if(this.props.isloading  == true && this.props.iserror==false )
       {
        
         console.log("Posts Loading");
        condRender = <div style={{padding:'30px'}}> <h2> Post's are Loading !!</h2></div>;
    
       }
       else
       {
         if(this.props.iserror ==true && this.props.isloading==false)
         {
           console.log("Post Error");
          condRender = <div style={{padding:'30px'}}> <h2>Oops ... Something Went Wrong !!</h2> </div>;
         }
         else
         {
           console.log("Post Loaded");
         console.log(posts);
            condRender = 
            <div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {posts.map(post => (
              <Grid item key={post.postid} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography>
                     {post.postdata}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={()=>this.handleView(post.postid)}>
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button size="small" color="secondary">
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>

       </div>
         }
       }
       return (     
      <div >
         <div className={classes.headerUnit}>
          <div className={classes.headerContent}>
            <Typography variant="h2" align="center" color="textPrimary">
              Post's App
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              This application is developed using TypeScript,React,Redux and Material-UI. 
            </Typography>
            <div className={classes.headerButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=>this.handleAddPostClick()}>
                    Add New Post
                  </Button>
                </Grid>
                
              </Grid>
            </div>
          </div>
        </div>

           
      
           <AddPostModal
            classes={this.props.classes.addPostModal}
            open={this.state.openAddPostModal}
            onClose={this.handleAddPostClose}
          />
        {condRender}
      
     </div>  
       )}
  }
  
  export default withStyles(styles) (Post);

