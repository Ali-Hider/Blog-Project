import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components';
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])

const user = useSelector((state) => state.auth.userData)

useEffect(() => {
    if (user) {
        appwriteService.getPosts()// here nothing passed so only show the active posts
            .then(res => setPosts(res?.documents ?? []))
            .catch(err => {
                console.log("Appwrite getPosts error", err)
                setPosts([])
            })
    } else {
        setPosts([]) // clear posts when logged out
    }
}, [user])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
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

export default Home