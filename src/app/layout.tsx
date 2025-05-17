import '@/app/globals.scss';
import styles from '@/app/layout.module.scss'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import MainHeader from '@/components/MainHeader';
import Config from '@/components/Config';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="zh-CN">
      <title>Frog学习平台 - 一站式在线学习平台</title>
      <meta name="description" content="Frog学习平台（Frog Learning Platform）提供丰富在线课程，涵盖编程、设计、职场技能等领域，支持实时互动教学与个性化学习路径，助力用户提升竞争力。"/>
      <meta name="keywords" content="Frog学习平台,Frog Learning Platform,在线课程平台,编程学习,职场技能培训,互动课堂"/>
      <meta property="og:title" content="Frog学习平台 - 开启高效学习之旅"/>
      <meta property="og:type" content="website"></meta>
      <body className={styles.body}>
        <AntdRegistry>
          <MainHeader />
          <main className={styles.body_main}>
            <Config />
            {children}
          </main>
        </AntdRegistry>
      </body>
    </html>
  );
}
