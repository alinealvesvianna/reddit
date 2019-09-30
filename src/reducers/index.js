import {
    SET_REDDIT_INITIAL,
    API_START,
    API_END,
    FETCH_REDDIT_INITIAL,
    FETCH_SEE_MORE,
    SET_SEE_MORE,
  } from "../actions/types";
  
  export default function(state = {
      news: [],
      isLoadingData: false,
      nextPage: '',
  }, action) {
    console.log("action type => ", action.type);
    switch (action.type) {
      case SET_REDDIT_INITIAL:
        return { 
            news: action.payload.data.children,
            nextPage: action.payload.data.after
        };
      case SET_SEE_MORE:
        return { 
            ...state,
            news: state.news.concat(action.payload.data.children),
            nextPage: action.payload.data.after
        };        
      case API_START:
        if (action.payload === FETCH_REDDIT_INITIAL || FETCH_SEE_MORE) {
          return {
            ...state,
            isLoadingData: true
          };
        }
        break;
      case API_END:
        if (action.payload === FETCH_REDDIT_INITIAL || FETCH_SEE_MORE) {
          return {
            ...state,
            isLoadingData: false
          };
        }
        break;
      default:
        return state;
    }
  }