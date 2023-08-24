import { Outlet, Link, redirect, useLocation } from 'react-router-dom'

export default function SideBar() {
  const route = ['/three/demo', '/map/l7', '/utils/colors', '/vue', '/vue/setting']
  return (
    <div className="absolute pt-[60px] h-full">
      {route.map((i) => (
        <div key={i}>
          {/* @ts-ignore */}
          <Link to={i}>{i}</Link>
        </div>
      ))}
    </div>
  )
}
