import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import { useNavigate } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function DetailsBreadCrumbs() {
  const navigate = useNavigate();
  const toComponentB=()=>{
    console.log("clicked");
    navigate('/',{state:{id:1,name:'sabaoon'}});
      }
  return (
    <div role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">
      <Link 
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          topath="/" 
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Cart
        </Link>
        
       
      </Breadcrumbs>
    </div>
  );
}
