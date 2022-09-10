import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { travelApi } from "../services/travelApi";

export const store = configureStore({
        reducer: {
                [travelApi.reducerPath] : travelApi.reducer
        },
})

setupListeners(store.dispatch)