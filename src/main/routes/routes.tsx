import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { paths } from '~/main/config'

import {
  Dashboard
} from '~/presentation/pages'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${paths.dashboard}`} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}