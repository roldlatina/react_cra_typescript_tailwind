import LoggerProvider from './context/LoggerContext'
import Router from './Router'

const App = () => {
  return (
    <div>
      <LoggerProvider>
        <Router />
      </LoggerProvider>
    </div>
  )
}

export default App
