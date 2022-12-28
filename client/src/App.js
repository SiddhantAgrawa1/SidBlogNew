import './App.css';
import Appbar from './Components/Appbar';
import Blog from './Components/Blog';
import Blogs from './Components/Blogs';
import Home from './Components/Home';
import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './Components/About';

function App() {
  return (
    <Router>
      <Appbar/>
			<Routes>
				<Route path='/' element={<Home/>}></Route>
				<Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/blog/:name' element={<Blog/>}></Route>
        <Route path='/about' element={<About/>}></Route>
			</Routes>
		</Router>
  );
}

export default App;
