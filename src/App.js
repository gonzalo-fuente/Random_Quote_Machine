import { useState, useEffect } from "react";
import RandomQuote from "./components/RandomQuote";
import NewQuote from "./components/NewQuote";

function App() {
  
  const [quotes, setQuotes] = useState([]);
  
  const [quote, setQuote] = useState(null);

  const [color, setColor] = useState('#fff');

  useEffect(() => {
    const getQuotes = async () => {
      const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');

      if (response.status !== 200) {
        throw new Error("Error fetching the data");
      }

      const data = await response.json();

      return data;
    };

    getQuotes()
      .then((data) => setQuotes(data.quotes))
      .catch(err => (alert(err.message)));

  },[]);

  useEffect(() => getQuote(),[quotes]);

  const getQuote = () => {
    const colors = [
      '#998276','#c4c484','#abd883','#a2f2bd','#b88488','#d1b182','#d4eb91','#ccfcc4',
      '#907699','#c484a4','#ea8c79','#f2e5a2','#9a84b8','#d182ca','#eb91a8','#ffddc4',
      '#768d99','#8484c4','#c479ea','#f2a2d7','#84b8b4','#82a2d1','#a791eb','#fbc8f5',
      '#7c957a','#84c4a4','#79d7ea','#a2aff2','#a2b884','#82d189','#91ebd4','#c9e5fa',
      '#b8a784','#b9ca89','#91eb91','#c9fce9','#957686','#c49484','#eade7a','#c3f2a2',
      '#b884af','#d1828f','#ebbd91','#f7f9c4','#797699','#b484c4','#ea79bb','#f2a9a2',
      '#8495b8','#9d82d1','#ea91eb','#ffc8d4','#76958d','#84b4c4','#7982ea','#d1a2f2',
      '#84b88d','#82d1c4','#91beeb','#d2c6fa','#969976','#94c484','#79eaa8','#a2ebf2',
     ];
    
    const randomNumber = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomNumber]);
    const randomColor = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColor]);
  };

  return (
    <div style={{ backgroundColor: color, minHeight: '100vh' }}>
      <div className="App container pt-5" id="quote-box">
        {quote ? (
          <RandomQuote quote={ quote } />
        ) : (
          <h3>Loading...</h3>
        )}
        <NewQuote setQuote={() => getQuote()} />
      </div>
    </div>
  );
}

export default App;
