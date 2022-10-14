// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import Card from '@mui/material/Card';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Card variant="outlined">
        <h1>Call a Friend</h1>
        <p>Your friendly contact app</p>
      </Card>
    </>
  );
};

export default Header;
