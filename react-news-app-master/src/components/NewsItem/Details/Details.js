import React from "react";
import PropTypes from "prop-types";
import { summary, newsChannel, lastUpdate } from "../../../config/config";
import "./Details.css";

function Details(props) {
  const { channel, HanNopCV } = props;

  return (
    <details className="details">
      <summary className="summary">{summary}</summary>
      <p className="channel">
        <span>Trang đăng: </span>
        {newsChannel(channel)}
      </p>
      <p className="published">
        <span>Hạn nộp CV: </span>
        {lastUpdate(HanNopCV)}
      </p>
    </details>
  );
}

Details.propTypes = {
  channel: PropTypes.string,
  HanNopCV: PropTypes.string,
};

export default Details;
