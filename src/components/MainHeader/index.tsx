'use client'
import styles from '@/components/MainHeader/index.module.scss'
import SearchInput from '../SearchInput'
import { Avatar } from 'antd';
import { useState } from 'react'
import Button from '../Button';
export default function MainHeader() {
  const navList = [{
    name: '首页',
    path: '/'
  },
  {
    name: '课程',
    path: '/course/list'
  },
  {
    name: '教师',
    path: '/teacher'
  },
  {
    name: '资讯',
    path: '/news'
  }]
  const [value, setValue] = useState('')

  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <span className={styles.header_content_title}>Frog 学习平台</span>
        <div className={styles.header_content_nav}>
          <ul className={styles.header_content_nav_ul}>
            {navList.map((item) => (
              <li key={item.name} className={styles.header_content_nav_ul_li}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.header_content_search}>
          <SearchInput value={value} placeholder='搜索' onChange={()=>{}} />
        </div>
        <div className={styles.header_content_avatar}>
          <Avatar />
        </div>
        <div className={styles.header_content_create}>
          <Button onClick={()=>{}}>发表文章</Button>
        </div>
      </div>
    </div>
  )
}