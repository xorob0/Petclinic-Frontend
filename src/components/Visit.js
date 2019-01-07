import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Visit extends Component {
  constructor() {
    super();
    this.state = {
    rows: [],
		date: "",
		description: "",
		id: 0,
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

	handleSubmit = (e) => {
		// TODO working edit
		const url = "http://localhost:9999/api/v1/visits?id=" + this.state.id + "description=" + this.state.description + "&date=" + this.state.date + "&address=" + this.state.address + "&city=" + this.state.city + "&telephone=" + this.state.telephone;
		fetch(url);
		// TODO better alert
		alert(this.state.description + " was successfully edited");
	}


  componentWillMount() {


    var that = this;
		
    const url = "http://localhost:9999/api/v1/visit?id=" + this.props.match.params.id;

    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
		console.log(data);
        that.setState({ date: data[0].date });
        that.setState({ description: data[0].description });
      });
  }

  render() {
    return (
			<Paper>
					<form onSubmit={this.handleSubmit}>
						<TextField
							id="Date"
							label="Date"
							type="date"
							margin="normal"
							defaultValue="2017-05-24"
							InputLabelProps={{
								shrink: true,
							}}
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
						<Button>Add</Button>
					</form>
				</Paper>

    );
  }
}

export default Visit;

