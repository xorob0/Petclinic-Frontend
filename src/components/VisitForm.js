import React from 'react';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

class AddOwnerDialog extends React.Component {
  constructor() {
    super();
    this.state = {
			rows: [],
			date : "",
			description : "",
			petId : 0,
			vetId : 0,
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
		const url = "http://localhost:9999/api/v1/visitInsert?date=" + this.state.date + "&description=" + this.state.description + "&petId=" + this.state.petId + "&vetId=" + this.state.vetId;
		//TODO date picker
		//TODO vetid
		console.log(url);
		fetch(url);
		alert(this.state.description + " was successfully added to the database");
	}

  componentWillMount() {
    const PetId = this.props.petid;
    this.setState({ petId: PetId });
    var that = this;
    const url = "http://localhost:9999/api/v1/vets";
		var vets = [];

    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
				data.map( vet => {
					vets = [...vets, {value: vet.id, label: vet.lastname}]
				})
        that.setState({ rows: vets });
      });
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
        <TextField
          id="vet"
          select
          label="select"
          value={this.state.vetId}
          onChange={this.handleChange('vetId')}
          helperText="Please select your vet"
          margin="normal"
        >
          {this.state.rows.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
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
					petid={this.props.match.params.id}
        />
      </div>
    );
  }
}

export default AddOwnerDialogButton;
