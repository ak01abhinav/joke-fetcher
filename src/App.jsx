import { useState } from 'react';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://official-joke-api.appspot.com/jokes/random");
      const data = await res.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (err) {
      setJoke("Oops! Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>😂 Joke Generator</h1>
      <button onClick={fetchJoke} style={{ padding: "1rem", fontSize: "1rem" }}>
        {loading ? "Loading..." : "Tell me a joke"}
      </button>
      <p style={{ marginTop: "2rem" }}>{joke}</p>
    </div>
  );
}

export default App;
