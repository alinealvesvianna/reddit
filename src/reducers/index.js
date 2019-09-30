import {
    SET_REDDIT_INITIAL,
    API_START,
    API_END,
    FETCH_REDDIT_INITIAL,
    FETCH_SEE_MORE,
    SET_SEE_MORE,
    FETCH_SEE_HOT, 
    SET_SEE_HOT,
    FETCH_SEE_NEW, 
    SET_SEE_NEW,
    FETCH_SEE_RISING, 
    SET_SEE_RISING,
  } from "../actions/types";
  
  export default function(state = {
      news: [],
      isLoadingData: false,
      nextPage: '',
      typeSeeMore: '',
  }, action) {
    console.log("action type => ", action.type);
    switch (action.type) {
      case SET_REDDIT_INITIAL:
        return { 
            news: action.payload.data.children,
            nextPage: action.payload.data.after,
            typeSeeMore: '',
        };
      case SET_SEE_MORE:
        return { 
            ...state,
            news: state.news.concat(action.payload.data.children),
            nextPage: action.payload.data.after
        };
      case SET_SEE_HOT:
        return { 
            ...state,
            news: action.payload.data.children,
            nextPage: action.payload.data.after,
            typeSeeMore: action.parameter,
        }; 
      case SET_SEE_NEW:
        return { 
            ...state,
            news: action.payload.data.children,
            nextPage: action.payload.data.after,
            typeSeeMore: action.parameter,
        }; 
      case SET_SEE_RISING:
        return { 
            ...state,
            news: action.payload.data.children,
            nextPage: action.payload.data.after,
            typeSeeMore: action.parameter,
        };                           
      case API_START:
        if (action.payload === FETCH_REDDIT_INITIAL || FETCH_SEE_MORE || FETCH_SEE_HOT || FETCH_SEE_NEW || FETCH_SEE_RISING) {
          return {
            ...state,
            isLoadingData: true
          };
        }
        break;
      case API_END:
        if (action.payload === FETCH_REDDIT_INITIAL || FETCH_SEE_MORE || FETCH_SEE_HOT || FETCH_SEE_NEW || FETCH_SEE_RISING) {
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