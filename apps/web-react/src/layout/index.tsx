import { Outlet, Link, redirect, useLocation } from 'react-router-dom'
import axios from 'axios'
import router from '@/router'
import { useEffect } from 'react'

export default function PageLayout() {
  const route = ['/three/demo', '/map/l7', '/utils/colors']
  useEffect(() => {})
  return (
    <>
      <div className="h-full">
        <div className="h-12 bg-primary absolute">LOGO</div>
        <div className="absolute pt-[60px] h-full">
          {route.map((i) => (
            <div key={i}>
              {/* @ts-ignore */}
              <Link to={i}>{i}</Link>
            </div>
          ))}
        </div>
        <div className="h-full" style={{ padding: '60px 0 0 200px' }}>
          <Outlet />
        </div>
      </div>
    </>
  )
}
