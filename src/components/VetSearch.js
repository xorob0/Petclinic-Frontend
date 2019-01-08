import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PetSearch extends Component {
  constructor() {
    super();
    this.state = {
		search: "",
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

	handleSubmit = (e) => {
			this.props.history.push("/vetsSearch/" + this.state.search);
	}

  render() {
    return (
			<Paper>
						<TextField
							id="Search"
							label="Search"
							margin="normal"
							value={this.state.name}
							onChange={this.handleChange('search')}
						/>
						<Button onClick={this.handleSubmit}>Search</Button>
				</Paper>
    );
  }
}

export default PetSearch;

