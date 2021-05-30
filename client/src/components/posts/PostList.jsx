import React from "react";
import NavBarPosts from "../NavBars/NavBarPosts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function PostList() {
  const posts = useSelector((state) => {
    return state.posts;
  });

  return (
    <div>
      <NavBarPosts />
      <div className="container">
        <div>
          <h2>
            Home
            <Link to="/posts/new" className="btn btn-primary float-end">
              Create Post
            </Link>
          </h2>
          <p>
            En esta parte de la pagina se van a mostar los articulos publicados
            por los usuarios de forma sencilla con el contenido reducido
          </p>
        </div>
        <hr />
        {posts.length &&
          posts.map((post) => {
            return (
              <div key={post._id}>
                <h4>{post.title}</h4>
                <small className="d-block">{post.date}</small>
                <small>_id: {post._id}</small>
                <p>
                  {post.content.substring(0, 100) + " ..."}
                  <Link to={`/posts/${post._id}`}>Leer Mas!</Link>
                </p>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
}
