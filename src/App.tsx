import './App.css'
import ApartmentsView from './components/ApartmentsView'
import InterfaceStatusProvider from './components/InterfaceStatusProvider'

function App() {
  return (
    <>
      <InterfaceStatusProvider>
        <ApartmentsView />
      </InterfaceStatusProvider>
    </>
  )
}

export default App
