'use client'
import styles from '@/components/MainHeader/index.module.scss'
import SearchInput from '../SearchInput'
import { useEffect, useState } from 'react'
import Button from '../Button';
import Avatar from '../Avatar';
import Link from 'next/link';

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
    path: '/teacher/list'
  },
  {
    name: '资讯',
    path: '/news/list'
  }]
  const [value] = useState('')
  const [isClient, setIsClient] = useState(false)
  const [path, setPath] = useState('/404')

  useEffect(()=>{
    setIsClient(true)
    setPath(location.pathname)
  },[])

  function isNavActive(linkPath:string){
    if(!isClient)return false
    return linkPath === path
  }

  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <span className={styles.header_content_title}>Frog 学习平台</span>
        <div className={styles.header_content_nav}>
          <ul className={styles.header_content_nav_ul}>
            {navList.map((item) => (
              <li key={item.name} className={styles.header_content_nav_ul_li}>
                <Link href={item.path}
                passHref={true}
                prefetch={true}
                onClick={() => setPath(item.path)}
                className={`${isNavActive(item.path) ? styles.header_content_nav_ul_li_active : ''}`}>
                  {item.name}
                </Link>
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