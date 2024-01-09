import { useState } from "react"

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "hat", quantity: 1, packed: true },
]

export default function App() {
  return <div className="app">
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </div>


}
function Logo() {
  return <h1>🏖 Far Away Holiday</h1>

}
function Form() {
  // controlled element -> create a piece of state
  // use on the element that we want to control
  // update the state
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)


  // avid reload
  function handleSubmit(e) {
    e.preventDefault()
    console.log(e)

  }
  // add a guard clause
  if (!description) return

  const newItem = { description, quantity, packed: false, id: Date.now() }
  // once submited go back to original 
  setDescription('')
  setQuantity(1)

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      {/* the value is walys string needed coverted */}
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {/* javascript array form, use alot in react */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..."
        // always need the value and the onchange
        value={description} onChange={(e) => setDescription(e.target.value)} />

    </form>
  )

}
function PackingList() {
  return (
    <div className="list">
      <ul >
        {/* the name of the componet,the name of the prop and then here the object itsef call back function */}
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}


      </ul>
    </div>
  );

}
function Item({ item }) {
  return <li><span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.description} {item.quantity}</span>
    <button>❌</button></li>

}

function Stats() {
  return <footer className="stats">
    <em>you have x items on your list, and you already packed x (x%)</em>
  </footer>

}