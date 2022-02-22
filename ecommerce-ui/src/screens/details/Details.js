import React from 'react';
import MenuHeader from '../../common/header/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/MenuItem';
import Typography from '@material-ui/core/Typography';
import { useParams } from "react-router";
import Carousell from '../carousel/Carousell';
import { Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Details.css';

function Details() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [itemCount, setItemCount] = React.useState(1);
    const [productId, setProductId] = React.useState([]);
    console.log("id", id);

    const fetchDetails = () => {
        fetch('http://localhost:8080/product/' + id)
            .then((response) => response.json())
            .then((json) => setData(json))
    };

    const onButtonClick =() =>{
        console.log("clicked");
        setItemCount(itemCount + 1);
        console.log("item****",itemCount)
        setProductId(id);
    }

    React.useEffect(() => {
        fetchDetails();
    }, []);

    const theme = createTheme({
        typography: {
            subtitle1: {
                fontSize: 12,
            },
            body1: {
                fontWeight: 500,
            },
            price: {
                fontStyle: 'italic',
            },
        },
    });

    return (
        <React.Fragment>
            <MenuHeader itemCount={itemCount} productId={productId}></MenuHeader>
            <CssBaseline />

            <Container maxWidth="lg" className='grid'>
                <Grid container spacing={3} >
                    <Grid item xs={8}>
                        <Card sx={{ minWidth: 275 }} className="card">
                            <CardContent>

                                <Carousell images={data.image}></Carousell>

                            </CardContent>

                        </Card>

                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275 }} className="right">
                            <CardContent>
                                <ThemeProvider theme={theme}>
                                    <Typography sx={{ fontSize: 17 }} color="text.primary" gutterBottom className='productName'>
                                        {data.productName}
                                    </Typography>

                                    <Typography variant="h5" className='price'>
                                        <CurrencyRupeeIcon />{data.price}
                                    </Typography>
                                    <Typography variant="h6">Description</Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary" variant='price' >
                                        {data.description}
                                    </Typography>
                                </ThemeProvider>
                                <CardActions>
                                    <Button variant="contained" onClick={onButtonClick}><ShoppingCartIcon></ShoppingCartIcon>Add to cart</Button>

                                    <Button variant="outlined" href="#outlined-buttons">
                                        <FavoriteBorderIcon></FavoriteBorderIcon>
                                        WishList
                                    </Button>
                                </CardActions>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>

            </Container>
        </React.Fragment>
    );
}
export default Details;
