import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
function App() {
  return (
    <div className="App">
    {/* Sending default Value */}
    {/* <ComponentC/> */}

    {/* Passing a value */}
     <UserProvider value="Vani">
       <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
