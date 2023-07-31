import { configureStore } from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
// ...
const store = configureStore({
    reducer: {

    },
})
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => RootState = useDispatch

export default store