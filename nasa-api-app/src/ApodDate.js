import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, CardMedia, Typography, CircularProgress, CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';
import './ApodCard.css';
import './ButtonAppBar'
import ButtonAppBar from './ButtonAppBar';

const ApodDate = () => {
    const { date } = useParams();
    const [apod, setApod] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiURL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchApod = async () => {
            try {
                const response = await fetch('https://astropod.azurewebsites.net/get-apod-date/${date}');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setApod(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchApod();
    }, [date]);

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
            <ButtonAppBar></ButtonAppBar>
         <Card>
                <CardActionArea>
                <div className='overlay-date'>
                <CardContent>
                    <Typography variant="h5" component="div" className="overlay-text-date">
                        {apod.title}
                    </Typography>
                    <Typography variant="body1" className="overlay-text-date" >
                        Date: {apod.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="overlay-text-date">
                        {apod.explanation}
                    </Typography>
                    <Typography variant='' alt='no author' className="overlay-text-date">
                      {apod.copyright}
                    </Typography>
                    
                    
                </CardContent>
                </div>
                 <div className='image-container-date'>
                    <CardMedia
                        component="img"
                        alt={apod.title}
                        image={ apod.hdurl}
                        title={apod.title}
                        className='apod-image-date'
                    />
                </div>
                
                </CardActionArea>
            </Card>
        
        </Container>
    );
    
};

export default ApodDate;
