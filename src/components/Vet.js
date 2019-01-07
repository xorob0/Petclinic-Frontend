import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Owner extends Component {
  constructor() {
    super();
    this.state = {
    rows: [],
		firstname: "",
		lastname: "",
		Speciality: "",
    };
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

	handleSubmit = (e) => {
		// TODO working edit
		const url = "http://localhost:9999/api/v1/ownerEdit?id=" + this.state.id + "lastname=" + this.state.lastname + "&firstname=" + this.state.firstname + "&address=" + this.state.address + "&city=" + this.state.city + "&telephone=" + this.state.telephone;
		fetch(url);
		// TODO better alert
		alert(this.state.firstname + " was successfully edited");
	}


  componentWillMount() {


    var that = this;
		
    const url = "http://localhost:9999/api/v1/vets?id=" + this.props.match.params.id;

    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
		console.log(data);
        that.setState({ firstname: data[0].firstname });
        that.setState({ lastname: data[0].lastname });
        that.setState({ speciality: data[0].telephone });
        that.setState({ id: data[0].id });
      });
	}

  render() {
    return (
			<Paper>
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
							id="speciality"
							label="speciality"
							margin="normal"
							value={this.state.speciality}
							onChange={this.handleChange('speciality')}
						/>
						<Button onClick={this.handleSubmit}>Edit</Button>
					</form>
				</Paper>
    );
  }
}

export default Owner;

