
import './App.css'
import Card from './components/Card'

function App() {
 const users = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  username: `User${i + 1}`,
  age: 18 + (i % 10)  // ages between 18–27
  }))
  return (
    <>
      <h1>Tailwind test</h1>
      <div className="max-w-7xl mx-auto + gap">
        <div className="grid grid-cols-3 gap-6">
          {users.map(user => (
            <Card key={user.id} person={user}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
