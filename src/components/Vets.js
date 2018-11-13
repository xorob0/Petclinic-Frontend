import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Vets extends Component {
  constructor() {
    super();
    this.state = {
      rows: [],
    };
  }

  componentWillMount() {
    var that = this;
    const url = "http://localhost:8080/api/v1/vets";

    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        that.setState({ rows: data });
      });
  }

  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell numeric>Firstname</TableCell>
              <TableCell numeric>Lastname</TableCell>
              <TableCell numeric>Speciality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell numeric>{row.firstname}</TableCell>
                  <TableCell numeric>{row.lastname}</TableCell>
                  <TableCell numeric>{row.speciality}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Vets;
