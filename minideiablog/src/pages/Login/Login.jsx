import React from 'react'
import styles from './Login.modules.css'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = setState()
    const [password, setPassword] =setState()
    const [error, setError] = setState()

    const { login, error: authError, loading } = useAuthentication()
    const navigate = useNavigate()

    const handlerSubmit = async(e) => {
      e.preventDafault()
      setError('')
      const user ={
        email,
        password
      }
      const res = await login(user)

      console.table(res)
      navigate('/post/create')
    }

    useEffect(() =>{
      if(authError){
        setError(authError)
      }
    }, [authError])
  return (
    <div className={styles.login}>
      <h1>Entrar no Ideia App</h1>
      <p>Compartilhe suas ideias! Aqui no nosso App</p>
      <form onSubmit={handlerSubmit}>
        <label>
          <span>E-mail: </span>
          <input
          type='email'
          name='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placehoulder='Digite seu email'
          >
            </input>
        </label>
        <span>Senha:</span>
        <input
        type='passord'
        name='password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placehoulder='Entre com sua senha'
        >  
        </input>
        <label>
          {!loading && <button classsName='btn'>Login</button>}
          {loading && <button classsName='btn' disabled>Aguarde...</button>}
          {error && <p classsName='berror'>{error}</p>}
        </label>
      </form>
    </div>
  )
}

export default Login