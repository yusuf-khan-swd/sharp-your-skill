import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz/Quiz';
import Statics from './components/Statics/Statics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/topic/:topicId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element: <Quiz></Quiz>
        },
        {
          path: 'statics',
          element: <Statics></Statics>
        }
      ],
    },
    {
      path: '*',
      element: <h1>404 Page not found</h1>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
