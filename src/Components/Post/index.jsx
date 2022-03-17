import React from "react";
import { Container } from "./styles";

const Post = ({ post }) => {
  return (
    <Container>
      <h2>{post.title}</h2>
      <hr />
      <p>{post.body}</p>
    </Container>
  );
};

export default Post;
