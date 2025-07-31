import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Header from './components/Header'
import ParentComponent from './components/CallBack';

function App() {
  return (
    <>
    <ParentComponent />
     <h1 >John Doe</h1>
     <Header /> 
      <Button ></Button>
     

    </>
  );
}

export default App;
