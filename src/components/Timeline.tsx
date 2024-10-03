import { useEffect, useState } from "react"
import { Post } from "./Post"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../config/firestore"
import uniqBy from "lodash/uniqBy"
import { getSourceType } from "../utils"

export type Source = "twitter" | "tiktok" | "instagram"

type PostType = {
  from: string
  text: string
  type: Source
  timestamp: string
}

export const Timeline = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  useEffect(() => {
    const getPosts = async () => {
      const postsRef = collection(db, "messages")
      const postsQuery = query(postsRef)

      const postSnapshot = await getDocs(postsQuery)
      postSnapshot.forEach((doc) => {
        const sourceType = getSourceType(doc.data().text)
        if (!doc.data().text || !sourceType) return
        const newPost: PostType = {
          ...(doc.data() as Omit<PostType, "type">),
          type: sourceType,
        }

        setPosts((prevPosts) => uniqBy([...prevPosts, newPost], "text"))
      })
    }

    getPosts()
  }, [])

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.text} link={post.text} type={post.type} />
      ))}
    </div>
  )
}
