import styled from 'styled-components';


const ContainerFlex = styled.section`
  display: flex;
  flex-flow:${({row}) => row ? 'row' : 'column'};
  ${({width}) => width && `width: ${width}`};
  ${({flexWrap}) => flexWrap && `flex-wrap: wrap`};
  margin:${({margin}) => margin ? margin : '0 auto'};
  ${({justifyContent}) => justifyContent && `justify-content: ${justifyContent};`}
  ${({main}) => main && 'padding-top: 2em; width: 90%;'}
  ${({borderTop}) => borderTop && 'border-top: 1px solid #bfbfbf;'}

  @media (max-width: 768px){
    flex-flow:${({row}) => row ? 'column' : 'row'};
    ${({columnMobile}) => columnMobile && `flex-flow: column`};
    ${({rowMobile}) => rowMobile && `flex-flow: row`}
  }
`;

const Header  = styled.header`
  width: 100%;
  background: #333;
  padding: 1em;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #fff;
  text-align: center;
`;

const TitleSpan = styled.span`
  color: #d5560d;
`;

const Button = styled.button`
  background:${({background}) => background ? '#ff5501' : '#666666'};
  width: 33%;
  height: 60px;
  apperance: none;
  text-transform: uppercase;
  font-size: 1.266em;
  color: #fff;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 15%;
  margin-right: 1em;
  @media (max-width: 768px){
    width: 100%;
  }
`;

const ContainerText =  styled.div`
    width: 83%;
`;

const TitleText =  styled.h3`
  font-size: 1.6em;
  font-weight: 600;
  color: #363636;
  margin-bottom: 0;
`;

const Text = styled.p`
  font-size: 1em;
  color: #aeaeae;
  margin: 0.5em 0;
`;

const SpanBy = styled.span`
  color: #363636;
`;

const SpanName = styled.span`
  color: #ff5501;
`;

const Link = styled.a`
  color: #363636;
  font-size: 1em;
`

const ButtonSeeMore = styled.button`
  width: 100%
  height: 60px;
  background: #666666;
  font-size: 1.3em;
  text-align: center;
  apperance: none;
  color: #fff;
  border-radius: 5px;
  font-weight: bolder;
`;

const TextLoading = styled.p`
  font-size: 2em;
  color: #ff5501;
  text-align: center;
  margin: 0 auto;
  font-weight: bolder;
`;


export { 
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
    TextLoading 
};