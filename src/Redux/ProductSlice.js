import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getCategories = createAsyncThunk(
  'product/Categories',
  async function(){
    let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    return data  
  }
)
let initialState = {
  counter:0,
  categories: []
}

let productSlice = createSlice({
  name:'product',
  initialState:initialState,
  reducers:{
    increment:(state)=>{
      state.counter ++;
    },
    decrement:(state)=>{
      state.counter --;
    },
    incrementByValue:(state, action)=>{
      state.counter += action.payload;
      
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(getCategories.fulfilled, (state, action)=>{
      state.categories = action.payload
    })
  }
})

export let {increment, decrement, incrementByValue} = productSlice.actions;
export let productReducer = productSlice.reducer;