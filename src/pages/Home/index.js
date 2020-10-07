import React from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  Grid, 
  TextField, 
  Button 
} from '@material-ui/core';

import styles from './style';
import { MovieIcon } from '../../icons';

export default ({history}) => {
  const [searchText, setSearchText] = React.useState("");

  const classes = styles();
  
  const handleSearchTextChange = e => {
    //console.log(e.target.value);
    setSearchText(e.target.value)
  }

  const handleClearClick = e => {
    setSearchText('');
  }

  const handleSearchClick = e => {
    history.push(`/results?movieName=${searchText}`)
  }

	return (
		<Container className={classes.container} >
			<Card className={classes.cardContainer} >
				<Grid container className={classes.titleGridContainer} >
					<Grid>
						<Typography className={classes.title}>Bienvenido</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.movieIcon} />
					</Grid>
				</Grid>

        <TextField
          value={searchText}
          placeholder="Buscar"
          onChange={handleSearchTextChange}
          margin="normal"
          className={classes.textFieldSearch}
        />
        <Grid  className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleClearClick} >Limpiar</Button>
          <Button variant="contained" className={classes.searchButton}  onClick={handleSearchClick} >Buscar </Button>
        </Grid>
			</Card>
		</Container>
	);
};
