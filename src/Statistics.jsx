import React from "react";
import { Typography } from "antd";
import "./ProfileBox.css"


const { Text, Title } = Typography;

const statisticsData = [
  { value: 6556, label: "Total Shipments", icon: "successful_deliveries.png" },
  {
    value: 5456,
    label: "Successful Deliveries",
    icon: "successful_deliveries.png",
  },
  {
    value: 120,
    label: "Rejected Deliveries",
    icon: "rejected_deliveries.png",
  },
];

const Statistics = () => {
  return (
    <div className="stats-container">
      {statisticsData.map((stat, index) => (
        <div
          key={index}
          className="main-stat-div"
        >
          <div style={{ flex: 2 }}>
            <Title level={3}>{stat.value}</Title>

            <Text>{stat.label}</Text>
          </div>
          <img
            src={require(`./${stat.icon}`)} // Import using require
            alt={stat.label + " Icon"}
            className="img-div"
          />
        </div>
      ))}
    </div>
  );
};

export default Statistics;
