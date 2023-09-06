import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import eggImg from "../images/egg.png"
import {setEggs, setMoney} from "../features/info";

const Eggs = () => {

    const dispatch = useDispatch();
    const eggs = useSelector(state => state.eggs);

    function sellEgg(eggIndex) {
        fetch("http://localhost:8080/sellEgg/"+ eggIndex.toString())
            .then(res => res.json())
            .then(data => {
                dispatch(setEggs(data.digimon.eggs));
                dispatch(setMoney(data.digimon.money));
            })
    }

    return (
        <div className="eggs">
            {eggs.map((x, i) =>
                <div key={i} className="egg">
                    <img src={eggImg} alt="Egg"/>
                    <button onClick={() => sellEgg(i)}>Sell for {x}$</button>
                </div>
            )}
        </div>
    );
};

export default Eggs;