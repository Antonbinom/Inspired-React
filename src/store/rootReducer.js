import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from "/src/features/navigationSlice";
import colorsReducer from "/src/features/colorsSlice";
import goodsReducer from "/src/features/goodsSlice";
import productReducer from "/src/features/productSlice";


const rootReducer = combineReducers({
    navigation: navigationReducer,
    colors: colorsReducer,
    goods: goodsReducer,
    product: productReducer,
});

export default rootReducer