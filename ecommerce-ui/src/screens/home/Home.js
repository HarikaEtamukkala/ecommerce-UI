import React from 'react';
import Header from '../../common/header/Header';
import MenuHeader from '../../common/header/Menu';
import {Card, CardContent, CardMedia} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Home.css';

import * as Utils from "../../common/Utils";
import * as Constants from "../../common/Constants";

function styles() {
    return {
        media: {
            height: 140
        }
    };
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.getAllProductsData();
    }

    getAllProductsData(){
        let getAllProductsUrl = `http://localhost:8080/allProducts`;
        console.log("loaded")
        fetch(getAllProductsUrl,{mode:'cors'})
            .then(result => result.json())
            .then(response => this.setState({products: response}));
           
    }

    redirectToDetailsPage = id =>{
        console.log("clicked");
        window.location = `/details/${id}`;
        
    } 

    render() {
        const {classes} = this.props;
        const {products} = this.state;
        console.log("response",products)
        return <>
           <MenuHeader/>
            <div className='cardContainer'>
                {!(products && 0 < products.length) ? null : products.map(this.productList(classes))}
            </div>
        </>;
    }

    productList(classes) {
        return product => {
            return <Card className='restaurantCard' key={product.id}
                         onClick={() => this.redirectToDetailsPage(product.id)}>
                             <CardActionArea>
                            
                <CardMedia className={classes.media} title='restaurantImage' image={product.image[product.image.length-1]}/>
                <CardContent className='cardContent'>
                <Typography gutterBottom variant="p" component="p">
                  {product.productName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                 
                  </Typography>
                  <Typography component="p">Price - {product.price}</Typography>
                </CardContent>
                </CardActionArea>
                
            </Card>;
             
        };
    }

}
export default withStyles(styles)(Home);
