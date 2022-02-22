import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/MenuItem';
import MenuHeader from '../../common/header/Menu';
import Container from '@mui/material/Container';
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto/300.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function Cart(props) {
    const { state } = useLocation();
    const { productId } = state;
    const [data, setData] = React.useState([]);
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
        console.log("called"+productId)
        fetch('http://localhost:8080/product/' + productId)
            .then((response) => response.json())
            .then((json) => setData(json))
    };
    React.useEffect(() => {
        fetchDetails();
    }, []);
    return (

        <Box sx={{ flexGrow: 1 }}>
            <MenuHeader></MenuHeader>
            <Container maxWidth="xl" className='grid'>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h3'>My cart</Typography>
                            </ThemeProvider>
                        </Item>
                    </Grid>

                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );


}