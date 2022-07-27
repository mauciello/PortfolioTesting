import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import './css/App.css';

function App() {
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('sources.json',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json();
        }).then(function(jdata){
            setData(jdata);
        })
    }
    useEffect(()=>{
        getData()
    },[])

    return (
    <div className="App">
        <h1 class="header1">
        Sobre mi
        </h1>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <p class="about">
                    {data.about}
                </p>
            </Grid>
            <Grid item xs={6}>
                <img src={data.aboutimg} alt="About" class="AboutImage"/>
            </Grid>
        </Grid>
    </div>
    );
}

export default App;
