import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function MaterialUICard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../../../../assets/add_expense.png"
          alt="add expense"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Add Expenses
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You can add expenses, which will be added to your dashboard
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default MaterialUICard;
