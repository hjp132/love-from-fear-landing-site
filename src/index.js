import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        {/* <h1 style={{ margin: 0, padding: 0, fontSize: '15em', fontWeight: 500, letterSpacing: '-0.05em' }}>hello</h1> */}

        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <div style={{background: '#0b0b0bf0', backdropFilter: "blur(16px)", borderWidth: "2px", borderStyle: 'solid', paddingLeft:'6px'}}>
            <input type="email" id="email" placeholder='Subscribe' autoCorrect='off' autoCapitalize='off' value={""}
            style={{background: 'transparent', height: 30, padding: 0, border: 'none', outline: 'none'}}></input>
          </div>
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
