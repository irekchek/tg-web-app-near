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

      <div className="wrapper">
        <div className="container-left">
          <div className="hot-balance">
            <div className="hot-balance-text">HOT Balance</div>
            <div className="hot-balance-number">0.017920</div>
          </div>
          <div className="hot-animation"/>
        </div>
        <div className="container-right">
          <div className="storage">
            <div className="storage-text">Storage</div>

            <div className="mining-container">
              <div className="mining">
                <div className="mining-scale"></div>
              </div>
              <div className="mining-data">
                <div className="mining-data-mining">Mining</div>
                <div className="mining-data-data">
                  <div className="mining-data-collected">Collected</div>
                  <div className="mining-data-value">0.014968</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
