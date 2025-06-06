
import './App.css'
import reropingLogo from './assets/reroping.svg'
import EmailForm from './EmailForm'

function App() {

  return (
    <div className="home">
      <img src={reropingLogo} alt="Reroping Logo" />
      <div className="details">
        <div>
        Created for the 2025 SF Design Week theme "Reform", the reroping piece explores transformation through craft and context, highlighting the potential of material to be reimagined and redefined.
        </div>
        <div>Designed and curated by Ana Illanes in collaboration with women artisans in Chile. Handwoven using reclaimed fishing rope.
        </div>
        <EmailForm/>
      </div>
    </div>
  )
}

export default App
