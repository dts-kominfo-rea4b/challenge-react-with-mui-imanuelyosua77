// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import { useState } from 'react';
// import Typography from '@mui/material/Typography';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    return (
        <div>
            <ul sx={{display:'block'}}>
                {data.map((kontak, index) => { 
                return(
                    <li key={index} sx={{display:'block'}}>
                        <img src={kontak.photo}></img>
                        <p>{kontak.name}</p>
                        <p>{kontak.phone}</p>
                        <p>{kontak.email}</p>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Contact;
