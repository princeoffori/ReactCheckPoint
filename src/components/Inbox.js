import {Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import '../App.css';
import EmailDetail from './EmailDetail';

const Wrap = styled.div`
    margin: 10px;
    border-width: 10px;
    border-color:black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Content = styled.p`
    margin-left: 20px;
`;



const Inbox = ({ emaillist }) => {
   const match = useRouteMatch();


    const allList = emaillist.map(email => {
        return(
            <Wrap>
            <Content>
                Subject: <Link to={`${ match.url }/${email.id}`}> {email.subject}</Link>
            </Content>
            <Content>Sender: {email.sender}</Content>
            </Wrap>
        )
    })
    
    
      return (
        <section>
            <Wrap>
                {
                    emaillist.length > 0 ? allList : "No Emails"
                }
            </Wrap>
            <Switch>
                <Route path={`${match.url}/:emailId`}>
                    <EmailDetail data={emaillist} />
                </Route>
           </Switch>
        </section>)
   }

export default Inbox;