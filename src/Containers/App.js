import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { 
  fetchRedditInitial, 
  fetchSeeMore, 
  fetchSeeHot, 
  fetchSeeNew, 
  fetchSeeRising 
} from "../actions";
import moment from 'moment'
import '../App.css';
import { 
  ContainerFlex, 
  Header, 
  Title, 
  TitleSpan, 
  Button, 
  Image, 
  ContainerText, 
  TitleText, 
  Text, 
  SpanBy, 
  SpanName, 
  Link, 
  ButtonSeeMore,
  TextLoading, 
} from './styled';

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
    isLoadingData
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
    <Fragment>
      <Header>
        <Title>
          REACT
          <TitleSpan>JS</TitleSpan>
        </Title>
      </Header>
      {
        isLoadingData && (
          <ContainerFlex flexWrap main row rowMobile justifyContent="space-between">
            <TextLoading>Loading...</TextLoading>
          </ContainerFlex>
        )
      }
      {
        !isLoadingData && (
          <ContainerFlex flexWrap width="50%" margin="2em auto 0" row rowMobile justifyContent="space-between">
            <Button 
              background={typeSeeMore === 'hot' ? true : false} 
              onClick={seeHot}>
              hot
            </Button>
            <Button 
              background={typeSeeMore === 'new' ? true : false} 
              onClick={seeNews}>
              news
            </Button>
            <Button 
              background={typeSeeMore === 'rising' ? true : false} 
              onClick={seeRising}>
              rising
            </Button>
          </ContainerFlex>  
        )
      }

        {
          news && news.map(item => {
            return(
              <ContainerFlex borderTop flexWrap main margin="2em auto 0" row justifyContent="space-between">
                <Image src={item.data.thumbnail !== "self" ? item.data.thumbnail : "https://via.placeholder.com/150"} />
                <ContainerText>
                  <TitleText>{item.data.title}</TitleText>
                  <Text>
                    submitted {moment.unix(item.data.created_utc,'HH').fromNow()} 
                    <SpanBy> by </SpanBy> 
                    <SpanName>{item.data.author_fullname}</SpanName>
                  </Text>
                  <Link href={item.data.url}>{item.data.url}</Link>
                </ContainerText>
              </ContainerFlex>
            )
          })
        }
        {
          nextPage !== null && (
            <ContainerFlex borderTop flexWrap main margin="2em auto" row justifyContent="space-between">
              <ButtonSeeMore onClick={seeMore}> + see more</ButtonSeeMore>
            </ContainerFlex>
          )
        }
    </Fragment>
  )
}

const mapStateToProps = store => ({
  news: store.news,
  isLoadingData: store.isLoadingData,
  nextPage: store.nextPage,
  typeSeeMore: store.typeSeeMore,
  isLoadingData: store.isLoadingData,
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
