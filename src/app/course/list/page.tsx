'use client'
import styles from '@/app/course/list/index.module.scss'
import Button from '@/components/Button'
export default function CourseListPage() {
  const list = new Array(100).fill((
    <div>
      <h1>Course Title</h1>
      <p>Course Description</p>
      <button>Enroll</button>
      <button>Learn More</button>
    </div>
  ))

  return (
    <div className={styles.courseList}>
      {list.map((item, index) => (
        <div key={index} className={styles.courseList_item}>
          {/* 左边区域 */}
          <div className={styles.courseList_item_left}>
            <div className={styles.courseList_item_left_img}
              style={{ backgroundImage: `url('https://p3-pc-sign.douyinpic.com/image-cut-tos/e3ad96abb8adac6f5d7f2b82f3b4f5f1~tplv-dy-vqe2-sr-opt1:640:480:q80.webp?biz_tag=pcweb_cover&from=327834062&lk3s=138a59ce&s=PackSourceEnum_DOUYIN_WEB_NEW_PAGE&sc=cover&se=false&x-expires=2062836000&x-signature=4prFvIgoUwCt5%2FmH%2F0xRyLYRDCc%3D&quot` }}></div>
          </div>
          {/* 右边区域 */}
          <div className={styles.courseList_item_right}>
            <div className={styles.courseList_item_right_container}>
              <p className={styles.courseList_item_right_container_title}>{'Python 编程入门到实战：轻松掌握高效开发技能'}</p>
              <p className={styles.courseList_item_right_container_desc}>{'本课程专为零基础学习者打造，从 Python 基础语法讲起，逐步深入函数、数据结构、面向对象编程等核心知识，搭配丰富的实战案例（如 Web 小工具开发、数据处理模拟）。通过清晰的讲解和手把手代码演示，帮助学员快速掌握 Python 编程逻辑与技巧，提升解决实际问题的能力。无论是想拓展技能的职场新人，还是对编程感兴趣的初学者，都能在此课程中夯实基础，掌握高效开发方法，为后续进阶或项目实践打下坚实基础。'}</p>
              <section className={styles.courseList_item_right_container_footer}>
                <div>
                  <Button>查看详情</Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}