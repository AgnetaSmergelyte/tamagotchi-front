import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {chooseDigimonName, setEggs, setHunger, setMoney} from "../features/info";
import HungerBar from "../components/HungerBar";
import Eggs from "../components/Eggs";

const Game = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:8080/digimon")
            .then(res => res.json())
            .then(data => {
                dispatch(chooseDigimonName(data.digimon.name));
                dispatch(setMoney(data.digimon.money));
                const timer = setInterval(getStats, 1000);
            })
    }, []);
    const digimon = useSelector(state => state.digimonName);
    const money = useSelector(state => state.money);

    function getStats() {
        fetch("http://localhost:8080/digimon")
            .then(res => res.json())
            .then(data => {
                dispatch(setHunger(data.digimon.hunger));
                dispatch(setEggs(data.digimon.eggs))
            })
            .catch(error => console.log('error'))
    }

    function feed() {
        fetch("http://localhost:8080/feed")
            .then(res => res.json())
            .then(data => {
                dispatch(setHunger(data.digimon.hunger));
                dispatch(setMoney(data.digimon.money));
            })
    }

    return (
        <div className="container">
            <div className="game-board">
                <div className="board-box">
                    <h1>Money: {money}$</h1>
                    <Eggs />
                    <button onClick={feed} className="feed-btn">Feed {digimon} (10$)</button>
                </div>
                <div className="board-box">
                    <h1>{digimon}</h1>
                    <div className={"digimon-image-large " + digimon}></div>
                    <HungerBar/>
                </div>
            </div>
        </div>
    );
};

export default Game;