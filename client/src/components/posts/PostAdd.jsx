import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addPost } from "../../actions";
import NavBarPosts from "../NavBars/NavBarPosts";

export default function PostAdd(props) {
  const initialState = { name: "", tel: "", email: "", adress: "" };
  const [post, setFields] = useState(initialState);
  const dispatch = useDispatch();

  function handleChange(event) {
    setFields({ ...post, [event.target.name]: event.target.value });
  }

  function handleCancel() {
    props.history.push("/posts");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (post.date || post.title || post.content) {
      console.log("nada");
      return axios
        .post("/api/posts", {
          date: post.date,
          title: post.title,
          content: post.content,
        })
        .then( (response) => {
          dispatch(addPost(response.date));
          setFields(initialState);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  return (
    <div>
      <NavBarPosts />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="date"
              name="date"
              required
              value={post.date}
              onChange={handleChange}
              className="form-control"
            />
            <input
              type="text"
              name="title"
              required
              value={post.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Título"
            />
            <input
              type="text"
              name="content"
              required
              value={post.content}
              onChange={handleChange}
              className="form-control"
              placeholder="Contenido"
            />
          </div>
          <div className="btn-group">
            <input
              type="submit"
              value="Confirmar"
              className="btn btn-primary"
            />
            <button className="btn btn secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
