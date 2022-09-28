import LayoutDefault from 'components/Layout';
import { useRoutes, Navigate } from 'react-router-dom';

import Sales from './Sales';

export default function RoutesApp() {
  const routes = useRoutes([
    {
      path: '/',
      element: <LayoutDefault />,
      children: [
        { index: true, path: '/', element: <Navigate to='/sales' /> },
        { path: '/dashboard', element: <>dash</> },
        { path: '/sales', element: <Sales /> }
      ]
    }
  ]);

  return <>{routes}</>;
}
