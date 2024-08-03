// src/components/DetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailPage = () => {
    const { id } = useParams();
    const post = useSelector((state) =>
        state.post.posts.find((post) => post.id === parseInt(id))
    );

    if (!post) return <div>Post not found</div>;

    return (
        <div className="detail-page">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>User ID: {post.userId}</p>
        </div>
    );
};

export default DetailPage;
