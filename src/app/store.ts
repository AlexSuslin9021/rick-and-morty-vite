import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import {characters} from "../characters/slice.characters.ts";
// ...
const store = configureStore({
    reducer: {
        characters,
    },
})
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store