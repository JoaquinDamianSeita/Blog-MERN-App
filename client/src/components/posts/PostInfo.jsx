import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { setPost } from "../../actions";

export default function PostInfo(props) {
  const [open, setOpen] = useState(props.isOpen);
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  useEffect(() => {
    axios
      .get(`/api/posts/${props.postId}`)
      .then((response) => {
        dispatch(setPost(response.data));
      })
      .catch((error) => {
        console.log(("error", error));
      });
  }, [dispatch, props]);

  return (
    <div>
      <Modal
        show={open}
        size="xl"
        onHide={props.handleCloseInfo}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center m-auto">
            {post.title}
            <h5 className="text-muted">{post.date}</h5>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{post.content}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
