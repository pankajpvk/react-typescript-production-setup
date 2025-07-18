import { useState } from 'react'

import './App.css'

function App() {
    const [count, setCount] = useState(0)
    //console.log(import.meta.env.VITE_ENV)
    return (
        <>
            <div></div>
            <h1 className="bg-amber-500">React + TypeScript Project Setup</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>Counter App</p>
            </div>
        </>
    )
}

export default App
