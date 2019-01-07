import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

class AddOwnerDialog extends React.Component {
  constructor() {
    super();
    this.state = {
			date : "",
			description : "",
			petId : 0,
    };
  }

  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

	handleSubmit = (e) => {
		const url = "http://localhost:9999/api/v1/visitInsert?date=" + this.state.date + "&description=" + this.state.description + "&petId=" + this.state.petId;
		fetch(url);
		alert(this.state.description + " was successfully added to the database");
	}

  componentWillMount() {
    const PetId = this.props.petId;
    this.setState({ petId: PetId });
}

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Add a pet</DialogTitle>
        <div>
					<form onSubmit={this.handleSubmit}>
						<TextField
							id="Date"
							label="Date"
							margin="normal"
							value={this.state.date}
							onChange={this.handleChange('date')}
						/>
						<TextField
							id="Description"
							label="Description"
							margin="normal"
							value={this.state.description}
							onChange={this.handleChange('description')}
						/>
						<button>Add</button>
					</form>
        </div>
      </Dialog>
    );
  }
}

class AddOwnerDialogButton extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Add a visit</Button>
        <AddOwnerDialog
          open={this.state.open}
          onClose={this.handleClose}
					petId={this.props.match.params.id}
        />
      </div>
    );
  }
}

export default AddOwnerDialogButton;
