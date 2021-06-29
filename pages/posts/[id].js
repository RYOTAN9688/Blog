import { func } from "prop-types";
import Layout from "../../components/layout";
import { getIds, getPostById } from "../../lib/posts";

export const getStaticPaths = async () => {
    return {
        paths: getIds(),
        fallback: false
    }
}

export default function Post() {
    return <Layout></Layout>
}

export const getStaticProps = async ({ params }) => {
    return {
        props: {
            post: getPostById(params.id)
        }
    }
}

export default function post({ post }) {
    return (
        <Layout>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </Layout>
    )
}