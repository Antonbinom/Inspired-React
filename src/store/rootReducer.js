import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from "/src/features/navigationSlice";
import colorsReducer from "/src/features/colorsSlice";

const rootReducer = combineReducers({
    navigation: navigationReducer,
    colors: colorsReducer
});

export default rootReducer