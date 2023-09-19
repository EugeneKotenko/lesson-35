import React, { useState } from "react";
import "./shopping.scss";
import ShoppingItem from "./ShoppingItem.jsx";
import AddItemModal from "./AddItemModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem, deleteItem } from "../store/shoppingListSlice";

const btnStyle = {
  border: "1px solid black",
  backgroundColor: "rgb(232 232 251)",
  color: "black",
  padding: "10px",
  borderRadius: "7px",
  cursor: "pointer",
};

const ShoppingList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingList.items);

  const handleAddItem = (caption, amount) => {
    if (editingItem) {
      dispatch(editItem({ id: editingItem.id, caption, amount }));
      setEditingItem(null);
    } else {
      dispatch(addItem({ caption, amount }));
    }
    setIsModalOpen(false);
  };

  const handleEditClick = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (item) => {
    dispatch(deleteItem({ id: item.id }));
  };

  return (
    <div>
      <h1>Список покупок</h1>
      <button style={btnStyle} onClick={() => setIsModalOpen(true)}>
        Додати позицію
      </button>
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onEditClick={() => handleEditClick(item)}
          onDeleteClick={() => handleDeleteClick(item)}
        />
      ))}
      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingItem(null);
        }}
        onAdd={handleAddItem}
        editingItem={editingItem}
      />
    </div>
  );
};

export default ShoppingList;
