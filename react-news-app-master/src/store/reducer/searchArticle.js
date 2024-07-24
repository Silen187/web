import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, NAVBAR_COLLAPSE } from "../action/actionTypes";

const initialState = {
  articles: [],
  query: "",
  loading: false,
  isExpanded: false,
};

const searchArticle = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles,
        query: action.payload.query,
        loading: false,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NAVBAR_COLLAPSE:
      return {
        ...state,
        isExpanded: !action.payload,
      };
    default:
      return state;
  }
};

export default searchArticle;
