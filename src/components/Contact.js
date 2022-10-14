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
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {data.map((kontak, index) => {
                    return (
                        <>
                            <ListItem key={index} alignItems="flex-start">
                                <ListItemAvatar><Avatar alt="Avatar" src={kontak.photo} /></ListItemAvatar>
                                <ListItemText primary={kontak.name}
                                    secondary={
                                        <>
                                            <Typography>{kontak.phone}</Typography>
                                            <Typography>{kontak.email}</Typography>                                 
                                         </>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    )
                })}
            </List>
        </>
    );
};

export default Contact;
