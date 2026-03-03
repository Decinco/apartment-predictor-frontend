import ApartmentViewer from './components/ApartmentViewer'
import ApplicationThemeProvider from './context/ApplicationThemeProvider'

function App() {
  return (
    <>
        <ApplicationThemeProvider>
          <ApartmentViewer />
        </ApplicationThemeProvider>
    </>
  )
}

export default App
