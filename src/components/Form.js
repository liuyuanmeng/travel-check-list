import { useState } from "react";
export default function Form({ onAddItems }) {
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