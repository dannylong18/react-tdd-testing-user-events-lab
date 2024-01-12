import { useState } from "react";

function App() {
  const [email, setEmail] = useState('')
  const updateEmail = (e) => setEmail(e.target.value)

  const [name, setName] = useState('')
  const updateName = (e) => setName(e.target.value)

  const [sportsIsChecked, setSportsIsChecked] = useState(false)
  const toggleSports = (e) => setSportsIsChecked(!sportsIsChecked)

  const [surgeryIsChecked, setSurgeryIsChecked] = useState(false)
  const toggleSurgery = (e) => setSurgeryIsChecked(!surgeryIsChecked)

  const [fishingIsChecked, setFishingIsChecked] = useState(false)
  const toggleFishing = (e) => setFishingIsChecked(!fishingIsChecked)

  const [submit, setSubmit] = useState(false)
  const handleSubmit = (e) => {e.preventDefault()
    setSubmit(!submit)}

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form>
        <label htmlFor="name">Enter Name: </label>
        <input 
        type='text'
        id='name'
        value={name}
        placeholder="Name"
        onChange={updateName}
        />
        <br />
        <label htmlFor="email">Enter Email Address: </label>
        <input 
        type='text'
        id='email'
        value={email}
        placeholder="Email Address"
        onChange={updateEmail}
        />
        <br />
        <label htmlFor="interests">Areas of Interest: </label>
        <input 
        type='checkbox'
        id='sports'
        checked={sportsIsChecked}
        aria-checked={sportsIsChecked}
        onChange={toggleSports}
        />
        <label htmlFor="sports">Sports</label>

        <input 
        type='checkbox'
        id='surgery'
        checked={surgeryIsChecked}
        aria-checked={surgeryIsChecked}
        onChange={toggleSurgery}
        />
        <label htmlFor="surgery">Surgery</label>

        <input 
        type='checkbox'
        id='fishing'
        checked={fishingIsChecked}
        aria-checked={fishingIsChecked}
        onChange={toggleFishing}
        />
        <label htmlFor="fishing">Fishing</label>
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <h4>{submit ? 'Thank You' : null}</h4>
      </form>
    </main>
  );
}

export default App;
