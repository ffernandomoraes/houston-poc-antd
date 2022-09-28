import { useState } from 'react';

import { ControlOutlined, SearchOutlined } from '@ant-design/icons';
import { Col, Form, Row, Select, DatePicker, Input, Button, Space, Divider, Modal } from 'antd';

const { RangePicker } = DatePicker;

export default function Filters() {
  const [advancedFilters, setAdvancedFilters] = useState(false);

  const toggleAdvancedFilters = () => setAdvancedFilters(prevState => !prevState);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleSubmitFilterAdvanced = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='sales-filters'>
      <Space direction='vertical' size='small' style={{ display: 'flex' }}>
        <Form layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Row align='middle' gutter={24}>
            <Col md={12}>
              <Row gutter={4}>
                <Col md={8}>
                  <Form.Item label='Tipo de data' name='type_date'>
                    <Select defaultValue={1}>
                      <Select.Option value={1}>Criação</Select.Option>
                      <Select.Option value={2}>Clique</Select.Option>
                      <Select.Option value={3}>Crédito</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col md={16}>
                  <Form.Item label='Período' name='period'>
                    <RangePicker placeholder={['Data início', 'Data término']} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col md={12}>
              <Row gutter={4}>
                <Col md={8}>
                  <Form.Item label='Cliente' name='type_producer'>
                    <Select defaultValue={1}>
                      <Select.Option value={1}>E-mail</Select.Option>
                      <Select.Option value={2}>Nome</Select.Option>
                      <Select.Option value={3}>ID</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col md={16}>
                  <Form.Item label='E-mail' name='producer_value'>
                    <Input placeholder='Ex: johndoe@eduzz.com' />
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col md={6}>
              <Form.Item label='Produto' name='products'>
                <Input suffix={<SearchOutlined />} />
              </Form.Item>
            </Col>

            <Col md={6}>
              <Form.Item label='Fatura' name='invoice'>
                <Input placeholder='Ex: 12345' />
              </Form.Item>
            </Col>

            <Col md={8}>
              <Form.Item label='Status da fatura' name='status_invoice'>
                <Select
                  showArrow
                  defaultValue={[1, 2]}
                  mode='multiple'
                  style={{ width: '100%' }}
                  maxTagCount='responsive'
                >
                  <Select.Option value={1}>Aberta</Select.Option>
                  <Select.Option value={2}>Aguardando reembolso</Select.Option>
                  <Select.Option value={3}>Cancelada</Select.Option>
                  <Select.Option value={4}>Duplicada</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col md={4}>
              <Button type='primary' block>
                Filtrar
              </Button>
            </Col>
          </Row>
        </Form>

        <Divider>
          <Button onClick={toggleAdvancedFilters} icon={<ControlOutlined />}>
            Filtros avançados
          </Button>
        </Divider>
      </Space>

      <Modal
        title='Filtros avançados'
        open={advancedFilters}
        onOk={handleSubmitFilterAdvanced}
        onCancel={toggleAdvancedFilters}
        okText='Filtrar'
        cancelText='Cancelar'
        width={800}
        centered
      >
        ...
      </Modal>
    </div>
  );
}
