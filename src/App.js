import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Error from './components/Error';
import Home from './components/Home';
import Quizes from './components/Quizes';
import StartQuiz from './components/StartQuiz';
import Statistic from './components/Statistic';
import Root from './Root';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [
      {path: '/', element: <Home></Home>},
      {path: 'quizes', element: <Quizes></Quizes>},
      {path: 'blog', element: <Blog></Blog>},
      {path: 'blog', element: <Blog></Blog>},
      {path: 'statistic', element: <Statistic></Statistic>, 
      loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')},
      {path: 'quizes/:id', element: <StartQuiz></StartQuiz>,
      loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)},
      {path: '*', element: <Error></Error>},
    ]
  }])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
