import ApartmentViewer from './apartments/pages/ApartmentPage'
import ApplicationThemeProvider from './shared/context/ApplicationThemeProvider'

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
