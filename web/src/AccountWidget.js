// Copyright 2020 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import {Avatar, Col, Progress, Row, Space, Statistic, Switch} from "antd";
import { UserOutlined, FormOutlined } from '@ant-design/icons';

class AccountWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div style={{backgroundColor: "white"}}>
        <div className="theme-cell">
          <Space>
            <Avatar shape="square" size={48} icon={<UserOutlined />} />
            username
            <Switch style={{marginLeft: "60px"}} checkedChildren="night" unCheckedChildren="day" defaultChecked={false} />
          </Space>
        </div>
        <div className="theme-cell">
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="Board" value={0} />
            </Col>
            <Col span={8}>
              <Statistic title="Topic" value={0} />
            </Col>
            <Col span={8}>
              <Statistic title="Watch" value={0} />
            </Col>
          </Row>
        </div>
        <div className="theme-cell">
          <Progress percent={30} showInfo={false} />
        </div>
        <div className="theme-cell">
          <FormOutlined /> Create Post
        </div>
        <div className="theme-cell">
          0 Unread
        </div>
      </div>
    );
  }

}

export default AccountWidget;