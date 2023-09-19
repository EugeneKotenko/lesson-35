import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), ...action.payload });
    },
    editItem: (state, action) => {
      const editedItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (editedItemIndex !== -1) {
        state.items[editedItemIndex] = action.payload;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addItem, editItem, deleteItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
