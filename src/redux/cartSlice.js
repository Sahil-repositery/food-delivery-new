import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
     name:"cart",
     initialState:[],
     reducers:{
       AddItem: (state, action) => {
  let existItem = state.find((item) => item.id === action.payload.id);
  if (existItem) {
    existItem.qty += 1;
  } else {
    state.push({ ...action.payload, qty: 1 });
  }
},

      RemoveItem: (state, action) => {
  const index = state.findIndex(item => item.id === action.payload);
  if (index !== -1) {
    state.splice(index, 1); 
  }
},
    IncrementQty: (state, action) => {
  let existItem = state.find((item) => item.id === action.payload.id);
  if (existItem) {
    existItem.qty += 1;
  }
  },
    DecrementQty: (state, action) => {
  let existItem = state.find((item) => item.id === action.payload.id);
  if (existItem) {
    existItem.qty -= 1;
  }
  }
}
})
export const {AddItem,RemoveItem,IncrementQty,DecrementQty} = cartSlice.actions
export default cartSlice.reducer