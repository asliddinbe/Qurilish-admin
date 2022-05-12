import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

const data = [
    {
        icon: <LocationCityIcon sx={{ fontSize: '50px', color: '#FDBE33', ml: '30px' }}/>,
        text: "Location",
        span:'123 Street, New York, USA'
    },
    {
        icon: <ContactPhoneIcon sx={{ fontSize: '50px', color: '#FDBE33', ml: '30px' }}/>,
        text: "Phone",
        span:'+012 345 67890'
    },
    {
        icon: <MarkEmailUnreadIcon sx={{ fontSize: '50px', color: '#FDBE33', ml: '30px' }}/>,
        text: "Email",
        span:'info@example.com'
    }
]
const Card = data.map((item) => (
    <Box sx={{ width: '90%', border: '1px solid #E7E7E7', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '30px 0px 30px 0px', margin: '20px 0px 20px 0px' }} >
        {item.icon}

        <Box sx={{ ml: '30px' }}>
            <Typography variant='h5' sx={{ color: '#FDBE33', }}>{item.text}</Typography>
            <Typography variant='h5' sx={{ color: 'white' }}>{item.span}</Typography>
        </Box>
    </Box >
))


export default () => {
    return (
        <>
        {Card}
        </>
    )
}


