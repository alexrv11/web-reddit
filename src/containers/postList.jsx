import React from 'react';
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import '../index.css';

import { fetchPosts } from '../actions/post.action'


import { Layout, Divider, Pagination, Row } from 'antd';
import CardReddit from '../components/card'

const { Content } = Layout;

const mapStateToProps = state => ({
  posts: state.posts,
  page: state.page
})

const mapDispatchToProps = {
  getPosts: fetchPosts
}

class PostList extends React.Component {

  componentWillMount() {
    this.props.getPosts();
  }

  renderItems() {
    return this.props.posts.map(item => {
      return (
        <CardReddit post={ item } history={ this.props.location }/>
      )
    })
  }

  render() {
    return (
      <Content>
        <Row className="wrapper-cards" type="flex" justify="center" gutter={24}>
          {this.renderItems()}
        </Row>
        <Divider />
        <Row type="flex" justify="center">
          <Pagination defaultCurrent={1} total={50} />
        </Row>
      </Content>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)

