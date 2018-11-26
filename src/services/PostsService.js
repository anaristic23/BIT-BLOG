import BASE_ENDPOINT from '../shared/constants';
import Post from '../entities/Post'

const fetchPosts = () => {
    const urlPosts = BASE_ENDPOINT + "/posts";
    return fetch(urlPosts)
        .then(response =>
            response.json())
        .then(data => {
            return data.slice(0, 10)
        })
        .then(data => {
            const postsData = data.map(data => {
                return new Post(data.title, data.body)
            })
            return postsData;
        })

}

const fetchPost = (id) => { }

const createPost = () => { }

export { fetchPosts }