import './App.css'
import Article  from './components/Article'

function App() {
  return (
    <div className='App'>
      <Article name='Wisnu' titles={["Reactjs", "NextJs", "NodeJs"]}/>
      <br />
      <Article name='Budi'  titles={["Reactjs", "NextJs", "NodeJs"]}/>
    </div>
  )
}

export default App
