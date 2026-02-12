import './App.css'
import ApartmentViewer from './components/ApartmentViewer'
import InterfaceStatusProvider from './components/InterfaceStatusProvider'

function App() {
  return (
    <>
      <InterfaceStatusProvider>
        <ApartmentViewer />
      </InterfaceStatusProvider>
    </>
  )
}

export default App
