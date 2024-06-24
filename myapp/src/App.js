import logo from './logo.svg';
import './App.css';

function App() {
  const arr=["AA","BB","CC"];
  const list=arr.map((item) => <p>{item}</p>);
  return (
    <div className="App">
        <h1>Heading</h1>
        <p>{list}</p>
    </div>
  );
}

export default App;
