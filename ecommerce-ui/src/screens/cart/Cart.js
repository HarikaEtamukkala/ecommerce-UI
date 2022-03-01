import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Item from '@mui/material/MenuItem';
import MenuHeader from '../../common/header/Menu';
import Container from '@mui/material/Container';
import '@fontsource/roboto/300.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CartItem from './CartItem';
import GroupedButtons from './GroupedButtons';
import BreadCrumbs from './BreadCrumbs';
export default function Cart(props) {
    const { state } = useLocation();
    const { productId } = state;
    const { count } = state;
    const [data, setData] = React.useState([]);
    const [totalPrice,setTotalPrice] = React.useState(0);
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
            fontFamily: 'Raleway, Arial'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        },
    };
    theme.spacing(4);

    const fetchDetails = () => {
        console.log("called" + productId)
        fetch('http://localhost:8080/product/' + productId)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                addPrice(json);
            })
            
    };
    const addPrice=(json)=>{
        console.log("Calling")
        setTotalPrice(json.price*count);
     
    }
    React.useEffect(() => {
        fetchDetails();  
       
         
    }, []);
    const handlePrice=(c)=>{
        console.log("Xart", c)
        setTotalPrice(data.price*c);
       
    }
    
    return (

        <Box sx={{ flexGrow: 1 }}>
            <MenuHeader itemCount={count}></MenuHeader>
            <Container maxWidth="xl" className='grid'>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <BreadCrumbs/>
                        <Item>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h3'>My cart</Typography>
                            </ThemeProvider>
                        </Item>
                    </Grid>

                    <Grid item xs={8}>

                        <Item><CartItem data={data} itemCount={count} totalPrice={totalPrice} handlePrice={handlePrice}/></Item>

                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                       <Typography>Total Amount</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography>
                                            {totalPrice}
                                        </Typography>
                                       
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained">Checkout</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );


}