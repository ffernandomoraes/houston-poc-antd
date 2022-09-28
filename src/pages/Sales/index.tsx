import { UnorderedListOutlined } from '@ant-design/icons';
import { Space, Alert, Typography, Button, Row, Col } from 'antd';

import Filters from './Filters';
import Table from './Table';

const { Title, Paragraph, Link } = Typography;

export default function Sales() {
  return (
    <div className='page-sales'>
      <Space direction='vertical' size='large' style={{ display: 'flex' }}>
        <Alert
          description={
            <>
              Novidades na plataforma! Agora você pode consultar suas vendas de Order Bump em nossas opções de filtros
              avançados. Ainda não conhece essa funcionalidade?
              <br />
              <Link href='https://ant.design' target='_blank'>
                Clique aqui e descrubra como aumentar o seu ticket médio com Order Bump!
              </Link>
            </>
          }
          type='info'
          showIcon
          closable
        />

        <Row align='middle' justify='space-between'>
          <Col>
            <Space direction='vertical' size={0}>
              <Title level={2}>Minhas vendas</Title>

              <Paragraph type='secondary'>Gerencie suas vendas.</Paragraph>
            </Space>
          </Col>

          <Col>
            <Button icon={<UnorderedListOutlined />}>Gerar relatórios</Button>
          </Col>
        </Row>

        <Filters />
        <Table />
      </Space>
    </div>
  );
}
