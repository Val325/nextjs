import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

//  /api/posts
//  /api/posts/:postId

async function getData() {
  const res = await fetch('http://127.0.0.1:8000/api/posts')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <main>
        <div className={styles.posts}>
            {
                Object.values(data).map((item) => (
                    <div className={styles.post} key={item.id}>
                       <div>{item.text}</div><br />
                        <Link href={"/post/" + (item.id - 1)}>show post</Link>
                    </div>
                ))
            } 
        </div> 
    </main>
  )
}
