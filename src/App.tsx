import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Auth from './components/Auth'
import Main from './components/Main'
const App = () => {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Main />}></Route>
              <Route path="/auth" element={<Auth />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App
