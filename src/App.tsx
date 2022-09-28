import './assets/styles/theme.less';
import Routes from 'pages/routes';
import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
