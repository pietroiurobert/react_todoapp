import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/textContainer/TextContainer.tsx'
import BigContainer from './components/bigContainer/bigContainer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <App text="Pace Ocult, zi-le, Ian, zi-le
Vinde Ian kile
Bag patru pastile, diseară o ardem pe șmecherie
Fraierii să știe, să leșine, facem nebunie"/>

    <App text="Flexez, d-aia mă placi
În portofel, cash
În portofel, cash"/>

    <App text="Pace Azteca, pace Dani, pace gang-ului
Dau un gram, fac un ban, sunt copilu' dracului
Posedat de substanță, din cauza faptului
C-am văzut prea multe, viziunea Iadului"/>

    <BigContainer/>
  </React.StrictMode>,
)
