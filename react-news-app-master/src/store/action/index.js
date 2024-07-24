import { endpointSearch } from "../../config/api";
import axios from "axios";
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, NAVBAR_COLLAPSE } from "./actionTypes";

const fetchDataRequest = () => ({
  type: SEARCH_REQUEST,
});

const fetchDataSuccess = (result, query) => ({
  type: SEARCH_SUCCESS,
  payload: {
    articles: result,
    query: query,
  },
});

const fetchDataFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: error,
});

export const NAVBAR_COLLAPSE_function = (isCollapsed) => {
  return {
  type: NAVBAR_COLLAPSE,
  payload: isCollapsed,
}
};

export const searchArticle = (query) => async (dispatch) => {
  try {
    dispatch(fetchDataRequest());
    const response = await axios.get(endpointSearch(query));
    const result = response.data["results"];
    dispatch(fetchDataSuccess(result, query));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};
