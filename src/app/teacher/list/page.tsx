import styles from '@/app/teacher/list/index.module.scss'
import Button from '@/components/Button';

export default function TeacherList() {
  const list = new Array(20).fill(null)

  return (
      <div className={styles.teacherList}>
          <div className={styles.teacherList_list}>
              {list.map((_, index) => (
                <div className={styles.teacherList_list_item}>
                  {/* 上半部分 */}
                  <section className={styles.teacherList_list_item_top}>
                    {/* 左侧头像部分 */}
                    <div className={styles.teacherList_list_item_top_left}>
                      <div className={styles.teacherList_list_item_top_left_avatar}></div>
                      <p className={styles.teacherList_list_item_top_left_name}>时尚如</p>
                    </div>
                    {/* 右侧信息部分 */}
                    <div className={styles.teacherList_list_item_top_right}>
                      <div className={styles.teacherList_list_item_top_right_top}>
                        <p className={styles.teacherList_list_item_top_right_top_desc}>
                          老师的个人介绍老师的个人介绍老师的个人介绍老师的个人介绍老师的个人介绍老师的个人介绍老师的个人介绍老师的个人介绍老师的个人介绍老师的个人介绍老师的个人介绍老师的个人介绍老师的个人介绍老师的个人介绍老师的个人介绍
                        </p>
                      </div>
                      <div className={styles.teacherList_list_item_top_right_bottom}>
                        <div className={styles.teacherList_list_item_top_right_top_subscribe}>
                          <Button>关注</Button>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* 下半部分
                  <section className={styles.teacherList_list_item_bottom}>
                    老师的主要课程
                  </section> */}
                </div>
              ))}
          </div>
      </div>
  );
}