import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
    return (
        <>
            <Layout pageTitle="about">
                <Link href="/">{/*HOMEを押すとhomeに移動する */}
                    <a>HOME</a>
                </Link>
            </Layout>
        </>
    )
}

//pages内にファイルを作成すると、自動的にファイル名からルーティングを行う。

//ルーティングとは
//ルールに従って、ファイルを配置すれば、Next.js側で自動的にルーティング（経路選定）
//を行う。
