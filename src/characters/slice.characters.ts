import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { charactersApi } from "./api.ts";

export const getCharacters = createAsyncThunk<ApiResponse, void>('characters/getCharacters', async () => {
    const res = await charactersApi.getCharacters();
    return res.data;
});
export const getCharactersPage = createAsyncThunk<ApiResponse, number>('characters/getCharactersPage', async (arg:number) => {
    const res = await charactersApi.getCharactersPage(arg);
    return res.data;
});
const initialState: ApiResponse = {
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    },
    results: [],
};

const slice = createSlice({
    name: 'characters',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCharacters.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
           state.results=action.payload.results
            state.info.pages=action.payload.info.pages
        });
        builder.addCase(getCharactersPage.fulfilled, (state, action: PayloadAction<ApiResponse>) => {
            state.results=action.payload.results
            state.info.pages=action.payload.info.pages
        });
    },
});


export const characters = slice.reducer

type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
};

type ApiInfo = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
};

type ApiResponse = {
    info: ApiInfo;
    results: Character[];
};

