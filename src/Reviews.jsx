import React from "react";
import { Rate, Typography, Progress, Avatar } from "antd";
import "./ProfileBox.css";
import "./Reviews.css";
import { LineOutlined, UserOutlined } from "@ant-design/icons";
const { Text, Link, Title } = Typography;

const Reviews = () => {
  const data = [
    "5 Star",
    <Progress percent={80} />,

    "4 Star",
    <Progress percent={30} />,

    "3 Star",
    <Progress percent={30} />,

    "2 Star",
    <Progress percent={30} />,
  ];

  const reviewsData = [
    {
      name: "Ali Aufi",
      company: "Target OFS",
      review:
        "A really good carrier, good communication and kept me updated throughout.",
      rating: 4.8,
      avatar: <Avatar size={64} icon={<UserOutlined />} />,
    },
    {
      name: "Shihbad Jabri",
      company: "PDO",
      review:
        "A really good carrier, good communication and kept me updated throughout.",
      rating: 4.8,
      avatar: <Avatar size={64} icon={<UserOutlined />} />,
    },
    {
      name: "Mohammed",
      company: "IKEA",
      review:
        "A really good carrier, good communication and kept me updated throughout.",
      rating: 4.8,
      avatar: <Avatar size={64} icon={<UserOutlined />} />,
    },
  ];

  const ReviewBox = ({ name, company, review, rating, avatar }) => (
    <div
    className="main-review-div"
      
    >
      <div
      className="review-box-container"
      >
        {avatar}
        <div style={{ marginLeft: "15px" }}>
          <Title level={5} className="title-style">
            {name}
          </Title>
          <Text type="secondary">{company}</Text>
        </div>
      </div>
      <p>{review}</p>
      <div className="rate-div" >
        <Rate style={{}} disabled defaultValue={rating} />
        <Text style={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
          {rating}
        </Text>
      </div>
    </div>
  );

  return (
    <div className="display-div">
      <div className="display-div-container">
        <Title level={4}>Rating</Title>
        <div className="value">
          <Rate allowHalf defaultValue={2.5} />
          <Text style={{ marginLeft: "10px", fontSize: "16px" }}>
            2.5 out of 5 stars
          </Text>
        </div>

        <Title level={5}>4 OUT OF 5</Title>
        <div className="data-display-div">
          {data.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
      <div style={{ marginRight: "40px" }}>
        <Title level={4} style={{ marginLeft: "30px" }}>
          Reviews
        </Title>
        <div
          className="review-data-display"
          
        >
          {reviewsData.map((review, index) => (
            <ReviewBox key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews; 