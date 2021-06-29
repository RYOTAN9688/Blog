import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'
import { getPosts } from '../lib/posts'




export const getStaticProps = async () => {//ビルド（本番用アプリ）に外部のデータを取得するよう設定できる
  return {
    props: {
      posts: getPosts()
    }
  }
}

export default function Home({ posts }) {

  return (
    <Layout pageTitle={"home"} >
      < Link href="/about">
        <a>About</a>
      </Link >
      <ul>
        {
          posts.map(({ title }) => {
            return <li>
              {title}
            </li>
          })
        }
      </ul>
    </Layout >
  )
}
