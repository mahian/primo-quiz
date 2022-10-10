import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Home from './components/Home';
import Quizes from './components/Quizes';
import Root from './Root';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [
      {path: '/', element: <Home></Home>},
      {path: 'quizes', element: <Quizes></Quizes>},
      {path: 'blog', element: <Blog></Blog>},
    ]
  }])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
