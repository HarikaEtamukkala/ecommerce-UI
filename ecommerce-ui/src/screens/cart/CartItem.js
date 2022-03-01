import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GroupedButtons from'./GroupedButtons';
import { color } from '@mui/system';
import { red } from '@mui/material/colors';


export default function CartItem(props){
    const product=props.data;
    const count= props.itemCount;
    const totalPrice = props.totalPrice;
    const [counter,setCounter]=React.useState(count);
    const theme = createTheme({
        typography: {
            fontFamily: 'Raleway, Arial',
            fontSize: 80,
            fontWeight: 800,
            body1: {
                fontWeight: 500,
            },
            price: {
                fontStyle: 'italic',
            },
        },
    });
    theme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
            fontFamily: 'Raleway, Arial',
            color:red
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        },
    };
    theme.typography.body1 = {
        fontSize: '0.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
            fontFamily: 'Helvetica Neue',
           
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.4rem',
        },
    };
    theme.spacing(4);
    const handleCount=(c)=>{
        console.log("cartItem", c)
        setCounter(c);
        props.handlePrice(c);
    }
    return (
        <Card sx={{ minWidth: 900 }}>
          <CardContent>
          <Grid container spacing={2}>
          <Grid item xs={2}>
              <img src={product.image} width="100px" height="50px"></img>
              </Grid>
              <ThemeProvider theme={theme}>
              <Grid item xs={4}>
                <Typography variant='body1'>
                    {product.productName}
                </Typography>
                <Typography>
                    {product.price} * {counter}
                </Typography>
              </Grid>
              </ThemeProvider>
              </Grid>
          </CardContent>
          <CardActions>
            <GroupedButtons count={count} totalPrice={totalPrice} onCounter={handleCount}/>
          </CardActions>
        </Card>
      );

}