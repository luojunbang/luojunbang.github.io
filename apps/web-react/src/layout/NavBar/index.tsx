import setting from '@/setting.json'
import styles from './style/index.module.scss'
import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { kl } from '@/utils'
interface MenuItem {
  label?: string
  key?: string
  height?: string
  children?: MenuItem[]
}

const menuList: MenuItem[] = [
  {
    label: 'react',
    key: 'react',
    height: '200px',
    children: [
      { label: 'three', children: [{ label: 'demo', key: 'three/demo' }] },
      {
        label: 'map',
        children: [
          { label: 'l7', key: 'map/l7' },
          { label: 'l8', key: 'map/l8' },
        ],
      },
      { label: 'utils', children: [{ label: 'colors', key: 'utils/colors' }] },
    ],
  },
  {
    label: 'vue',
    key: 'vue',
    height: '400px',
    children: [
      {
        children: [
          {
            label: 'common1',
            children: [{ label: 'setting', key: 'vue/setting' }],
          },
          {
            label: 'common2',
            children: [{ label: 'setting', key: 'vue/setting' }],
          },
        ],
      },
      {
        label: 'example',
        children: [
          { label: 'charts', key: 'example/charts' },
          { label: 'image', key: 'example/image' },
          { label: 'monitor', key: 'example/monitor' },
        ],
      },
    ],
  },
]

const SubMenu = ({ menu }: { menu: MenuItem }) => {
  return (
    <div className="mt-4">
      <h3 className={`text-text-400 ${styles['nav-submenu--item']}`} style={{ '--submenu-item-index': 0 } as React.CSSProperties}>
        {menu.label}
      </h3>
      {menu.children?.map((i, idx) => (
        <div className={styles['nav-submenu--item']} key={i.label} style={{ '--submenu-item-index': idx + 1 } as React.CSSProperties}>
          {i.label}
        </div>
      ))}
    </div>
  )
}

// /1024px
const Menu = ({ menu }: { menu: MenuItem[] }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>('')
  const [lastMenu, setLastMenu] = useState<string | null>('')
  const getSubMenuClass = (item: MenuItem) => {
    const hasLast = activeMenu && lastMenu && activeMenu !== lastMenu
    const isOpen = item.key === activeMenu
    const isClosing = item.key === lastMenu && activeMenu === null
    if (hasLast) {
      return kl([hasLast && isAnimating && item.key === activeMenu && styles.next, hasLast && isAnimating && item.key === lastMenu && styles.prev])
    }
    return kl([isOpen && styles.open, isClosing && styles.closing])
  }
  const handleMouseEnter = (item: MenuItem) => {
    console.log('handleMouseEnter', item.key)
    if (activeMenu) {
      setLastMenu(activeMenu)
      const _last = menu.find((i) => i.key === activeMenu)
      document.getElementById('nav-menu')?.style?.setProperty('--nav-submenu-prev-height', _last?.height as string)
    }
    document.getElementById('nav-menu')?.style?.setProperty('--nav-submenu-next-height', item.height as string)
    setIsAnimating(true)
    setActiveMenu(item.key ?? null)
  }
  const handleMouseLeave = (item: MenuItem) => {
    console.log('handleMouseLeave', item.key)
    setLastMenu(activeMenu)
    setIsAnimating(true)
    setActiveMenu(null)
  }

  const handleTransitionEnd = (e: React.TransitionEvent, item: MenuItem) => {
    console.log('handleTransitionEnd', !activeMenu, item.key)
    if (e.target === e.currentTarget) {
      console.log('closing', !activeMenu, item.key)
      if (activeMenu === null) {
        setIsAnimating(false)
        setLastMenu(null)
      }
    }
    if (e.target !== e.currentTarget) {
      setIsAnimating(false)
      setLastMenu(null)
    }
  }

  const handlAnimationEnd = (e: React.AnimationEvent, item: MenuItem) => {
    console.log(e)

    if (e.target !== e.currentTarget) {
      console.log('handlAnimationEnd', e, item.key)
      setIsAnimating(false)
      setLastMenu(null)
    }
  }
  return (
    <div id="nav-menu" className={`${isAnimating ? styles.animating : ''} ${styles['nav-menu']}`}>
      {menu.map((i, idx) => (
        <div key={i.key} onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={() => handleMouseLeave(i)} style={{ '--submenu-height': `${(idx + 1) * 200}px` } as React.CSSProperties}>
          <div className="relative z-10">
            <Link to={`/${i.key}`}>
              <div style={{ height: setting.navHeight }} className="flex-center px-4">
                {i.label}
              </div>
            </Link>
          </div>
          <div className={`${styles['nav-submenu']} ${getSubMenuClass(i)}`} onTransitionEnd={(e) => handleTransitionEnd(e, i)} onAnimationEnd={(e) => handlAnimationEnd(e, i)}>
            <div className={styles['nav-submenu--container']}>
              <div className="flex">
                {i.children?.map((sub, i) => (
                  <div className="w-[200px]" key={i}>
                    {(sub.label ? [sub] : sub.children)?.map((_sub, idx) => <SubMenu key={_sub.label} menu={_sub} />)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function NavBar() {
  const navHeight = setting.navHeight
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    const _theme = theme === 'light' ? 'dark' : 'light'
    setTheme(_theme)
    const html = document.querySelector('html')
    html && (html.className = _theme)
  }
  return (
    <>
      <div className={styles.nav}>
        <nav style={{ height: navHeight }} className={styles['nav-container']}>
          <div className="relative z-10">
            <Logo fill={theme === 'dark' ? '#f5f5f7' : '#1d1d1f'} />
          </div>
          <Menu menu={menuList} />
          <button className="relative z-10" onClick={toggleTheme}>
            {theme}
          </button>
        </nav>
      </div>
    </>
  )
}
