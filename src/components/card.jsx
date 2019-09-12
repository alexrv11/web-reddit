import './card.css'
import React from 'react'
import {Card, Icon, Avatar } from 'antd'

const { Meta } = Card;

const CardReddit = (props) => {
    const handleClick = () => {
      props.location.push('/details');
    }

    const { image, title, description, icon_avatar } = props.post

    return (
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={image}
          />
        }
        actions={[
          <Icon type="delete" theme="filled" />,
        ]}
      >
        <Meta
          className="reddit-card"
          avatar={<Avatar src={ icon_avatar } />}
          title={ title }
          description={ description }
          onClick={ handleClick }
        />
      </Card>
    );
}

export default CardReddit;