import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Overlay() {
  return (
    <div className='overlay'>
      <div className='overlay-container'>

        <div className='logo'>

        </div>
        <div className='border email-container'>
          <input className='input input-arrow' placeholder='subscribe' type='email' id='email'></input>
          <span><FontAwesomeIcon icon={faArrowRight} /></span>
        </div>

        <div className='border socials'>
          <a className='social-link'>
            <span className='social-link'><FontAwesomeIcon icon={faFacebook} /></span>
          </a>

          <a className='social-link'>
            <span className='social-link'><FontAwesomeIcon icon={faInstagram} /></span>
          </a>

          <a className='social-link'>
            <span className='social-link'><FontAwesomeIcon icon={faTwitter}/></span>
          </a>

          <a className='social-link'>
            <span className='social-link'><FontAwesomeIcon icon={faTiktok}/></span>
          </a>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <>
    <App /> <Overlay />
  </>,
  document.getElementById('root')
)
