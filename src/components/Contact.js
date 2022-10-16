// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    console.log(data)
    return (
        <ul>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar><Avatar alt="Avatar" src={data.photo} /></ListItemAvatar>
                <ListItemText primary={data.name}
                    secondary={
                        <>
                            <Typography component="span" sx={{display:'block'}} >{data.phone}</Typography>
                           {data.email}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
        </ul>
    )
};

export default Contact;
