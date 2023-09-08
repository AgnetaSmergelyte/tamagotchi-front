import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {chooseDigimonName, setLevel, setEggs, setHunger, setEvolution, setMoney} from "../features/info";
import HungerBar from "../components/HungerBar";
import Eggs from "../components/Eggs";
import EvolutionBar from "../components/EvolutionBar";
import {useNavigate} from "react-router-dom";

const Game = () => {

    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect(() => {
        let timer = undefined;
        fetch("http://localhost:8080/digimon")
            .then(res => res.json())
            .then(data => {
                dispatch(chooseDigimonName(data.digimon.name));
                dispatch(setMoney(data.digimon.money));
                dispatch(setLevel(data.digimon.level));
                timer = setInterval(getStats, 1000);
            })
        return () => clearInterval(timer);
    }, []);
    const digimon = useSelector(state => state.digimonName);
    const money = useSelector(state => state.money);
    const level = useSelector(state => state.level);

    function getStats() {
        fetch("http://localhost:8080/digimon")
            .then(res => res.json())
            .then(data => {
                dispatch(setHunger(data.digimon.hunger));
                dispatch(setEvolution(data.digimon.evolution));
                dispatch(setEggs(data.digimon.eggs))
                dispatch(setLevel(data.digimon.level));
                if (data.digimon.gameOver) nav('/')
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
                    <button onClick={feed} className="feed-btn">Feed (10$)</button>
                </div>
                <div className="board-box">
                    <h1>Level {level}</h1>
                    <div className={`digimon-image-large dig-${digimon}-level-${level}`}></div>
                    <EvolutionBar />
                    <HungerBar />
                </div>
            </div>
        </div>
    );
};

export default Game;