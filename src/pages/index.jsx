import { useState } from 'react';
import postsData from '../posts.json';
import Article from '../components/Article';
import Search from '../components/Search';

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter(item => item.title.includes(value));
    setPosts(filteredPosts);
  }
  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange}/>
      {posts.map((props, index) => (
        // <Article title={title} tags={tags} date={date}/>

        //spread attributes
        <Article {...props} key={index}/>
      ))}
    </>
  )
}

export default Homepage;