import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addPost } from "../../actions";

import { useAuth0 } from "@auth0/auth0-react";

export default function PostAdd(props) {
  const initialState = { name: "", tel: "", email: "", adress: "" };
  const [post, setFields] = useState(initialState);
  const dispatch = useDispatch();

  const { getAccessTokenSilently } = useAuth0();

  function handleChange(event) {
    setFields({ ...post, [event.target.name]: event.target.value });
  }

  function handleCancel() {
    props.history.push("/posts");
  }

  // const callSecureApi = async () => {
  //   try {
  //     const token = await getAccessTokenSilently();

  //     const response = await fetch(
  //       `${serverUrl}/api/role`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         }
  //       }
  //     );

  //     const responseData = await response.json();

  //     setMessage(responseData.message);
  //   } catch (error) {
  //     setMessage(error.message);
  //   }
  // };

  async function handleSubmit(event) {
    event.preventDefault();

    const token = await getAccessTokenSilently();
    console.log(token);

    if (post.date || post.title || post.content) {
      return axios
        .post("/api/post", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(
          axios.post("/api/posts", {
            body: {
              date: post.date,
              title: post.title,
              content: post.content,
            },
          })
        )
        .then((response) => {
          dispatch(addPost(response.date));
          setFields(initialState);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div>
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
