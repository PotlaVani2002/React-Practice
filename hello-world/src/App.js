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
function App() {
  return (
    <div className="App">
       {/* <Greet /> */}
       {/* <Welcome /> */}
       {/* <Hello /> */}
       {/* <ErrorBoundary>
           <Hero heroName="Batsman"/>
           <Hero heroName="Superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
           <Hero heroName="Joker"/>
       </ErrorBoundary> */}
       {/* <ClickCounter name="Vani"/>
       <HoverCounter /> */}
       <ClickCounterTwo />
       <HoverCounterTwo />
       <User render={(isLoggedIn)=>isLoggedIn? "Vani": "Guest"} />
    </div>
  );
}

export default App;
