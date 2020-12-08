import './App.css';
// import styled from 'styled-components';
import React from 'react';
import Email from './components/EmailPage';
import styled from 'styled-components';


const PageWrapper = styled.div`
  display:flex;
  flex-direction:row;
`;


class App extends React.Component{

  render(){
    return (
    <PageWrapper>
      <Email />
    </PageWrapper>
    );
  }
}

export default App;
