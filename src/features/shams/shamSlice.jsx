import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import shamService from "./shamServive";
// import { addSham } from "../../../../backEnd/controllers/shamController";


// define the intialState of the app

const initialState = {
    shams:[],
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:'',
}

export const addSham = createAsyncThunk("shams/add",async(sham,thunkApi)=>{
    try {
        let token = thunkApi.getState().auth.user.token;
        return shamService.addSham(sham,token);
    } catch (error) {
        
    }
}) 

export const postSham = createAsyncThunk('shams/post',async(sham,thunkApi)=>{
    try {
        let token = thunkApi.getState().auth.user.token;
        return shamService.postSham(sham,token);
    } catch (error) {
        const message = (error.response.data.message && error.response.data && error.response) || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})

export const getSham = createAsyncThunk('sham/get',async(_,thunkApi)=>{
    try {
        let token = thunkApi.getState().auth.user.token;
        return shamService.getSham(token);
    } catch (error) {
        const message = (error.response.data.message && error.response.data && error.response) || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})


export const shamSlice = createSlice({
    name:'shams',
    initialState,
    reducers:{
        reset: () =>
        initialState,            
    },
    extraReducers:(builder)=>{
        builder
            .addCase(addSham.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(addSham.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(addSham.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.shams = action.payload;
            })
            .addCase(postSham.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(postSham.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                // state.shams = null;
                state.message = action.payload;
            })
            .addCase(postSham.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.shams = action.payload
            })
            .addCase(getSham.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(getSham.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                // state.shams = null;
                state.message = action.payload;
            })
            .addCase(getSham.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.shams = action.payload
            })
    }
})


export const {reset} = shamSlice.actions;
export default shamSlice.reducer;