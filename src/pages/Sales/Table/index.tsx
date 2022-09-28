import { useCallback, useEffect, useState } from 'react';

import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Drawer, Dropdown, Menu, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

const item = {
  id: '1',
  created_at: '23/09/2022',
  invoice: 123456,
  client: 'John Doe',
  product: 'Do mil ao milhão',
  affiliate: '-',
  utm: '-',
  gain: 'R$ 100,98'
};

export default function TableSales() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<any[]>([]);
  const [modalDetails, setModalDetails] = useState(false);

  const toggleLoading = useCallback(() => setLoading(false), []);

  const handleToogleDetails = () => setModalDetails(prevState => !prevState);

  const menu = (
    <Menu
      items={[
        {
          label: 'Ver detalhes',
          onClick: handleToogleDetails,
          key: '0'
        },
        {
          label: 'Reembolsar',
          key: '1'
        },
        {
          type: 'divider'
        },
        {
          label: 'Remover',
          key: '3'
        }
      ]}
    />
  );

  const columns: ColumnsType<any> = [
    {
      title: 'Criação',
      dataIndex: 'created_at',
      key: 'created_at'
    },
    {
      title: 'Fatura',
      dataIndex: 'invoice',
      key: 'invoice'
    },
    {
      title: 'Cliente',
      dataIndex: 'client',
      key: 'client'
    },
    {
      title: 'Produto',
      dataIndex: 'product',
      key: 'client'
    },
    {
      title: 'Afiliado',
      dataIndex: 'affiliate',
      key: 'affiliate'
    },
    {
      title: 'UTM',
      dataIndex: 'utm',
      key: 'utm'
    },
    {
      title: 'Ganho',
      dataIndex: 'gain',
      key: 'gain'
    },
    {
      title: 'Ações',
      key: 'action',
      width: 50,
      render: () => (
        <Dropdown overlay={menu} trigger={['click']}>
          <Button shape='circle'>
            <EllipsisOutlined />
          </Button>
        </Dropdown>
      )
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setItems(new Array(10).fill(item));
      toggleLoading();
    }, 2000);
  }, [toggleLoading]);

  return (
    <div className='sales-table'>
      <Table
        locale={{ emptyText: 'Sem dados' }}
        loading={loading}
        dataSource={items}
        columns={columns}
        pagination={{
          responsive: true,
          position: ['bottomCenter'],
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
        }}
      />

      <Drawer title='Detalhes Fatura' placement='right' onClose={handleToogleDetails} open={modalDetails}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}
