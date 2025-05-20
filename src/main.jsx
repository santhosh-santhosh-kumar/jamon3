
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store.jsx';


createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App/>}/>
      </Routes>
      </BrowserRouter>

    </Provider>
)
