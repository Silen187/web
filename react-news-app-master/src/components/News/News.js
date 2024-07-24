import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import axios from "axios";
import "./News.css";
import NullImage from "../../components/Images/logo.png";
import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import { v4 as uuidv4 } from "uuid";
import { Col, Row } from "react-bootstrap";
import { header } from "../../config/config";
import { endpointPath } from "../../config/api";
import { Container, Header, card } from "./index";
import { useSelector } from "react-redux";

function News(props) {
  const { official, child } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0); // Số trang hiện tại
  const itemsPerPage = 30; // Số mục trên mỗi trang
  const { isExpanded } = useSelector(state => state.search);


  const capitaLize = (string) => {
    const words = string.split("-");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
};

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

  const title = capitaLize(child);
  document.title = `${capitaLize(title)} - Tuyển dụng`;

  const updatenews = async () => {
    try {
      const response = await axios.get(endpointPath(official, child));
      setLoading(true);
      const parsedData = response.data;
      setArticles(parsedData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updatenews();
    // eslint-disable-next-line
  }, []);


  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header isExpanded={isExpanded} >{header}</Header>
          <Container>
            <Row>
            <Col xl={6} md = {12} sm = {12} lg = {12}>
            <div className="iframe-container">
              <h2>Xu hướng các ngành gần đây</h2>
              <iframe
                className="iframe-content"
                title="PBI"
                src="https://app.powerbi.com/view?r=eyJrIjoiZGIxZTk2NmUtN2E0ZC00NjRlLTgxOTItOGUxMWI4MWY4ZTcwIiwidCI6IjJmODVkYzc0LWI2YjQtNDU4NC1iZWVlLWNjZGE3MTQ0NDk3MCIsImMiOjZ9"
              ></iframe>
            </div>
            </Col>
              {articles
              .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
              .map((element) => {
                return (
            <Col sm={12} md={6} lg={4} xl={3} style={card} key={uuidv4()}>
                <NewsItem
                  title={element.TenCV}
                  company={element.CongTy}
                  TinhThanh={element.TinhThanh}
                  MucLuong={element.Luong}
                  LoaiHinh={element.LoaiHinh}
                  HanNopCV={element.HanNopCV}
                  KinhNghiem={element.KinhNghiem}
                  Web={element.Web}
                  imageUrl={element.Image === "" ? NullImage : element.Image}
                  urlNews={element.Link}
                />
            </Col>
                );
              })}
            </Row>
          </Container>
          <ReactPaginate
            previousLabel={'Trang trước'}
            nextLabel={'Trang sau'}
            pageCount={Math.ceil(articles.length / itemsPerPage)}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </>
      )}
    </>
  );
}

export default News;
