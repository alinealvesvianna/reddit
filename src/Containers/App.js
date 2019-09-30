import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchRedditInitial, fetchSeeMore } from "../actions";
import moment from 'moment'
import logo from '../logo.svg';
import '../App.css';

const App = (props) =>  {

  const { fetchRedditInitial, news, fetchSeeMore, nextPage } = props;

  useEffect(() => {
    fetchRedditInitial('.json')
  }, [])

  const seeMore = () => {
    fetchSeeMore(`.json?after=${nextPage}`)
  }

  return(
    <section>
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
      <button onClick={seeMore}>see more</button>
    </section>
  )
}

const mapStateToProps = store => ({
  news: store.news,
  isLoadingData: store.isLoadingData,
  nextPage: store.nextPage,
});

export default connect(
  mapStateToProps,
  {
    fetchRedditInitial,
    fetchSeeMore,
  }
)(App);
