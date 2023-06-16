import prisma from "../../lib/prisma";
import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Post, { PostProps } from "../../components/Post";
import Layout from "../../components/Layout";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout pageTitle={"Blog"}>
      <main className="main">
        <section className="center">
          <h1 className="monteya-font orange mb-5 name-heading mt-4">Blog</h1>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Blog;
