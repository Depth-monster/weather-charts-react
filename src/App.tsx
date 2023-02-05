import Search from './components/Search/Search'


function App() {
  return (
    //App: background pink
    <div className="App">
      {/* AppGlass background milk */}
      <div className="AppGlass">
        {/* just container*/}
        <div className="container">
          <h1>Weather</h1>

          <Search />
          

        </div>
      </div>
    </div>
  );
}

export default App;
