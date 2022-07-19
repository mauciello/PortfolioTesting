import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import './css/App.css';
import ShowCaseButton from '../Components/ShowcaseButton.js';

function PortfolioShowcase() {
	const [buttons, setButtons]=useState([]);
    const getData= ()=>{
        fetch('sources.json',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json();
        }).then(function(jdata){
			let theButtons = [];
			console.log(jdata.portfolio);
			for(let i = 0; i < jdata.portfolio.length; ++i){
				theButtons.push(
					<Grid item xs={4} key={jdata.portfolio[i].name + i.toString()}>
						<ShowCaseButton
						name={jdata.portfolio[i].name}
						source={jdata.portfolio[i].img}
						smalldesc={jdata.portfolio[i].desc}
						link={jdata.portfolio[i].src} />
					</Grid>
				);
			}
			setButtons(theButtons);
        });
    };
    useEffect(()=>{
    	getData();
    },[])


    return (
    <div className="App">
        <h1>
        Portafolio
        </h1>
        <Grid container spacing={2}>
            {buttons}
        </Grid>
    </div>
    );
}

export default PortfolioShowcase;
