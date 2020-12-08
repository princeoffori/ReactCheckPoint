import React from 'react';

class Email extends React.Component{
    constructor(){
        super();
        this.state = {
          emails: []
        }
      }
      
      //GET
      async componentDidMount(){
        const reponse = await fetch('http://localhost:3001/emails')
        const data = await reponse.json();
        //let correctJson = data.map((email, index) => ({...email, id: index}))
        this.setState({ emails: data });
      }
    
    
    render(){
        return (
        <section>
          {this.state.emails.map(elemets => {
              return <div>
                  <p>{elemets.sender}</p>
                  <p>{elemets.recipient}</p>
                  <p>{elemets.subject}</p>
                  <p>{elemets.message}</p>
                  <p>{elemets.date}</p>
              </div>
          })
          }
        </section>
      )
    }
}

export default Email;