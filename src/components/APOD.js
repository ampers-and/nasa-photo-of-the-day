import React, { useState, useEffect } from 'react';
import axios from 'axios';

function APOD() {
    const [apodData, setApodData] = useState('');
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [caption, setCaption] = useState();

    useEffect( () => {

        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

        .then(response => {
            console.log('APOD Data', response);
            setApodData(response.data.hdurl);
            setTitle(response.data.title);
            setDate(response.data.date);
            setCaption(response.data.explanation);
        })

        .catch(error => {
            console.log('APOD Data Error', error);
        })
    }, [])

    return(
        <div className='APOD'>
            <header>
                <h1>Astronomy Picture of the Day</h1>
            </header>
            <img src= {apodData} alt={title}/>
            <div className='attributes'>
                <h2>{title}</h2>
                <h3>{date}</h3>
            </div>
            <div className='caption'>
                <p>{caption}</p>
            </div>
        </div>
    )
}

export default APOD;