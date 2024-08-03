// src/redux/actions/postActions.js
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPosts = () => async (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST });

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const limitedData = data.slice(0, 12);  // Limit to 12 posts
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: limitedData });
    } catch (error) {
        dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
    }
};
