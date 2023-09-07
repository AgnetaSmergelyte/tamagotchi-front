import {createSlice} from "@reduxjs/toolkit";

export const infoSlice = createSlice({
    name: "info",
    initialState: {
        digimonName: null,
        level: 1,
        hunger: 100,
        evolution: 0,
        eggs: [],
        money: 0
    },
    reducers: {
        chooseDigimonName: (state, action) => {
            state.digimonName = action.payload
        },
        setLevel: (state, action) => {
            state.level = action.payload;
        },
        setHunger: (state, action) => {
            state.hunger = action.payload;
        },
        setEvolution: (state, action) => {
            state.evolution = action.payload;
        },
        setEggs: (state, action) => {
            state.eggs = action.payload;
        },
        setMoney: (state, action) => {
            state.money = action.payload;
        },
    }
})

export const {chooseDigimonName, setLevel, setHunger, setEvolution, setEggs, setMoney} = infoSlice.actions

export default infoSlice.reducer;