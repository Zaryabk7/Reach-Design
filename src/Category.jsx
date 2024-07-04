import React from "react";
import { Tabs } from "antd";
import "./Category.css";
const { TabPane } = Tabs;

const CategoryTabs = () => {
  return (
    <div
      style={{
        marginLeft: "24%",
        
        width:'auto'
      }}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="GENERAL" key="1"></TabPane>
        <TabPane tab="RIGID TRUCK" key="2"></TabPane>
        <TabPane tab="PRIME MOVER" key="3"></TabPane>
        <TabPane tab="TRAILER" key="4"></TabPane>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
