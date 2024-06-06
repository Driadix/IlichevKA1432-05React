import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
      const postsData = await postsResponse.json();
      setPosts(postsData);
    };

    const fetchUsers = async () => {
      const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
      const usersData = await usersResponse.json();
      setUsers(usersData);
    };

    fetchPosts();
    fetchUsers();
  }, []);

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown User";
  };

  return (
    <div className="app">
      <h1>Posts</h1>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div className="card-header">{getUserName(post.userId)}</div>
            <div className="card-body">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
