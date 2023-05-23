import {environment} from '../../environments/environment';

const {API} = environment;

const users = `${API}/users`
const posts = `${API}/posts`
const comments = `${API}/comments`

const urls = {
  users: {
    users,
    byId: (id: number): string => `${users}/${id}`
  },
  posts: {
    posts,
    byId: (id: number): string => `${posts}/${id}`
  },
  comments:{
    comments,
    byId:(id:number): string => `${comments}/${id}`
  }

}

export {
  urls
}
