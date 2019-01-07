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
		name: "",
		type: "",
		birthdate: "",
		ownerId: "",
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

	handleSubmit = (e) => {
		// TODO working edit
		const url = "http://localhost:9999/api/v1/petUpdate?id=" + this.state.id + "&type=" + this.state.type + "&name=" + this.state.name + "&ownerId=" + this.state.ownerId + "&birthdate=" + this.state.birthdate + "&telephone=" + this.state.telephone;
		fetch(url);
		// TODO better alert
		alert(this.state.name + " was successfully edited");
	}

	handleDelete = (e) => {
		const url = "http://localhost:9999/api/v1/petDelete?id=" + this.state.id;
		console.log(url);
		fetch(url);
		// TODO better alert
		alert(this.state.name + " was successfully deleted");
	}

  handleOwner = (event) => {
			this.props.history.push("/owner/" + this.state.ownerId);
  };

  componentWillMount() {


    var that = this;
		
    const url = "http://localhost:9999/api/v1/pets?id=" + this.props.match.params.id;

    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
		console.log(data);
        that.setState({ name: data[0].name });
        that.setState({ type: data[0].type });
        that.setState({ birthdate: data[0].birthdate });
        that.setState({ ownerId: data[0].ownerId });
        that.setState({ id: data[0].id });
      });

    // const urlPets = "http://localhost:9999/api/v1/pets?ownerId=" + this.props.match.params.id;

    // fetch(urlPets)
    //   .then(function(response) {
    //     if (response.status >= 400) {
    //       throw new Error("Bad response from server");
    //     }
    //     return response.json();
    //   })
    //   .then(function(data) {
				// console.log(data);
    //     this.setState({ rows: data });
    //   });
  }

  render() {
    return (
			<Paper>
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
							margin="normal"
							value={this.state.birthdate}
							onChange={this.handleChange('birthdate')}
						/>
						<Button onClick={this.handleSubmit}>Edit</Button>
						<Button onClick={this.handleOwner}>Owner</Button>
						<Button onClick={this.handleDelete}>Delete pet</Button>
				</Paper>

    );
  }
}

export default Owner;

