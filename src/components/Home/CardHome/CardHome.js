import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './cardHome.scss'
import { ThemeProvider, createTheme } from '@mui/material/styles';

function CardHome ({
    image,
    description,
    title,
    link,
    logo,
    nameLink

}) {

//   const theme = createTheme();

// theme.typography.h4 = {
//   fontSize: '1.5rem',
// };
const theme = createTheme({
  typography: {
    h4:undefined,
    body2:undefined,
  },
});

    return (
      <ThemeProvider theme={theme}>
        <Card className='card'>
          <CardActionArea>
            <CardMedia
              className='card-image'
              component="img"
              image= {image}
              alt={image}
            />
            <CardContent>
              <Typography className="card-title" gutterBottom variant="h4" component="div">
                {title}
              </Typography>

              
                <Typography className="card-description" variant="body2" color="text.secondary">
                {description}
                </Typography>
            

            </CardContent>
          </CardActionArea>
          <CardActions>
          <NavLink
          className="card-link"
          to={link}
          >
            <Button className="test" size="small" color="primary">
                  {logo} {nameLink}
            </Button>
          </NavLink>
          </CardActions>
        </Card>
      </ThemeProvider>
    )
}

CardHome.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default CardHome;