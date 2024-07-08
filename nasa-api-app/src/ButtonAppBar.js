import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate} from 'react-router-dom';

export default function ButtonAppBar() {
    const navigate = useNavigate();
    const handleHomeButton = () => {
        navigate('/');
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <Button color="inherit" onClick={handleHomeButton}>Home</Button>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Astronomy Picture of the Day
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
