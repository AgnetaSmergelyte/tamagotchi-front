import React from 'react';
import {useNavigate} from "react-router-dom";

const Start = () => {
    const allDigimons = ['Agumon', 'Gatomon', 'Guilmon','Terriermon'];
    const nav = useNavigate();

    function chooseDigimon(digimon) {
        fetch("http://localhost:8080/setDigimon/"+digimon)
            .then (res => res.json())
            .then (data => nav('/play'))
    }

    return (
        <div className="container">
            {allDigimons.map((x, i) =>
                <div key={i} className='card' onClick={() => chooseDigimon(x)}>
                    <div className={"digimon-image " + x}></div>
                    <h3>{x}</h3>
                </div>
            )}
        </div>
    );
};

export default Start;