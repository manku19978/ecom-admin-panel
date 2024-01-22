'use client'
import { useState } from 'react'
import cn from 'classnames'
import Header from './Header/Header'
import Content from './Content/Content'
import { SIDEBAR_BUSINESS, SIDEBAR_PERSONAL } from '@/src/utils/constants'
import s from './Sidebar.module.css'

const Sidebar = () => {
  const [state, setState] = useState(SIDEBAR_BUSINESS)

  return (
    <div className={cn(s.container)}>
      <div className={cn(s.headerContainer)}>
        <Header currentActive={state} setCurrentActive={setState} />
      </div>

      <div>
        <Content currentActive={state} />
      </div>
    </div>
  )
}

export default Sidebar
