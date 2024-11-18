import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import styles from './Post.module.css'
import { useParams } from 'react-router-dom'


 const Post = () => {
    const { id } = useParameter()
  const { document: post } =useFetchDocuments("posts", id)
  return (
     <>
     <div className={styles.post_container}>
        {post && (
            <>
            <h1>{post.title}</h1>
            <img scr={post.image} alt={post.title} />
            <p>{post.body}</p>
            <div className={styles.tags}>
                {post.tags.map((tag) =>(
                    <p key={tag}>
                        <span>#</span>{tag}
                    </p>
                ))}
            </div>
        )}
        {!post && (<p>O Post que está procurando não existe em nossa base!</p>)}
        </div> 
     </>
  )
}

export default Post
