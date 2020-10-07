import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core'
import queryString from 'query-string';

import { searchMovie } from '../../redux/actions/search'

import { movieResults, isSearchLoading } from '../../redux/selectors';
import MovieResult  from '../../components/MovieResult';


export default ({location}) => {
  //console.log(queryString.parse(location.search))

  const dispatch = useDispatch();
  const movies = useSelector(state => movieResults(state))
  const isLoading = useSelector(state => isSearchLoading(state) )

  console.log(movies);

  React.useEffect( () => {
    const {movieName} = queryString.parse(location.search);

    if(movieName && !movies ){
      dispatch(searchMovie({movieName}))
    }
  });

  const renderMovies = () => {
    if(movies) {
      return movies.map((value, index)  => <MovieResult key={index} {...value} /> )
    } else if (isLoading) {
      return <CircularProgress size={100} color="primary" />
    }

    return <div />;
  }

  return(
    <Container>
      {renderMovies()}
    </Container>
  )
}