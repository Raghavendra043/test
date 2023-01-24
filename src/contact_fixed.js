import './assets/contact_fixed.css'

import line from './assets/line.svg'
import git from './assets/git.svg'
import insta from './assets/insta.svg'
import linkdn from './assets/link.svg'
import mail from './assets/mail.svg'
import terminal from './assets/terminal.svg'

export default function Contact_fixed(){

    return(
        <>
        <div className='side_contact'>
            <img src={insta} className="insta"></img> <br/><br/>
            <img src={git} className="git" ></img> <br/><br/>
            <img src={linkdn} className="link" ></img> <br/><br/>
            <img src={mail} className="mail" ></img> <br/><br/>
            <img src={line} className="line" ></img>
        </div>
        <img src={terminal} className = "terminal" ></img>
        </>
    );
}