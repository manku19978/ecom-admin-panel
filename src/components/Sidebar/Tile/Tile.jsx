import cn from 'classnames'
import s from './Tile.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowDown, ArrowUp } from '@/src/assets/images/icons'
import { useEffect } from 'react'

const Tile = ({ tile, setActiveIndex, activeIndex, currentIndex }) => {
  const path = usePathname()
  const isPathActive = path.startsWith(`/${tile.label.toLowerCase()}`)

  useEffect(() => {
    console.log('test', isPathActive, tile)
    if (isPathActive) setActiveIndex(currentIndex)
  }, [])

  return (
    <div className={cn(s.tileContainer)}>
      <div
        className={cn(s.tile, 'flex', 'justify-between', 'items-center', 'cp', {
          [s.active]: activeIndex === currentIndex,
        })}
        onClick={() => setActiveIndex(currentIndex)}
      >
        <div
          className={cn('flex', 'justify-between', 'items-center', s.tileLeft)}
        >
          <tile.icon />
          <p>{tile.label}</p>
        </div>
        {isPathActive ? <ArrowUp /> : <ArrowDown />}
      </div>

      {activeIndex === currentIndex && (
        <div className={cn(s.links, 'flex', 'flex-col')}>
          {tile.children.map(link => (
            <Link
              className={cn('cp', s.link, { ['bbb']: path == link.path })}
              href={link.path}
              key={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Tile
