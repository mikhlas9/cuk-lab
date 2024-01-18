import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./HomePage.css"

const Admin = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts when component mounts
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('https://cuklabbackend.onrender.com/data')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  };

  const handleDelete = (postId) => {
    axios.delete(`https://cuklabbackend.onrender.com/posts/${postId}`)
      .then(response => {
        // console.log(response.data);
        // After deleting, fetch updated posts
        fetchData();
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <ul>
        {posts.slice().reverse().map((post) => (
          <li key={post._id}>{post.postText}
          <button className='delete' onClick={() => handleDelete(post._id)}>Delete</button>
          </li>
        ))}
        </ul>
    </div>
  );
};

export default Admin;
