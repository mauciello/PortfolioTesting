import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ShowCaseButton(props){

	return(
	<Card>
      <CardActionArea
	  onClick={()=>
	  	{
			console.log(props.link);
			window.open(props.link, '_blank', "noopener noreferrer");
  		}
  		}>
        <CardMedia
          component="img"
          width="100%"
          image={props.source}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.smalldesc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
	);
}
export default ShowCaseButton;
