import React from "react";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Boost Your Social Media Presence",
      excerpt:
        "Learn the top strategies to grow your audience and engagement on social media...",
    },
    {
      id: 2,
      title: "Top 5 Digital Marketing Trends in 2024",
      excerpt:
        "Stay ahead of the curve by adopting the latest digital marketing trends...",
    },
    {
      id: 3,
      title: "Creating Viral Content: Tips from the Experts",
      excerpt:
        "Discover what makes content go viral and how you can create content that resonates...",
    },
  ];

  return (
    <div className={styles.blogContainer}>
      <h2>Latest from Our Blog</h2>
      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.blogCard}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href="#">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
