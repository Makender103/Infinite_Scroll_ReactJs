import React,{useState, useEffect} from 'react'
import Post from '../Posts/index'

import imgLoading from '../../Assets/Images/loading.gif'

export default function List() {
    const [posts, setPosts]= useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [postsPage, setPostsPage] = useState(5)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       getPosts()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [loading]);

    function handleScroll() {
        if (
          window.innerHeight + document.documentElement.scrollTop <
            document.documentElement.offsetHeight ||
          page === totalPage ||
          loading
        ) {
          return;
        }
    
        setPage(page + 1);
      }

    function getPosts() {
        setLoading(true)
        fetch(`http://localhost:3004/posts?_page=${page}&_limit=${postsPage}`, {
            method: "GET"
        })
        .then(response=> {
            setTotalPage(response.headers.get("X-Total-Count") / postsPage);
            return response.json();
        })
        .then(data=> {
            setPosts([...posts, ...data]);
            setLoading(false);
        });
    }
    return (
        <div className="posts">
            { posts.map(dados=>(
                    <Post dados={dados} key={dados.id}/>

            ))}
            
            {loading && page > 1 && <img width={20} src={imgLoading} alt=""/>}
        </div>
    )
}
