import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

class AddPetsDialog extends React.Component {
  constructor() {
    super();
    this.state = {
			name : "",
			type : "",
			first : "",
			last : "",
			birth : "",
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
		const url = "http://localhost:8080/api/v1/petInsert?type=" + this.state.type + "&name=" + this.state.name + "&ownerFirstname=" + this.state.first + "&ownerLastname=" + this.state.last + "&birthdate=" + this.state.birth;
		fetch(url);
		alert(this.state.name + " was successfully added to the database");
	}

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Add a pet</DialogTitle>
        <div>
					<form onSubmit={this.handleSubmit}>
						<TextField
							id="Nom"
							label="Nom"
							margin="normal"
							value={this.state.name}
							onChange={this.handleChange('name')}
						/>
						<TextField
							id="Type"
							label="Type"
							margin="normal"
							value={this.state.type}
							onChange={this.handleChange('type')}
						/>
						<TextField
							id="Owner firstname"
							label="Owner firstname"
							margin="normal"
							value={this.state.first}
							onChange={this.handleChange('first')}
						/>
						<TextField
							id="Owner lastname"
							label="Owner lastname"
							margin="normal"
							value={this.state.last}
							onChange={this.handleChange('last')}
						/>
						<TextField
							id="Birthdate"
							label="Birthdate"
							margin="normal"
							value={this.state.birth}
							onChange={this.handleChange('birth')}
						/>
						<button>Add</button>
					</form>
        </div>
      </Dialog>
    );
  }
}

class AddPetsDialogButton extends React.Component {
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
        <AddPetsDialog
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default AddPetsDialogButton;
