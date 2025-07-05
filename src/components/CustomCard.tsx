import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// 1. Define prop types
interface CustomCardProps {
    title: string;
    content: string;
}

// 2. Create the functional component
const CustomCard: React.FC<CustomCardProps> = ({ title, content }) => {
    return (
        <Card sx={{ minWidth: 300, margin: 2 }}>
            <CardContent>
                <Typography variant="h6">
                    {title}
                </Typography>
                <Typography variant="body2" color='text.secondary'>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CustomCard;