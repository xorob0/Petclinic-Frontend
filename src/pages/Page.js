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
import Owners from '../components/Owners.js';
import Owner from '../components/Owner.js';
import OwnerSPets from '../components/OwnerSPets.js';
import OwnerForm from '../components/OwnerForm.js';
import Pet from '../components/Pet.js';
import Vet from '../components/Vet.js';
import Visit from '../components/Visit.js';
import PetForm from '../components/PetForm.js';
import VetForm from '../components/VetForm.js';
import VisitForm from '../components/VisitForm.js';
import PetSVisits from '../components/PetSVisits.js';
import VetSVisits from '../components/VetSVisits.js';
import PetSearch from '../components/PetSearch.js';
import VetSearch from '../components/VetSearch.js';
import OwnerSearch from '../components/OwnerSearch.js';
import PetsSearched from '../components/PetsSearched.js';
import VetsSearched from '../components/VetsSearched.js';
import OwnerSearched from '../components/OwnerSearched.js';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
    backgroundColor: '#00cc66'
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
            🐾 Pet clinic
          </Typography>
					<Button component={Link} to="/Vets">
						Vets
					</Button>
					<Button component={Link} to="/Pets">
						Pets
					</Button>
					<Button component={Link} to="/Owners">
						Owners
					</Button>
          <Button>Support</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout, classes.main}>
  <Route exact path='/' component={Vets}/>
  <Route exact path='/' component={VetSearch}/>
  <Route exact path='/' component={VetFrom}/>
  <Route exact path='/' component={Vets}/>
  <Route path='/Vets' component={Vets}/>
  <Route path='/Vets' component={VetSearch}/>
  <Route path='/Vets' component={VetForm}/>
	<Route path='/vetsSearch/:search' component={VetsSearched}/>
  <Route path='/Pets' component={Pets}/>
  <Route path='/Pets' component={PetSearch}/>
	<Route path='/petsSearch/:search' component={PetsSearched}/>
  <Route path='/Owners' component={Owners}/>
  <Route path='/Owners' component={OwnerForm}/>
  <Route path='/Owners' component={OwnerSearch}/>
	<Route path='/ownerSearch/:search' component={OwnerSearched}/>
  <Route path='/Owner/:id' component={Owner}/>
	<Route path='/Owner/:id' component={OwnerSPets}/>
	<Route path='/Owner/:id' component={PetForm}/>
  <Route path='/Pet/:id' component={Pet}/>
  <Route path='/Pet/:id' component={PetSVisits}/>
  <Route path='/Pet/:id' component={VisitForm}/>
  <Route path='/Vet/:id' component={Vet}/>
  <Route path='/Vet/:id' component={VetSVisits}/>
  <Route path='/Visit/:id' component={Visit}/>
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
