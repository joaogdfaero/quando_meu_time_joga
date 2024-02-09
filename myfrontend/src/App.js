import React, { useState, useEffect } from 'react';

function App() {
  const [jsonData, setJsonData] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:8000/next-games/1/'); // Substitua 1234 pelo ID do seu time
        const data = await response.json();
        setJsonData(JSON.stringify(data, null, 2)); // Convert JSON object to string with indentation
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div>
      <h1>JSON Output</h1>
      <pre>{jsonData}</pre>
    </div>
  );
}

export default App;


