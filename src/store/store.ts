import {configureStore} from "@reduxjs/toolkit";
import animeReducer from "./reducer/animeReducer";

export default configureStore({
    reducer: {
        animeReducer
    }
});