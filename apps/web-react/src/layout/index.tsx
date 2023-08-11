import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <div className="h-screen">
        <div className="h-12 bg-gray-500">LOGO</div>
        <Outlet />
      </div>
    </>
  )
}
