import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

export default function Carousell(props){
    const items = [
        {
            name: 'Aya Bouchiha',
            description: 'Full Stack Web Developer',
        },
        {
            name: 'John Doe',
            description: 'Author',
        },
        {
            name: 'Pitsu Coma',
            description: 'Math Student',
        },
    ];
    const images=props.images;
    console.log("images",images)
    return (
        <Carousel>
            {images && images.map((item, i) => (
                <Item key={i} image={item} />
            ))}
           
        </Carousel>
    );
}

const Item = (image) => {
    console.log(image)
    return (
        <Paper variant="outlined">
            <img src={image.image} height='100%' width='100%' ></img>
            
        </Paper>
    );
};


