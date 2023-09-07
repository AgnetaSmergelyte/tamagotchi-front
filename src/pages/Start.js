import React from 'react';
import {useNavigate} from "react-router-dom";

const Start = () => {
    const allDigimons = [1, 2, 3, 4, 5];
    const nav = useNavigate();

    function chooseDigimon(digimon) {
        fetch("http://localhost:8080/setDigimon/"+digimon)
            .then (res => res.json())
            .then (data => nav('/play'))
    }

    return (
        <div className="container">
            <div className="cards">
                {allDigimons.map((x, i) =>
                    <div key={i} className='card' onClick={() => chooseDigimon(x)}>
                        <div className={`digimon-image dig-${x}-level-1`}></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Start;