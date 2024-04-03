import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { getData, reloadData } from '../redux/dataSlice'
import Admin from './pages/Admin'
import { Toaster } from 'react-hot-toast'
import Login from './components/Admin/Login/Login'

const App = () => {
  const { dataReload } = useSelector(state => state.data)
  const dispatch = useDispatch()

  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:3000/getdata")
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
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App