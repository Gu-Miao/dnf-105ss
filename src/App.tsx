import { NavLink, Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.less'

function App() {
  return (
    <div className="App">
      <Header />
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            装备对比
          </NavLink>
        </li>
        <li>
          <NavLink to="/fusion-equipments" className={({ isActive }) => (isActive ? 'active' : '')}>
            贴膜对比
          </NavLink>
        </li>
        <li>
          <NavLink to="/options" className={({ isActive }) => (isActive ? 'active' : '')}>
            自定义词条对比
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default App
