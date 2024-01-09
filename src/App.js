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
  return (
    <form className="add-form">
      <h3>What do you need for your trip?</h3>
      <select>
        {/* javascript array form, use alot in react */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}></option>
        ))}
      </select>

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