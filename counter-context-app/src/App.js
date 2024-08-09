import { CounterProvider } from './context/CounterContext';
import "bootstrap/dist/css/bootstrap.min.css";
import './app.scss';
import CounterDisplay from './components/CounterDisplay';
import CounterControls from './components/CounterControls';

function App() {
  return (
    <>
      <div className="App">
        <CounterProvider>
          <div className='page-counter page'>
            <div className="container">
              <div className="row">
                <div className="col-md-12 counter-container">
                  <h1>Counter App With Context</h1>
                  <CounterDisplay />
                  <CounterControls />
                </div>
              </div>
            </div>
          </div>
        </CounterProvider>
      </div>

    </>
  );
}

export default App;
