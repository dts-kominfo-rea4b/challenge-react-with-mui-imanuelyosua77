// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ContactForm = ({ spreadData }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
  
    const [newContact, setNewContact] = useState({
        name : "",
        phone : "",
        email : "",
        photo : "",
    })

    const handleInputs = (event) => {
         setNewContact ({...newContact, [event.target.name]: event.target.value,});
    }
    
    return (
        <div>
            <Card variant="outlined" >
                <TextField
                    required
                    id="outlined-required"
                    placeholder='Your Name'
                    name="name"
                    sx={{ display: 'block' }}
                    value={newContact.name}
                    onChange={handleInputs}
                />
                <TextField
                    required
                    id="outlined-required"
                    placeholder='Phone Number'
                    name="phone"
                    sx={{ display: 'block' }}
                    value={newContact.phone}
                    onChange={handleInputs}
                />
                <TextField
                    required
                    id="outlined-required"
                    placeholder='E-mail'
                    name="email"
                    sx={{ display: 'block' }}
                    value={newContact.email}
                    onChange={handleInputs}
                />
                <TextField
                    required
                    id="outlined-required"
                    placeholder='Photo URL'
                    name="photo"
                    sx={{ display: 'block' }}
                    value={newContact.photo}
                    onChange={handleInputs}
                />

                <Button onClick={()=>{spreadData(newContact)}} variant="contained">Add New Contact</Button>

            </Card>
        </div>
    );
}
export default ContactForm;