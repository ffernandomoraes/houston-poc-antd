import { useLocation, Outlet } from 'react-router-dom';

import Layout from '@eduzz/houston-ui/Layout';
import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';

const { Topbar, Sidebar, Content } = Layout;
const { Item, Group } = Sidebar;

const LayoutDefault = () => {
  const location = useLocation();

  return (
    <ThemeProvider>
      <Layout>
        <Topbar currentApplication='orbita' />

        <Sidebar currentLocation={location.pathname}>
          <Item href='/dashboard'>Dashboard</Item>

          <Group label='Vendas'>
            <Item href='/sales'>Minhas Vendas</Item>
            <Item href='/sales'>Meus Leads</Item>
          </Group>
        </Sidebar>

        <Content>
          <Outlet />
        </Content>
      </Layout>
    </ThemeProvider>
  );
};

export default LayoutDefault;
