import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Vets from '../components/Vets.js';
import Pets from '../components/Pets.js';
import PetsForm from '../components/PetsForm.js';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
	main: {
		width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

	},
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const footers = [
  {
    title: 'Developers',
    description: ['Timothée Simon', 'Fabio Cumbo', 'Alexendre Lefebvre'],
  },
  {
    title: 'Liens',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
];

function Page(props) {
  const { classes } = props;

  return (

  <Router>
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Pet clinic
          </Typography>
					<Button component={Link} to="/Vets">
						Vets
					</Button>
					<Button component={Link} to="/Pets">
						Pets
					</Button>
          <Button>Support</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout, classes.main}>
  <Route exact path='/' component={Vets}/>
  <Route path='/Vets' component={Vets}/>
  <Route path='/Pets' component={Pets}/>
  <Route path='/Pets' component={PetsForm}/>
      </main>
      {/* Footer */}
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
      {/* End footer */}
    </React.Fragment>
  </Router>
  );
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page);
