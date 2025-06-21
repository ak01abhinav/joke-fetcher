import { useState, useEffect } from 'react';

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
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🤣 Joke Generator</h1>
        <button onClick={fetchJoke} style={styles.button}>
          {loading ? "Loading..." : "Tell me a joke"}
        </button>
        {joke && <p style={styles.joke}>{joke}</p>}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    background: '#f2f2f2',
    overflow: 'hidden',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '90%',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#333',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0070f3',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  joke: {
    marginTop: '2rem',
    fontSize: '1.1rem',
    color: '#555',
  },
};

export default App;
