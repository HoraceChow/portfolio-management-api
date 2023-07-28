import logo from './logo.svg';
import './App.css';
function Watchlist(props){
  const data = props.data

  return(
      
      <div className="watchlist-container">
        <div className="watchlist-header">
          <div className="watchlist-header-element">Ticker</div>
          <div className="watchlist-header-element">Name</div>
          <div className="watchlist-header-element">Price</div>
          <div className="watchlist-header-element">Price Change</div>
          <div className="watchlist-header-element">Shares</div>
        </div>
        {
          data.map((stock, index) =>{ 
            return (
            <div key={index} className = {(index%2==0?"odd-box":"even-box")}>
              <div key={index+"ticker"} className = {(index%2==0?"odd-box-element":"even-box-element")}>{stock["ticker"]}</div>
              <div key={index+"name"} className = {(index%2==0?"odd-box-element":"even-box-element")}>{stock["name"]}</div>
              <div key={index+"price"} className = {(index%2==0?"odd-box-element":"even-box-element")}>{stock["price"]}</div>
              <div key={index+"priceChange"} className = {(index%2==0?"odd-box-element":"even-box-element")}>{stock["priceChange"]}</div>
              <div key={index+"shares"} className = {(index%2==0?"odd-box-element":"even-box-element")}>{stock["shares"]}</div> 
            </div>)
          } )
      }</div>
  )
}
function App() {
  const data = [{
    "ticker":"TSLA",
    "name":"Tesla",
    "price":"$266",
    "priceChange":"5%",
    "shares":"300"
  },{
    "ticker":"TSLA",
    "name":"Tesla",
    "price":"$266",
    "priceChange":"5%",
    "shares":"300"
  }]
  return (
    <div className="App">
      <header className="App-header">
        <Watchlist data={data}/>
      </header>
    </div>
  );
}

export default App;
