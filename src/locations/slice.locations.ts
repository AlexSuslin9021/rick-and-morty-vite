import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {locatiosApi} from "./api.ts";

const initialState = {} as LocationData;
export const getLocations = createAsyncThunk('locations/getLocations', async () => {
    const res = await locatiosApi.getLocations()
    return res.data
})
const slice = createSlice({
    name: 'locations',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLocations.fulfilled, (state, action: PayloadAction<LocationData>) => {
            state.results = action.payload.results
        })
    },
})

export const locations = slice.reducer

// Определение типа для информации о локации
interface LocationInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

// Определение типа для резидентов локации
type ResidentURL = string;
type ResidentsList = ResidentURL[];

// Определение типа для одной локации
interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: ResidentsList;
    url: string;
    created: string;
}

// Определение типа для всего объекта данных
interface LocationData {
    info: LocationInfo;
    results: Location[];
}
