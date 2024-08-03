// src/components/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="home-page">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default HomePage;
