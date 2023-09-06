import {createSlice} from "@reduxjs/toolkit";

export const infoSlice = createSlice({
    name: "info",
    initialState: {
        digimonName: null,
        hunger: 100,
        eggs: [],
        money: 0
    },
    reducers: {
        chooseDigimonName: (state, action) => {
            state.digimonName = action.payload
        },
        setHunger: (state, action) => {
            state.hunger = action.payload
        },
        setEggs: (state, action) => {
            state.eggs = action.payload
        },
        setMoney: (state, action) => {
            state.money = action.payload
        },
    }
})

export const {chooseDigimonName, setHunger, setEggs, setMoney} = infoSlice.actions

export default infoSlice.reducer;