import { Outlet, Link, redirect, useLocation } from 'react-router-dom'
import axios from 'axios'
import router from '@/router'
import { useEffect } from 'react'
import setting from '@/setting.json'
import NavBar from './NavBar'
import SideBar from './SideBar'

export default function PageLayout() {
  const showNav = !!setting.navHeight

  const paddingTop = showNav ? { paddingTop: setting.navHeight } : {}

  const containerStyle = {
    ...paddingTop,
  }
  const contentStyle = {
    minHeight: `calc(100vh - ${setting.navHeight}px)`,
  }
  return (
    <>
      <div className="relative min-h-screen bg-fill-100" style={containerStyle}>
        {showNav && <NavBar />}
        <div style={contentStyle}>
          <Outlet />
        </div>
      </div>
    </>
  )
}
