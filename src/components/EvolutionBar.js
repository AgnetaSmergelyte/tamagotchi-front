import React from 'react';
import {useSelector} from "react-redux";

const EvolutionBar = () => {

    const evolution = useSelector(state => state.evolution);

    return (
        <div className="evolve">
            <b>Evolution:</b>
            <div className="evolution-bar">
                <div className="evolution" style={{width: evolution+"%"}}></div>
            </div>
        </div>
    );
};

export default EvolutionBar;