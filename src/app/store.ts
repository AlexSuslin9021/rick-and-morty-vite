import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import {characters} from "../characters/slice.characters.ts";
import {episode} from "../episodes/slice.episode.ts";
// ...
const store = configureStore({
    reducer: {
        characters,
        episode,
    },
})
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store