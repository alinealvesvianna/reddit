import { 
  SET_REDDIT_INITIAL, 
  API, 
  FETCH_REDDIT_INITIAL, 
  FETCH_SEE_MORE, 
  SET_SEE_MORE, 
  FETCH_SEE_HOT, 
  SET_SEE_HOT, 
  FETCH_SEE_NEW, 
  SET_SEE_NEW, 
  FETCH_SEE_RISING, 
  SET_SEE_RISING 
} from "./types";


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

export function fetchSeeHot(queryString, parameter) {
  return apiAction({
    queryString,
    parameter,
    onSuccess: setSeeHot,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_SEE_HOT
  });
}

function setSeeHot(data, parameter) {
  return {
    type: SET_SEE_HOT,
    payload: data,
    parameter,
  };
}

export function fetchSeeNew(queryString, parameter) {
  return apiAction({
    queryString,
    parameter,
    onSuccess: setSeeNew,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_SEE_NEW
  });
}

function setSeeNew(data, parameter) {
  return {
    type: SET_SEE_NEW,
    payload: data,
    parameter,
  };
}

export function fetchSeeRising(queryString, parameter) {
  return apiAction({
    queryString,
    parameter,
    onSuccess: setSeeRising,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_SEE_RISING
  });
}

function setSeeRising(data, parameter) {
  return {
    type: SET_SEE_RISING,
    payload: data,
    parameter,
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