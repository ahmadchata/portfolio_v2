/* eslint-disable react/no-children-prop */
import React from "react";
import Router from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/blog/[id]", `/blog/${post.id}`)}>
      <h2>{post.title}</h2>
      <small>By {authorName}</small>
      {/* <ReactMarkdown children={post.content} /> */}
    </div>
  );
};

export default Post;
