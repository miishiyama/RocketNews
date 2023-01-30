import "./App.css"

import Image from "./assets/image.png"

import Form from "./components/Form/Form"

import Link from "./components/Link/Link"

import Logo from "./components/Logo/Logo"

import Text from "./components/Text/Text"

function App() {
  return (
    <div className="div">
      <img className="img" src={ Image } />
      <main className="main">
        <Logo />
        <Text />
        <Form />
        <Link />
      </main>
    </div>
  )
}

export default App
