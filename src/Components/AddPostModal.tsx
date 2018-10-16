import * as React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
//import RadioGroup from '@material-ui/core/RadioGroup';
//import Radio from '@material-ui/core/Radio';
//import FormControlLabel from "@material-ui/core/FormControlLabel";

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button";

interface Props {
 classes:any,
 open:any,
 onClose:any,
}


class AddPostModal extends React.Component<Props> {
    constructor(props:Props) {
      super(props);
      
    }
  
   
  
    handleEntering = () => {
     // this.radioGroupRef.focus();
    };
  
    handleCancel = () => {
      this.props.onClose();
    };
  
    handleOk = () => {
      this.props.onClose();
    };
  
   
  
    render() {
     //const {  ...other } = this.props;
  
      return (
        <Dialog
        
          disableBackdropClick
          disableEscapeKeyDown
          maxWidth="xs"
          onEntering={this.handleEntering}
          aria-labelledby="confirmation-dialog-title"
        open={this.props.open}
        className={this.props.classes}
      
        >
          <DialogTitle id="confirmation-dialog-title">Add Post</DialogTitle>
          <DialogContent>
             

            <form >
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="Post Title">Post Title</InputLabel>
            <Input id="name" name="name"  autoFocus
            />
          </FormControl>
          
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Description</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
             
            />
          </FormControl>
          </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleOk} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      );
    }
  }

  export default AddPostModal;
  