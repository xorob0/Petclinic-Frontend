import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

class PetFormDialog extends React.Component {
  constructor() {
    super();
    this.state = {
			name : "",
			type : "",
			birthdate : "",
			ownerId: 0,
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
		const url = "http://localhost:9999/api/v1/petInsert?name=" + this.state.name + "&type=" + this.state.type + "&birthdate=" + this.state.birthdate + "&ownerId=" + this.state.ownerId;
		fetch(url);
		alert(this.state.name + " was successfully added to the database");
	}

  componentWillMount() {
    const OwnerId = this.props.ownerId;
    this.setState({ ownerId: OwnerId });
}

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Add a pet</DialogTitle>
        <div>
					<form onSubmit={this.handleSubmit}>
						<TextField
							id="Name"
							label="Name"
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
							id="Birthdate"
							label="Birthdate"
							type="date"
							margin="normal"
							InputLabelProps={{
								shrink: true,
							}}
							value={this.state.birthddate}
							onChange={this.handleChange('birthdate')}
						/>
						<button>Add</button>
					</form>
        </div>
      </Dialog>
    );
  }
}

class AddPetButton extends React.Component {
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
        <Button onClick={this.handleClickOpen}>Add a pet</Button>
        <PetFormDialog
          open={this.state.open}
          onClose={this.handleClose}
					ownerId={this.props.match.params.id}
        />
      </div>
    );
  }
}

export default AddPetButton;
