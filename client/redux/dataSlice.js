import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        loading: false,
        portfolioData: null,
        dataReload: true
    },
    reducers: {
        showLoading(state) {
            state.loading = true
        },
        hideLoading(state) {
            state.loading = false
        },
        getData(state, action) {
            state.portfolioData = action.payload
        },
        reloadData(state, action) {
            state.dataReload = action.payload
        }
    }

})

export default dataSlice.reducer
export const { getData, showLoading, hideLoading, reloadData } = dataSlice.actions