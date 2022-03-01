import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Carousel from 'react-material-ui-carousel';
import './Slider.css';

export default function Slider() {

  const items = [
    {
        name: 'Puma',
        description: '50% off on all models...limited time',
    },
    {
        name: 'Women wear ',
        description: 'flat 10% on new lauch ...hurry',
    },
    {
        name: 'Adidas',
        description: 'Newly Launched...Grab it !!!',
    },
];
  return (
    <Box sx={{ flexGrow: 1 }} height={280}>
      <Carousel height="280"> 
        {items && items.map((item,i)=>(
          <Grid container spacing={2} className="grid-container">
        <Grid item xs={8} key={i} >
          <h1 class="title">{item.name}</h1>
        </Grid>
        <Grid item xs={4}>
          <h1>{item.description}</h1>
        </Grid>
      </Grid>
        ))}
      
      
      </Carousel>
    </Box>
  );
}
