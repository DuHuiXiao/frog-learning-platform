import styles from '@/app/course/list/index.module.scss'
export default function CourseListPage() {
  const list = new Array(10).fill(1)

  return (
    <div className={styles.courseList}>
      {list.map((item, index) => (
        <div key={index} className={styles.courseList_item}>
          我是项目
        </div>
      ))}
    </div>
  )
}