import React from 'react';
import Layout from '@/components/layout';
import OrderHistoryComponent from '@/components/Sections/OrderHistory/OrderHistory';


const MyOrder = () => {
  return (
    <Layout>
      <OrderHistoryComponent />
    </Layout>
  );
};

export default MyOrder;