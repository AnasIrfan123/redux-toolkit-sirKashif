import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Router from './config/router'
import Header from './components/Header'
import { store, persistor } from './store'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Header />
          <Router />
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App;

/*
  SPA vs MPA
  SPA: Single Page Application
  MPA: Multi Page Application

*/