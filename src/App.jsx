import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'
import Home from "./components/Home";
import Superheroes from "./components/Superheroes";
import RQSuperheroes from "./components/RQSuperheroes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <nav className='bg-yellow-200 py-6 px-8'>
          <ul className='flex gap-6'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/super-heroes'>Traditional Super Heroes</a>
            </li>
            <li>
              <a href='/rq-super-heroes'>RQ Super Heroes</a>
            </li>
          </ul>
        </nav>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/super-heroes' element={<Superheroes />} />
            <Route path='rq-super-heroes' element={<RQSuperheroes />} />
          </Routes>
        </Router>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
