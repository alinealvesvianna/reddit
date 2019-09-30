import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchRedditInitial, fetchSeeMore, fetchSeeHot, fetchSeeNew, fetchSeeRising } from "../actions";
import moment from 'moment'
import logo from '../logo.svg';
import '../App.css';

const App = (props) =>  {

  const { 
    fetchRedditInitial, 
    news, 
    fetchSeeMore, 
    nextPage, 
    fetchSeeHot, 
    fetchSeeNew, 
    fetchSeeRising,
    typeSeeMore,
  } = props;

  useEffect(() => {
    fetchRedditInitial('.json')
  }, [])

  const seeMore = () => {
    if(typeSeeMore === ''){
      fetchSeeMore(`.json?after=${nextPage}`)
    } else if(typeSeeMore === 'hot'){
      fetchSeeMore(`/hot.json?after=${nextPage}`)
    } else if(typeSeeMore === 'new'){
      fetchSeeMore(`/new.json?after=${nextPage}`)
    } else if(typeSeeMore === 'rising'){
      fetchSeeMore(`/rising.json?after=${nextPage}`)
    }
  }

  const seeHot = () => {
    fetchSeeHot('/hot.json', 'hot')
  }

  const seeNews = () => {
    fetchSeeNew('/new.json', 'new')
  }

  const seeRising = () => {
    fetchSeeRising('/rising.json', 'rising')
  }

  return(
    <section>
      <button onClick={seeHot}>hot</button>
      <button onClick={seeNews}>news</button>
      <button onClick={seeRising}>rising</button>
      {
        news && news.map(item => {
          return(
            <div>
              <img src={item.data.thumbnail !== "self" ? item.data.thumbnail : "https://via.placeholder.com/150"} />
              <h3>{item.data.title}</h3>
              <p>submitted {moment.unix(item.data.created_utc,'HH').fromNow()} by <span>{item.data.author_fullname}</span></p>
              <a href={item.data.url}>{item.data.url}</a>
            </div>
          )
        })
      }
      {
        nextPage !== null && (
          <button onClick={seeMore}>see more</button>
        )
      }
    </section>
  )
}

const mapStateToProps = store => ({
  news: store.news,
  isLoadingData: store.isLoadingData,
  nextPage: store.nextPage,
  typeSeeMore: store.typeSeeMore,
});

export default connect(
  mapStateToProps,
  {
    fetchRedditInitial,
    fetchSeeMore,
    fetchSeeHot,
    fetchSeeNew,
    fetchSeeRising,
  }
)(App);
