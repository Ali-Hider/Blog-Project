import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { useSelector } from 'react-redux'

function AllPosts() {
    const [posts, setPosts] = useState([])
    
 const user = useSelector((state) => state.auth.userData) // get current user

    useEffect(() => {
        if (user) {
            appwriteService.getPosts([])// Here the empty array argument means give me all the elements
                .then((res) => {
                    if (res) {
                        setPosts(res.documents)
                    } else {
                        setPosts([])
                    }
                })
                .catch(() => setPosts([]))
        } else {
            setPosts([]) // clear posts when logged out
        }
    }, [user]) // refetch when user changes (login/logout)

    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts
