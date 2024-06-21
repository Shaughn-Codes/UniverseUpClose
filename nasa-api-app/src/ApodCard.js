import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, CardMedia, Typography, CircularProgress, Box, CardActionArea } from '@mui/material';

const ApodCard = () => {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/get-apod')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setApodData(data);
                setLoading(false);
                console.log("Fetched data: ", data)
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Container style={{ textAlign: 'center', marginTop: '50px' }}>
                <CircularProgress />
            </Container>
        );
    }

    if (error) {
        return (
            <Container style={{ textAlign: 'center', marginTop: '50px' }}>
                <Typography variant="h5" color="error">
                    {error}
                </Typography>
            </Container>
        );
    }

    return (
        <Container style={{ marginTop: '50px' }}>
<Box
//   component="img"
//   sx={{
//     height: 233,
//     width: 350,
//     maxHeight: { xs: 233, md: 167 },
//     maxWidth: { xs: 350, md: 250 },
//     display:'flex'
//   }}
//   alt={apodData.title}
//   src={apodData.hdurl}
/>            <Card>
                <CardActionArea>
                <div className='overlay'>
                <CardContent>
                    <Typography variant="h5" component="div" className="overlay-text">
                        {apodData.title}
                    </Typography>
                    <Typography variant="body1" className="overlay-text" >
                        Date: {apodData.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="overlay-text">
                        {apodData.explanation}
                    </Typography>
                    <Typography variant='' alt='no author' className="overlay-text">
                      {apodData.copyright}
                    </Typography>
                    
                    
                </CardContent>
                </div>
                 <div className='image-container'>
                    <CardMedia
                        component="img"
                        alt={apodData.title}
                        image={ apodData.hdurl}
                        title={apodData.title}
                        className='apod-image'
                    />
                </div>
                
                </CardActionArea>
            </Card>
        
        </Container>
    );
    
};

export default ApodCard;
