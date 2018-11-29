import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

class AddOwnerDialog extends React.Component {
  constructor() {
    super();
    this.state = {
			firtname : "",
			lastname : "",
			address : "",
			city : "",
			telephone : "",
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
		const url = "http://localhost:9999/api/v1/ownerInsert?lastname=" + this.state.lastname + "&firstname=" + this.state.firstname + "&address=" + this.state.address + "&city=" + this.state.city + "&telephone=" + this.state.telephone;
		fetch(url);
		alert(this.state.firstname + " was successfully added to the database");
	}

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Add an owner</DialogTitle>
        <div>
					<form onSubmit={this.handleSubmit}>
						<TextField
							id="Firstname"
							label="Firstname"
							margin="normal"
							value={this.state.firstname}
							onChange={this.handleChange('firstname')}
						/>
						<TextField
							id="Lastname"
							label="Lastname"
							margin="normal"
							value={this.state.lastname}
							onChange={this.handleChange('lastname')}
						/>
						<TextField
							id="Address"
							label="Address"
							margin="normal"
							value={this.state.address}
							onChange={this.handleChange('address')}
						/>
						<TextField
							id="City"
							label="City"
							margin="normal"
							value={this.state.city}
							onChange={this.handleChange('city')}
						/>
						<TextField
							id="Phone"
							label="Phone"
							margin="normal"
							value={this.state.telephone}
							onChange={this.handleChange('telephone')}
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
        <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
        <AddOwnerDialog
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default AddOwnerDialogButton;
