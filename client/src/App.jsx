import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { getData, reloadData } from '../redux/dataSlice'
import Admin from './pages/Admin'
import { Toaster } from 'react-hot-toast'
import Login from './components/Admin/Login/Login'
import ForgotPassword from './components/Admin/Login/ForgotPassword'
import Verifyotp from './components/Admin/Login/VerifyOtp'
import ResetPassword from './components/Admin/Login/ResetPassword'

const App = () => {
  const { dataReload } = useSelector(state => state.data)
  const dispatch = useDispatch()

  async function fetchData() {
    try {
      const res = await axios.get("https://Portfolio-MERN/getdata")
      dispatch(getData(res.data))
      dispatch(reloadData(false))
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    if (dataReload)
      fetchData()
  }, [dataReload])

  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/verifyotp' element={<Verifyotp />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
