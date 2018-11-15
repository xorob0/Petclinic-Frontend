import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import TextField from '@material-ui/core/TextField';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {
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

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

	handleSubmit = (e) => {
		const url = "http://localhost:8080/api/v1/petInsert?type=" + this.state.type + "&name=" + this.state.name + "&ownerFirstname=" + this.state.first + "&ownerLastname=" + this.state.last + "&birthdate=2017-11-11";
		fetch(url);
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

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
  state = {
    open: false,
    selectedValue: emails[1],
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    return (
      <div>
        <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
        <br />
        <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default SimpleDialogDemo;
