import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    // new state depends on the current state, callback function, create a new array contains all the current items plus the new one
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  // update an object in an array
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🏖 Far Away Holiday</h1>;
}
function Form({ onAddItems }) {
  // controlled element -> create a piece of state
  // use on the element that we want to control
  // update the state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // initial  state for the items is just an empty array
  // avid reload
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    // add a guard clause
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // once submited go back to original
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      {/* the value is walys string needed coverted */}
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* javascript array form, use alot in react */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        // always need the value and the onchange
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {/* the name of the componet,the name of the prop and then here the object itsef call back function */}
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onDeleteItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
    // call the delite only whenn the event happends,
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>you have x items on your list, and you already packed x (x%)</em>
    </footer>
  );
}


