import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser, login, register } from "./authAPI";
import { act } from "react";

const registerUser = createAsyncThunk('user/register', async (formData, thunkAPI)=>{
    try {
        const response = await register(formData)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data.message)
    }
})

const loginUser = createAsyncThunk('user/login',async (formData, thunkAPI)=>{
    try {
        const response = await login(formData)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data.message)
    }
})

const getUserInfo = createAsyncThunk('user/userInfo',async (formData, thunkAPI)=>{
    try {
        const response = await getCurrentUser()
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data.message)
    }
})

const tokenFromStorage = localStorage.getItem('token') || null

const initialState ={
    token:tokenFromStorage,
    user:null,
    status:"idle",
    error:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout(state){
            state.token=null,
            state.user=null,
            localStorage.removeItem('token')
        },
        setUser(state,action){
            state.user=action.payload
        }
    },
    extraReducers(builder){
        builder
        .addCase(registerUser.fulfilled, (state,action)=>{state.status = 'succeeded'})
        .addCase(registerUser.rejected,(state,action)=>{state.status = 'failed', state.error = action.error})
    
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            const token = action.payload.token
            state.token = token
            localStorage.setItem('token', token)
        })
        .addCase(loginUser.rejected,(state,action)=>{state.status = 'failed', state.error = action.error})
        
        addCase(getUserInfo.fulfilled, (state,action) =>{
            state.status = 'fulfilled'
            user = action.payload,
            state.user = user
        })
        .addCase(getUserInfo.rejected,(state,action)=>{state.status = 'failed', state.error = action.error})
    }
});


export const {logout, setUsers} = authSlice.actions;
export default authSlice.reducer