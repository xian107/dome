function App() {
  return (
    <div className="App">
      <header className="App-header">头部</header>
      <micro-app name="sub-app" url="http://localhost:3000/"></micro-app>
    </div>
  );
}

export default App;
