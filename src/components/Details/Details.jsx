import React from 'react';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';

const Details = () => {
  return (
    <Card>
        <CardHeader title="Income"/>
        <CardContent>
            <Typography varient="h5">₹1200</Typography>
        </CardContent>
    </Card>
  )
}

export default Details