// src/components/PostCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    const truncate = (text, length = 100) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    };

    return (
        <div className="post-card">
            <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
            <h2>{truncate(post.title, 50)}</h2>
            <p>{truncate(post.body, 150)}</p>
            <Link to={`/item/${post.id}`}>Read More...</Link>
        </div>
    );
};

export default PostCard;
