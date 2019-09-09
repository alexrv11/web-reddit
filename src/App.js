import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Layout, Divider, Pagination, Row, Col, Typography } from 'antd';
import CardReddit from './components/card'

const { Header, Footer, Content } = Layout;
const { Title } = Typography

const post1 = {
  image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  icon_avatar:"https://i.redd.it/award_images/t5_2qh0u/bwpkktei53831_Superspecialaward.png",
  title: "title post",
  description: "description post ..."
}

function App() {
  return (
    <Layout>
      <Header>
      <Title id="reddit-title" level={2}>Reddit Top</Title>
      </Header>
      <Content>
        <Row type="flex" justify="center" gutter={24}>
          <Col span={6}><CardReddit post={ post1 }/></Col>
          <Col span={6}><CardReddit post={ post1 }/></Col>
          <Col span={6}><CardReddit post={ post1 }/></Col>
        </Row>
        <Divider />
        <Row type="flex" justify="center">
          <Pagination defaultCurrent={1} total={50} />
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
