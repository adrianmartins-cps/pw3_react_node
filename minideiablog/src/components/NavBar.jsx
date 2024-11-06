import React from 'react'
import styles from './NavBar.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

const NavBar = () => {
  const {user} = useAuthValue()
  const {logout} = useAuthentication()
  const navigate = useNavigate()

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.brand}>
            Ideia<span>App</span>
        </div>
        <ul className={styles.links_list}>
          <li>
            <NavLink to="Home" className={({isActive}) =>( isActive ? styles.active : null)}>
            Home
            </NavLink>
      
          </li>
          {!use && (
          <><li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : null)}>
                Login
              </NavLink>
            </li>
            <li>
                <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : null)}>
                  Register
                </NavLink>
              </li>
              </>
          )}
          {!user && (
          <><li>
              <NavLink to="/post/create" className={({ isActive }) => (isActive ? styles.active : null)}>
                New Post
              </NavLink>
            </li><buttom className={styles.logout} onClick={logout}>Exit</buttom></>
          </li>
          <li>
          <a href="#" className={({isActive}) =>( isActive ? styles.active : null)}>About</a>
        </li>
              )}
        <li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar