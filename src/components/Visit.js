import React, { Component } from "react";
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
		city: "",
		address: "",
		phone: "",
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
							onChange={this.handleChange('phone')}
						/>
						<Button>Add</Button>
					</form>
				</Paper>

    );
  }
}

export default Owner;

