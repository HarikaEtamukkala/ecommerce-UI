import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Routes} from 'react-router-dom';

import Home from './home/Home';
import Details from './details/Details';
import Cart from './cart/Cart';



class Controller extends Component{
   
    render() {
        console.log("In controller");
        return(
               <div>
                    <Router>
                        <Routes>
                     <Route exact path='/'  element={<Home/>}/>                     
                     <Route exact path='/details/:id' element={<Details/>} />
                     <Route exact path='/cart' element={<Cart/>} />
                     </Routes>
                    </Router>
                    </div>
                   
                
        )
    }
}
export default Controller;