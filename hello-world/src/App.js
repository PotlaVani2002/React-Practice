import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
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
       <ClickCounter name="Vani"/>
       <HoverCounter />
    </div>
  );
}

export default App;
