import { makeStyles } from '@material-ui/styles';

const centeredStylesObj = {
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center'

}

export default makeStyles ({
  container: {
    heigth:'100vh',
    flexDirection: 'column',
    ...centeredStylesObj
  },

  cardContainer :{
    flexDirection:'column',
    width: '400',
    height: '200',
    padding: '2rem',
    ...centeredStylesObj
  },
  title:{
    fontSize: '4rem'
  },
  titleGridContainer:{
    ...centeredStylesObj
  },
  textFieldSearch:{
    width: '90%'
  },
  searchButton:{
    marginLeft:'.5em'
  },
  movieIcon:{
    fontSize: '4rem'
  }

});