import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "animeName",
    initialState: {
        animeList: [
            {
                id: 1,
                img: "",
                name: "Shiguang Dailiren",
                japanese: "时光代理人"
            },
            {
                id: 2,
                img: "",
                name: "Shiguang Dailiren",
                japanese: "时光代理人"
            },
            {
                id: 3,
                img: "",
                name: "Shiguang Dailiren",
                japanese: "时光代理人"
            },
            {
                id: 4,
                img: "",
                name: "Shiguang Dailiren",
                japanese: "时光代理人"
            },
            {
                id: 5,
                img: "",
                name: "Shiguang Dailiren",
                japanese: "时光代理人"
            },
            {
                id: 6,
                img: "",
                name: "Shiguang Dailiren",
                japanese: "时光代理人"
            }],
        favAnime: [
            {
                id: 1,
                img: "",
                name: "Shiguang Dailiren",
                japanese: "时光代理人"
            }
        ]
    },
    reducers: {
        setPaginationAnime: ((state, action) => {
            state.favAnime = action.payload
        })
    }
})
export default slice.reducer;