import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Owners extends Component {
  constructor() {
    super();
    this.state = {
      rows: [],
    };
  }

  componentWillMount() {
    var that = this;
    const url = "http://localhost:9999/api/v1/owners";

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
              <TableCell numeric>Address</TableCell>
              <TableCell numeric>City</TableCell>
              <TableCell numeric>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell numeric>{row.firstname}</TableCell>
                  <TableCell numeric>{row.lastname}</TableCell>
                  <TableCell numeric>{row.address}</TableCell>
                  <TableCell numeric>{row.city}</TableCell>
                  <TableCell numeric>{row.telephone}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Owners;
