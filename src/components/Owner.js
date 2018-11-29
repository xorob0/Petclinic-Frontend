import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';

class Owner extends Component {
  constructor() {
    super();
    this.state = {
    rows: [],
		firstname: "",
		lastname: "",
		city: "",
		address: "",
		phone: "",
    };
  }

  componentWillMount() {


    var that = this;
		
    const url = "http://localhost:9999/api/v1/owners?id=" + this.props.match.params.id;

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
        that.setState({ city: data[0].city });
        that.setState({ address: data[0].address });
        that.setState({ phone: data[0].telephone });
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
							id="Firstname"
							label="Firstname"
							margin="normal"
							value={this.state.firstname}
						/>
						<TextField
							id="Lastname"
							label="Lastname"
							margin="normal"
							value={this.state.lastname}
						/>
						<TextField
							id="Address"
							label="Address"
							margin="normal"
							value={this.state.address}
						/>
						<TextField
							id="City"
							label="City"
							margin="normal"
							value={this.state.city}
						/>
						<TextField
							id="Phone"
							label="Phone"
							margin="normal"
							value={this.state.telephone}
						/>
				</Paper>

    );
  }
}

export default Owner;

