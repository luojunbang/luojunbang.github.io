import setting from '@/setting.json'

export default function NavBar() {
  const navHeight = setting.navHeight
  return (
    <div style={{ height: navHeight }} className="h-[52px] absolute w-full top-0 left-0">
      nav
    </div>
  )
}
