import setting from '@/setting.json'
import styles from './style/index.module.scss'
import React, { useMemo, useState } from 'react'
import { Link, Router, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { kl } from '@/utils'
import Item from '@arco-design/web-react/es/Breadcrumb/item'
import { isNil } from 'lo-utils'
interface MenuItem {
  label?: string
  key?: string
  children?: MenuItem[]
}

const menuList: MenuItem[] = [
  {
    label: 'react',
    key: '',
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
  const basePath = isNil(menu.key) ? '' : `/${menu.key}`
  const navigate = useNavigate()
  const handleMenuItemClick = (item: MenuItem) => {
    navigate(`${basePath}/${item.key}`)
  }
  return (
    <div className="">
      <h3 className={styles['nav-submenu--item']} style={{ '--submenu-item-index': 0 } as React.CSSProperties}>
        {menu.label}
      </h3>
      {menu.children?.map((i, idx) => (
        <div className={styles['nav-submenu--item']} onClick={() => handleMenuItemClick(i)} key={i.label} style={{ '--submenu-item-index': idx + 1 } as React.CSSProperties}>
          {i.label}
        </div>
      ))}
    </div>
  )
}

// /1024px
const Menu = ({ menu }: { menu: MenuItem[] }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [lastMenu, setLastMenu] = useState<string | null>(null)
  const getSubMenuClass = (item: MenuItem) => {
    const hasLast = activeMenu !== null && lastMenu !== null && activeMenu !== lastMenu
    const isOpen = item.key === activeMenu
    const isClosing = item.key === lastMenu && activeMenu === null
    if (hasLast) {
      return kl([hasLast && isAnimating && item.key === activeMenu && styles.next, hasLast && isAnimating && item.key === lastMenu && styles.prev])
    }
    return kl([isOpen && styles.open, isClosing && styles.closing])
  }
  const handleMenuItemMouseEnter = (item: MenuItem) => {
    console.log('handleMenuItemMouseEnter ', item.key)
    if (activeMenu !== null) {
      setLastMenu(activeMenu)
      const lastItem = menu.find((i) => i.key === activeMenu)
      lastItem && document.getElementById('nav-menu')?.style?.setProperty('--nav-submenu-prev-height', `${calculateSubMenuHeight(lastItem)}px`)
    }
    document.getElementById('nav-menu')?.style?.setProperty('--nav-submenu-next-height', `${calculateSubMenuHeight(item)}px`)
    setIsAnimating(true)
    setActiveMenu(item.key ?? null)
  }
  const handleMenuItemMouseLeave = (item: MenuItem) => {
    setLastMenu(activeMenu)
    setIsAnimating(true)
    setActiveMenu(null)
  }

  const handleTransitionEnd = (e: React.TransitionEvent, item: MenuItem) => {
    if (e.target === e.currentTarget) {
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
    if (e.target !== e.currentTarget) {
      setIsAnimating(false)
      setLastMenu(null)
    }
  }
  const MENU_ITEM_HEIGHT = 30,
    MENU_TITLE_HEIGHT = 40
  function calculateSubMenuHeight(subMenuData: MenuItem) {
    if (!subMenuData.children) return MENU_ITEM_HEIGHT
    return (
      Math.max(
        ...subMenuData.children.map((submenu) => {
          // 如果子菜单数据不具有'label'属性，高度为子菜单数组长度乘以高度常量
          if (!submenu.label) {
            return submenu.children?.reduce((rs, i) => rs + MENU_TITLE_HEIGHT + (i.children?.length ?? 0) * MENU_ITEM_HEIGHT, 0) ?? 0
          }
          return (submenu.children?.length ?? 0) * MENU_ITEM_HEIGHT + MENU_TITLE_HEIGHT
        }),
      ) +
      (40 + 80) +
      setting.navHeight
    )
  }
  return (
    <div id="nav-menu" className={`${isAnimating ? styles.animating : ''} ${styles['nav-menu']}`}>
      {menu.map((i, idx) => (
        <div key={i.key} onMouseEnter={() => handleMenuItemMouseEnter(i)} onMouseLeave={() => handleMenuItemMouseLeave(i)} style={{ '--submenu-height': `${calculateSubMenuHeight(i)}px` } as React.CSSProperties}>
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
            <Logo fill={theme === 'dark' ? '#f5f5f7' : '#1d1d1f'} className="mr-4" />
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
