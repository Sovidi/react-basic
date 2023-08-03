import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Css from './page/Css';
import Image from './page/Image';
import Home from './page/Home';
import Not from './page/Not';
import Router from './page/Router';
import StateProps from './page/StateProps';
import Hehe from './page/hehe';


function App() {
  return (
    <BrowserRouter>
      <div className="wrap">
        <header>
          <nav style={{border:'1px solid white'}}>
            <Link to="/"> HOME </Link>
            <Link to="/css"> CSS 활용 </Link>
            <Link to="/img"> IMAGE 활용 </Link>
            <Link to="/router" state="a100"> Router 페이지 이동 </Link>
            <Link to="/hehe"> hehe 페이지 이동 </Link>
            <Link to="/stateprops" > StateProps </Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/css' element={ <Css/> } />
            <Route path='/img' element={ <Image/> } />
            <Route path='/router' element={ <Router/> } />
            <Route path='/stateprops' element={ <StateProps data="1000" name="hehe"/> } />
            <Route path='/hehe' element={ <Hehe/> } />
            <Route path='/*' element={ <Not/> } />
          </Routes>
        </main>

        <footer></footer>

      </div>
    </BrowserRouter>
  );
}

export default App;