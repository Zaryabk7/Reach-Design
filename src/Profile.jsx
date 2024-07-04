import React from "react";
import ReactDOM from "react-dom/client";
import { Flex, Typography, Rate, Image, Progress, Avatar, Space } from "antd";
import {
  CalendarOutlined,
  PhoneFilled,
  AimOutlined,
  LineOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./ProfileBox.css";
import Category from "./Category";
import Statistics from "./Statistics";
import Details from "./Details";

const { Text, Link, Title } = Typography;

const ProfileBox = () => {
  return (
    <>
      <div className="profileBox">
        <div
          className="avatar-div"
          
        >
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
        <Text
        className="text-div"
        >
          Muhammad Ahmed
        </Text>
        <Rate
          style={{ marginLeft: "2px", marginTop: "20px" }}
          allowHalf
          defaultValue={2.5}
        />
        <div
        className="content-div"

        >
          <CalendarOutlined className="calendar" />
          <Text className="gen">Date of Birth</Text>
          <Text className="date">24 June, 2014</Text>

          <CalendarOutlined className="calendar" />
          <Text className="gen">Nationality</Text>
          <Text className="date">03132222</Text>

          <PhoneFilled className="calendar" />
          <Text className="gen">Phone</Text>
          <Text className="date">Rome</Text>

          <AimOutlined className="calendar" />
          <Text className="gen">Current City</Text>
          <Text className="date">Oman</Text>
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
