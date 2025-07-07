import Cookies from 'js-cookie'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setToken, clearUser } from '@/config/store/reducers/user.slice'
import { useNavigate } from 'react-router-dom'
import { RootState } from '@/config/store'
import { IUser } from '@/interface/models'

export default function useAuth() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const token = Cookies.get('token') || ''

  const isAuthenticated = useSelector(
    (state: RootState) => state.user.user !== null
  )

  const setCredentials = (newToken: string, user: IUser) => {
    Cookies.set('token', newToken, { expires: 7, path: '/' })
    dispatch(setToken(newToken))
    dispatch(setUser({ user }))
  }

  const logout = () => {
    Cookies.remove('token', { path: '/' })
    dispatch(clearUser())
    navigate('/login')
  }

  return {
    token,
    logout,
    setCredentials,
    isAuthenticated,
  }
}