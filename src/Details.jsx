import React from "react";
import { Typography } from "antd";
import { CarOutlined } from "@ant-design/icons";
import "./Details.css"

const { Text, Title } = Typography;

const Details = () => {
  return (
    <div className="main-details-div">
      <div style={{ flex: 1, textAlign: "center" }}>
        <CarOutlined className="mask" style={{ fontSize: "100px" }} />
      </div>
      <div className="sub-details-div">
        <Title level={5} className="text-spacing details">
          Details
        </Title>
        <Text className="text-spacing Type-Prime-Mover">
          <span class="text-style-1">Type:</span>Prime Mover
        </Text>
        <br />
        <Text class="text-spacing Model-Year-2013">
          Model Year:<span class="text-style-1">2013</span>
        </Text>
        <br />
        <Text className=" text-spacing Vehicle-Make-Volvo">
          Vehicle Make:<span class="text-style-1">Volvo</span>
        </Text>
        <br />
        <Text className="text-spacing Linkage">
          Linkage:<span class="text-style-1">Volvo</span>
        </Text>
      </div>
    </div>
  );
};

export default Details;
