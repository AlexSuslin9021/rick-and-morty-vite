import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {episodes} from "./api.ts";

export const getEpisode = createAsyncThunk('episode/getEpisode',async ()=>{
    const res = await episodes.getEpisodes()
    return res.data
})
const InitialState={} as EpisodeData
const slice= createSlice({
    name:'episode',
    initialState:InitialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getEpisode.fulfilled, (state, action:PayloadAction<EpisodeData>) => {
            state.results = action.payload.results
        })
    },
})

export const episode = slice.reducer

// Определение типа для информации о серии
interface EpisodeInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

// Определение типа для персонажей в серии
type CharacterURL = string;
type CharactersList = CharacterURL[];

// Определение типа для одной серии
interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: CharactersList;
    url: string;
    created: string;
}

// Определение типа для всего объекта данных
interface EpisodeData {
    info: EpisodeInfo;
    results: Episode[];
}
