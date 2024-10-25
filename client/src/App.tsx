import { ProtectedRoute } from './components/ProtectedRoutes'
import { Routes, Route } from 'react-router-dom'
import AspMenAntPage from './pages/ApsMesAnt'
import SugeridosPage from './pages/Sugeridos'
import { useAuth } from './auth/AuthContext'
import { useEffect, useState } from 'react'
import HistCatPage from './pages/HistCate'
import LoginPage from './pages/LoginForm'
import ResumenPage from './pages/Resumen'
import AspMesPage from './pages/AspMes'
import AspDiaPage from './pages/ApsDia'
import { PDVINFO } from './types/Pdv'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_URL_API

// TODO: a futuro debemos aplicar lazy load para la carga de las paginas ya que el bundle es muy grande
function App () {
  const { user, login, logout } = useAuth()
  const [pdv, setPdv] = useState<PDVINFO>({ CATEGORIA: '', VERSION: '', DIRECCION: '', NOMBRE: '', SUPERVISOR: '', ZONA: '' })

  useEffect(() => {
    const token = localStorage.getItem('tokenMetas')
    if (token !== null) {
      login(token)
    } else {
      logout()
      console.log('No Token')
    }
  }, [])

  useEffect(() => {
    if (user.codigo !== 0) {
      axios.post('/infopdv', { codigo: user.codigo })
        .then((res) => {
          setPdv(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [user.codigo])

  return (
    <>
      <Routes>
        <Route path='/login' index element={<LoginPage />} />
        <Route element={<ProtectedRoute isAllowed={!!user} pdvInfo={pdv} />}>
          <Route path='/' element={<ResumenPage nombres={user.nombres} codigo={user.codigo} username={user.username} catergoria={pdv.CATEGORIA} version={pdv.VERSION} />} />
          <Route path='/aspiracionDia' element={<AspDiaPage codigo={user.codigo} zona={pdv.ZONA} />} />
          <Route path='/aspiracionMesActual' element={<AspMesPage codigo={user.codigo} zona={pdv.ZONA} />} />
          <Route path='/aspiracionMesAnterior' element={<AspMenAntPage codigo={user.codigo} zona={pdv.ZONA} />} />
          <Route path='/sugeridos' element={<SugeridosPage zone={pdv.ZONA} user={user} />} />
          <Route path='/historial' element={<HistCatPage codigo={user.codigo} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
