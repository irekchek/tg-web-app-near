import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="left">
          <img  src="/src/img/logo.jpg" alt="logo icon" className="icon" />
        </div>
        <div className="center">
          <button className="button shrimp-button">
            Shrimp
            <span className="icon">🦐</span>
          </button>
        </div>
        <div className="right">
          <button className="button qr-code-button">
            <img src="img/qr_icon.jpg" alt="QR Code Icon" className="icon" />
          </button>
          <button className="button settings-button">
            <img src="/src/img/setting.png" alt="Settings Icon" className="icon" />
          </button>
        </div>
      </header>


    </div>
  );
}

export default App;
