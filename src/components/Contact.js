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
const Contact = ({ initialData, newData }) => {
    return (
        <>
            <ul>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar><Avatar alt="Avatar" src={initialData[0].photo} /></ListItemAvatar>
                        <ListItemText primary={initialData[0].name}
                            secondary={
                                <>
                                    <Typography>{initialData[0].phone}</Typography>
                                    <Typography>{initialData[0].email}</Typography>
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar><Avatar alt="Avatar" src={initialData[1].photo} /></ListItemAvatar>
                        <ListItemText primary={initialData[1].name}
                            secondary={
                                <>
                                    <Typography>{initialData[1].phone}</Typography>
                                    <Typography>{initialData[1].email}</Typography>
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar><Avatar alt="Avatar" src={initialData[2].photo} /></ListItemAvatar>
                        <ListItemText primary={initialData[2].name}
                            secondary={
                                <>
                                    <Typography>{initialData[2].phone}</Typography>
                                    <Typography>{initialData[2].email}</Typography>
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar><Avatar alt="Avatar" src={initialData[3].photo} /></ListItemAvatar>
                        <ListItemText primary={initialData[3].name}
                            secondary={
                                <>
                                    <Typography>{initialData[3].phone}</Typography>
                                    <Typography>{initialData[3].email}</Typography>
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>


                 {newData.length > 4?
                        
                            <>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar><Avatar alt="Avatar" src={newData[newData.length-1].photo} /></ListItemAvatar>
                                        <ListItemText primary={newData[newData.length-1].name}
                                            secondary={
                                                <>
                                                    <Typography>{newData[newData.length-1].phone}</Typography>
                                                    <Typography>{newData[newData.length-1].email}</Typography>
                                                </>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                            </>
                        
                 : ""}           

            </ul>
        </>
    );
};

export default Contact;
