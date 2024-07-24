import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { v4 as uuidv4 } from "uuid";
import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import NullImage from "../../components/Images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { searchArticle } from "../../store/action";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { noFound, searching } from "../../config/config";
import { Container, Header, card } from "./index";
import "../News/News.css";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [totalArticles, setTotalArticle] = useState(null);
  const { articles, loading } = useSelector((state) => state.search);
  const { query } = useParams();
  const [pageNumber, setPageNumber] = useState(0); // Số trang hiện tại
  const itemsPerPage = 32; // Số mục trên mỗi trang
  const { isExpanded } = useSelector(state => state.search);

  const dispatch = useDispatch();

  useEffect(() => {   
    dispatch(searchArticle(query));
  }, [query, dispatch]);

  useEffect(() => {
    setSearchQuery(query);
    setTotalArticle(articles.length);
  }, [query, articles]);

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  document.title =
      loading
      ? searching
      : `Tuyển dụng, tìm thấy ${articles.length} kết quả}`;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header isExpanded = {isExpanded}>
            {totalArticles === 0 ? noFound : `Tìm kiếm cho ${capitaLize(searchQuery)}`}
          </Header>
          <Container>
            <Row>
              {articles?.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
              .map((element) => {
                return (
                  <Col sm={12} md={6} lg={4} xl={3} style={card} key={uuidv4()}>
                    <NewsItem
                      title={element.TenCV}
                      company={element.CongTy}
                      TinhThanh ={element.TinhThanh}
                      MucLuong = {element.Luong}
                      LoaiHinh = {element.LoaiHinh}
                      HanNopCV={element.HanNopCV}
                      KinhNghiem = {element.KinhNghiem}
                      Web={element.Web}
                      imageUrl={
                        element.Image === "" ? NullImage : element.Image
                      }
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

export default Search;
