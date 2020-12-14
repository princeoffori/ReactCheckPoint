import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import React from 'react';
//import Email from './components/Inbox';
import styled from 'styled-components';
//import EmailDetail from './components/EmailDetail';
import Home from './components/Home';
import Inbox from './components/Inbox'


const PageWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-evenly;
  margin: 10px;
`;

const Wrap = styled.div`
    margin: 10px;
    border-width: 10px;
    border-color:black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Content = styled.p`
    margin-left: 20px;
`;


class App extends React.Component{

  constructor(emails){
    super();
    this.state ={
      emails: []
    }
  }

  //GET
  async componentDidMount(){
    const reponse = await fetch('http://localhost:3001/emails/')
    const data = await reponse.json();
    this.setState({ emails: data });
  }

  render(){
    return (
      <Router>
        <section>
          <h1 className='App'>INBOX</h1>
          <Wrap>
            <br />
            <Content><Link to='/'>Home</Link></Content>
            <Content><Link to='/Inbox'>Inbox</Link></Content>
            <br />
          </Wrap>   
        </section>

        <Switch>
          <Route exact path='/'>
              <Home />
            </Route>
          <Route path='/Inbox'>
            <Inbox emaillist={this.state.emails} />
          </Route>
        </Switch>
    </Router>
    );
  }
}

export default App;
