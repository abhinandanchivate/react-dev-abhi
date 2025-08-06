import React from 'react'
import {  Routes, Route} from 'react-router-dom'
import Landing from './core/components/layouts/Landing'
import AuthRouter from './auth/router/'
/// routers are responsible for defining the routes of the application but they are used to render the components at the runtime
const RootRouter = () => {
  return (
    <>
<Routes>
    <Route path='/' element={<Landing/>}></Route>
    <Route path='/auth/*' element={<AuthRouter></AuthRouter>}></Route>

</Routes>
      
    </>
  )
}

export default RootRouter
