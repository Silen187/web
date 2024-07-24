import React from "react";
import { Button, Card } from "react-bootstrap";
import Details from "./Details/Details";
import { ReactComponent as ArrowIcon } from '../Images/ArrowIcon.svg'; 
import "./NewsItem.css"; 

function NewsItem(props) {
  const { imageUrl, company, title, Web, HanNopCV, urlNews,  TinhThanh, MucLuong, LoaiHinh, KinhNghiem } =
    props;

  return (
    <Card className="card">
      <Card.Img className="card-img" variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="card-description">{company}</Card.Text>
        <Card.Text className = "card-description">Tỉnh thành: {TinhThanh}</Card.Text>
        <Card.Text className = "card-description">Mức lương: {MucLuong}</Card.Text>
        <Card.Text className = "card-description">Loại hình: {LoaiHinh}</Card.Text>
        <Card.Text className = "card-description">Kinh nghiệm: {KinhNghiem}</Card.Text>
        <Details channel={Web} published={HanNopCV} />
        <Button
          className="card-btn"
          href={urlNews}
          target="_blank"
        >
          Xem thêm <ArrowIcon className="arrow-icon" />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NewsItem;
