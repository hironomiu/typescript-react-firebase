import { useRoutes } from 'react-router-dom'
import { routePath } from './routing'

const Routes = () => {
  const element = useRoutes(routePath)

  return <>{element}</>
}

export default Routes
