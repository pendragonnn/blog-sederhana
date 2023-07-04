import './App.css';
import { GlobalContext } from './context';
import Home from './pages/index'

function App() {
  const user = {
    username: 'wisnu'
  };
  
  return (
    <div className='App'>
      <GlobalContext.Provider value={user}>
        <Home />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
