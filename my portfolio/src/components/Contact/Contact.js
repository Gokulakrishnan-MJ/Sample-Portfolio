import React from 'react'
import "./Contact.css"
import { Element } from 'react-scroll'
import { IconButton } from '@material-ui/core'
import { Instagram, LinkedIn } from '@material-ui/icons'


const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contactCont'> 
            <p>
                Email : <span>gokulakrishnan.m3009@gmail.com</span>
            </p>
            <p>GitHub: <span>https://github.com/techygokul</span></p>
            <div className='contactIcons'>
                <a href='https://www.linkedin.com/in/gokulakrishnan-murugan-aa32291b6' target="_blank">
                    <IconButton>
                        <LinkedIn/>
                    </IconButton>
                </a>
                <a href='https://instagram.com/will_be_in?igshid=YmMyMTA2M2Y=' target="_blank">
                    <IconButton>
                        <Instagram/>
                    </IconButton>
                </a>

            </div>
        </div>
    </Element>
  )
}

export default Contact
