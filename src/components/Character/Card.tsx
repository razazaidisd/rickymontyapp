import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ICharacterProps } from './types';

const ProfileCard = (
    {
        name,
        image,
        species,
        status,
        type,
        gender,
    } : ICharacterProps
    ) => {
    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" >
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        Species: {species}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        Status: {status}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        Type: {type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        Gender: {gender}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 110 }}
                image={image}
                alt={name}
            />
        </Card>
    )
}


export default ProfileCard;