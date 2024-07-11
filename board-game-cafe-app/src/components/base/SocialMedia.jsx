// SocialMedia.js
import React from 'react';
import { Row, Col } from 'antd';
import { SOCIAL_MEDIA_LINKS } from '../../constants';
import {
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { SocialMediaIcon } from '../../styles/styles';


const SocialMedia = () => {
  return (
    <Row justify="center" gutter={[16, 16]}>
      <Col>
        <a href={SOCIAL_MEDIA_LINKS.facebook} target="_blank" rel="noopener noreferrer">
          <FacebookOutlined style={SocialMediaIcon} />
        </a>
      </Col>
      <Col>
        <a href={SOCIAL_MEDIA_LINKS.instagram} target="_blank" rel="noopener noreferrer">
          <InstagramOutlined style={SocialMediaIcon}/>
        </a>
      </Col>
    </Row>
  );
};

export default SocialMedia;
