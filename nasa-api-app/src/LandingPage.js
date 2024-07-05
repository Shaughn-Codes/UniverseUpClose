import React from 'react';
import { Container, Typography, Card, CardContent, Button,TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = React.useState(null);

    const handleTodayClick = () => {
        navigate('/today');
    };

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    const handleDateSubmit = () => {
        if (selectedDate) {
            console.log("Selected Date: ", selectedDate.format('YYYY-MM-DD'));
            navigate(`/${selectedDate.format('YYYY-MM-DD')}`);
        }
    };

    return (
        <div className="landing-page">
            <Container className="header">
                <Typography variant="h3" component="div" className="logo">
                Astronomy Picture of the Day
                </Typography>
            </Container>
            <Container className="content">
                <Card className="card">
                    <CardContent>
                        <Button variant="contained" color="primary" onClick={handleTodayClick}>
                            Today's Picture
                        </Button>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Select a date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                minDate={dayjs('1995-06-16')}
                                maxDate={dayjs()}
                                // eslint-disable-next-line react/jsx-no-undef
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <Button variant="contained" color="secondary" onClick={handleDateSubmit} disabled={!selectedDate}>
                            Get Picture by Date
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default LandingPage;
