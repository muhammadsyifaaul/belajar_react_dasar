import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function  Nav() {

  return (
    <>
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Contact</a>
    </>
  )
}
function Name(props) {

  return (
    <h1>Hello {props.nama ? props.nama : "Fulan"}</h1>
  )
}
function Pekerjaan({nama,job}) {

  return (
    <>
    <Name nama = "jamal"/>
    <h1>Hi {nama} you are {job}</h1>
    </>
  )
}
function Mahasiswa() {
  const Students = ['jamal','abdul','nasser'];
  return (
    <>
    <ul>
      {
      Students.map((student) => {
        console.log(student)
        return <li key={student}>{student}</li>;
      })
    }
    </ul>
    </>
  )
}
function Button({tipe,onClick}) {

  return (

    <button onClick={onClick}>{tipe ? tipe : '+'}</button>

  )
}
function Nilai({ count }) {
  return (
    <span>{count}</span> 
  );
}
function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <Nav />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Name nama="Budi" />
      <Pekerjaan job="Programmer" nama='Samsul' />
      <Mahasiswa />

      <Button tipe="-" onClick={decrement} />

      <Nilai count={count} />

      <Button onClick={increment} />

      <Button tipe='reset' onClick={reset}/>
    </>
  );
}

export default App
