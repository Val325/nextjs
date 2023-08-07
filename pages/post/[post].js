import Link from 'next/link';
import { useRouter } from 'next/router'
import './globals.css'
import styles from './post.module.css'
export default function Post({ data }) {
  const router = useRouter()
  console.log("Router: ", router.query.post)

  // Check if data is available and router.query.post is defined
  let update = data && router.query.post ? Object.values(data)[router.query.post] : null;
  console.log("Update: ", update)
  console.log("Update typeof: ", typeof update)

  return (
    <main>
    <header className={styles.blog}>
      <h1>blog</h1>
    </header> 
    <div className={styles.post}>
      <h1>id post: {update.id}</h1>
     {update && <p>{update.text}</p>}  
      <p>
        <Link href="/">Back to home</Link>
      </p>
    </div>
    </main>
  );
}

// Fetch data from external API
export async function getServerSideProps() {
  const res = await fetch('http://127.0.0.1:8000/api/posts/')
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}
