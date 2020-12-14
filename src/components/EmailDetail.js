import React from 'react';
import { useParams } from 'react-router-dom'

const EmailDetail = ({ data }) => {
  const { emailId } = useParams;

  const email = data.find(e => e.id === Number(EmailId));

  const emailinfo = email ? 
  (
    <div>
      <p>{ email.subject }</p>
      <p>{ email.sender }</p>
      <p>{ email.message }</p>
    </div>
  ): "Not Email content"

    return (
      <>
        { emailId }
      </>
    )
}

 export default EmailDetail;