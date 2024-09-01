// src/redux/itemDetailSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Definisikan thunk untuk mengambil detail item
export const fetchItemDetail = createAsyncThunk(
  "itemDetail/fetchItemDetail",
  async (id) => {
    const response = await axios.get(
      `https://66c5eabb134eb8f434961c3e.mockapi.io/blog/BlogContent/${id}`
    );
    return response.data;
  }
);

const itemDetailSlice = createSlice({
  name: "itemDetail",
  initialState: {
    item: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.item = action.payload;
      })
      .addCase(fetchItemDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default itemDetailSlice.reducer;
