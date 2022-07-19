import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Routes from './Routes'
const App = () => {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App
