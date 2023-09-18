import React from 'react'
import { Link } from "react-router-dom";
const Contact = () => {
  return (
<div className='Contactus-wrapper'>
<Link to="/" id="contact" className="contactUs">
    <a href="mailto:Contact@zwrtnws.nl">Contact@zwrtnws.nl</a>
</Link>
</div>
  )
}

export default Contact