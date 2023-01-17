import axios from 'axios'

// const BASE_URL = 'http://localhost:8081';

export const CREATE_BOARD_PAGE = async () => {
    const { data } = await axios.post(`/api/posts`);
    return data;
};

export const GET_BOARD_PAGE = async (boardId) => {
    const { data } = await axios.get(`/api/posts/${boardId}`);
    return data;
}