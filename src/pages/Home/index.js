import React from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

import styles from './style';

import {MovieIcon} from '../../icons';

export default () => {
  const [searchText, setSearchText] = React.useState('');
  const classes = styles();
  
  const handleSearchTextChange = e => {
    setSearchText(e.target.value)
  }


  const handleCleanTextClick = e => {
    console.log(10)
  }

  const handleSearchTextClick = e => {
    console.log(10)
  }




	return (
		<Container className={classes.container} >
			<Card className={classes.cardContainer} >
				<Grid container className={classes.titleGridContainer} >
					<Grid>
						<Typography>Bienvenido</Typography>
					</Grid>
					<Grid>
						<MovieIcon  className={classes.movieIcon} />
					</Grid>
				</Grid>
        <TextField
          value=""
          placeholder="Buscar..."
          className={classes.textFieldSearch}
          onChange={handleSearchTextChange}
        />
        <Grid>
          <Button variant="container" onClick={handleCleanTextClick} >Limpiar</Button>
          <Button variant="container" className={classes.searchButton}  onClick={handleSearchTextClick} >Buscar </Button>
        </Grid>
			</Card>
		</Container>
	);
};
