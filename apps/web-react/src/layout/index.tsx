import { Outlet, Link, redirect, useLocation } from 'react-router-dom'
import axios from 'axios'
import router from '@/router'
import { useEffect } from 'react'
import setting from '@/setting.json'
import NavBar from './NavBar'
import SideBar from './SideBar'

const parentNavBarHeight = '52'

export default function PageLayout() {
  const collapsed = false
  const POWERED_BY_WUJIE = !!window.__POWERED_BY_WUJIE__
  const containerStyle = POWERED_BY_WUJIE ? { minHeight: `calc(100vh - ${parentNavBarHeight}px)` } : { minHeight: '100vh' }
  const showNav = !POWERED_BY_WUJIE && setting.navHeight
  const showMenu = !POWERED_BY_WUJIE && setting.menuWidth

  const paddingTop = showNav ? { paddingTop: setting.navHeight } : {}

  const menuWidth = collapsed ? 48 : setting.menuWidth

  const paddingLeft = showMenu ? { paddingLeft: menuWidth } : {}

  const contentStyle = {
    ...paddingTop,
    ...paddingLeft,
  }

  return (
    <>
      <div className="relative" style={containerStyle}>
        {showNav && <NavBar />}
        {showMenu && <SideBar />}
        <div className="h-full" style={contentStyle}>
          <Outlet />
        </div>
      </div>
    </>
  )
}
