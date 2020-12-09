

import React from 'react';
import styled from 'styled-components'
import '../App.css';
// import EmailDetail from './EmailDetail'

const Wrap = styled.div`
    margin: 10px;
    border-width: 10px;
    border-color:black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Content = styled.p`
    margin-left: 20px;
`;

class Email extends React.Component{
    constructor(){
        super();
        this.state = {
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
            <section>
                {this.state.emails.map(elemets => {
                    return <Wrap>
                        <br />
                        <Content>Subject:{elemets.subject}</Content>
                        <Content>Sender: {elemets.sender}</Content>
                        <br />
                    </Wrap>
                })
                }
            </section>
      )
    }
}

export default Email;