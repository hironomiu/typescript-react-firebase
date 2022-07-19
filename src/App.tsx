import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Auth from './components/Auth'
import Main from './components/Main'
import RealTimeDatabase from './components/RealTimeDatabase'
import Firestore from './components/Firestore'
import Home from './components/Home'
const App = () => {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Main />}>
                <Route path="/" element={<Home />}></Route>
                <Route
                  path="/realtimedatabase"
                  element={<RealTimeDatabase />}
                ></Route>
                <Route path="/firestore" element={<Firestore />}></Route>
              </Route>
              <Route path="/auth" element={<Auth />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App
