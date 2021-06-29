import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

//process.cwd()で、node実行時のワーキングディレクトリ
//（ファイルの読み込みと保存に指定された領域のパス)を取得、postsと結合している
const postsDirPath = path.join(process.cwd(), 'posts')

export function getPosts() {
    //fs.reeddirSyncは、引数にとったパスのディレクトリ内のファイル名
    //の配列を返す
    const postNames = fs.readdirSync(postsDirPath)
    //postsNames === ['first-post-md']
    // console.log(postNames)
    return postNames.map((postName) => {
        const postPath = path.join(postsDirPath, postName)
        //各postを取得,front matterを解析

        const result = matter(fs.readFileSync(postPath, "utf8"))
        console.log(result)

        return result.data
    })
}

export function getIds() {
    const postNames = fs.readFileSync(postsDirPath)

    return postNames.map(postName => {
        return {
            params: {
                id: postName.replace(/\.md$/, '')//paramsのプロパティを含むオブジェクトの配列を返す
            }
        }
    })
}

export function getPostById(id) {
    const postPath = path.join(postsDirPath, `${id}.md`)

    const result = matter(fs.readFileSync(postPath, 'utf-8'))

    return {
        id,
        ...result.data,
        content: result.content

    }
}