import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/home.jsx'
import ChatApp from './pages/chatapp.jsx'
import StressQuestions from './pages/stressquestions.jsx';
import Technology from './pages/technology.jsx';

function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/chat' element={<ChatApp/>}/>
          <Route path='/stressquestions' element={<StressQuestions/>}/>
          <Route path='/tech' element={<Technology/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
