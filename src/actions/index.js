import { SET_REDDIT_INITIAL, API, FETCH_REDDIT_INITIAL, FETCH_SEE_MORE, SET_SEE_MORE } from "./types";


export function fetchRedditInitial(queryString) {
    return apiAction({
      queryString,
      onSuccess: setRedditInitial,
      onFailure: () => console.log("Error occured loading articles"),
      label: FETCH_REDDIT_INITIAL
    });
  }
  
  function setRedditInitial(data) {
    return {
      type: SET_REDDIT_INITIAL,
      payload: data
    };
  }


export function fetchSeeMore(queryString) {
  return apiAction({
    queryString,
    onSuccess: setSeeMore,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_SEE_MORE
  });
}

function setSeeMore(data) {
  return {
    type: SET_SEE_MORE,
    payload: data
  };
}


function apiAction({
  queryString,
  parameter,
  url = `${process.env.REACT_APP_BASE_URL}${queryString}`,
  method = "GET",
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      parameter,
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}