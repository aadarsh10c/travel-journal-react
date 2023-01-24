import { useState } from 'react'
import Navigation from './component/Navigation'
import Content from './component/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigation  />
      <Content />
    </div>
  )
}

export default App
