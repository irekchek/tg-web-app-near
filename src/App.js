import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="left">
          <img src="/img/logo.jpg" alt="logo icon" className="icon" />
        </div>
        <div className="center">
          <button className="button shrimp-button">
            🏆︎ Shrimp
          </button>
        </div>
        <div className="right">
          <button className="button qr-code-button">
            <img src="/img/qr_code.svg" alt="QR Code Icon" className="icon" />
          </button>
          <button className="button settings-button">
            <img src="/img/setting.svg" alt="Settings Icon" className="icon" />
          </button>
        </div>
      </header>

      <div className={"username-container"}>
        <p className={"username-text"}>irekchek.tg</p>
        <img src="/img/copy.svg" alt="Copy Icon" className="icon" />
      </div>

      <div className="balance-container">
        <p className="balance-text">Total Balance</p>
        <p className="balance-amount">$322</p>
        <div className="buttons-container">
          <button className="button-balance swap-button">Swap</button>
          <button className="button-balance transfer-button">Transfer</button>
        </div>
      </div>

    </div>
  );
}

export default App;
