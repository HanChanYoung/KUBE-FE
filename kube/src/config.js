import axios from 'axios'

const BASE_URL = 'http://localhost:8081';

export const CREATE_BOARD_PAGE = async (req) => {
    console.log(req)
    await axios.post('/api/posts',req)
    .then((response) => {
    console.log(response);
    })
    .catch((error) => {
    console.log(error);
    });
};

export const GET_BOARD_PAGE = async (boardId) => {
    const { data } = await axios.get(`/api/posts/${boardId}`);
    return data;
}

export const GET_BOARD_LIST = async () => {
    const { data } = await axios.get(`/api/posts`);
    return data;
}

export const CREATE_RSVD = async (req) => {
    console.log(req)
    const { data } = await axios.post(`/api/reservation/`,req);
    return data;
}

export const IMAGE_UPLOAD = async (req) => {
    const { data } = await axios.put("",{
        headers:{

        }
    })
}

export const IMAGE_DOWNLOAD = async (req) => {
    const { data } = await axios.get("https://objectstorage.kr-central-1.kakaoi.io/v1/eb454a58725f4cf4ba059729077e409b/bella-test/kube-image/춘식이찬성.png",{
        headers:{
            "X-Auth-Token":"gAAAAABjx4rWTFMdRnLyI013pgSAtgjDvfT-udf6DBPkmqv10jC8JTSJbOQkn6g3DfFk22UTlkA6v-9VDCPjxAv9-zgMLyFifjRkcv6yctrbZpgXVEEHXmx_CHO1yg7OTwHmF18la77bwtgiqbs55LHHYxyyO400rm15tA3I_3U6HDJCZBCCAp74-vsRXEj3LIknvb6wNO_i"
        }
    })
    console.log(data);
}

export const UPLOAD_IMAGE = async (img) => {
    const formData = new FormData();
    formData.append('img', img);

    const { data } = await axios.put(`https://objectstorage.kr-central-1.kakaoi.io/v1/eb454a58725f4cf4ba059729077e409b/bella-test/kube-image/1.png`,
    {
        headers : {
            'X-Auth-Token':'gAAAAABjx4rWTFMdRnLyI013pgSAtgjDvfT-udf6DBPkmqv10jC8JTSJbOQkn6g3DfFk22UTlkA6v-9VDCPjxAv9-zgMLyFifjRkcv6yctrbZpgXVEEHXmx_CHO1yg7OTwHmF18la77bwtgiqbs55LHHYxyyO400rm15tA3I_3U6HDJCZBCCAp74-vsRXEj3LIknvb6wNO_i',
            'Content-Type':'image/png'
    }
    });
    console.log(data);
    return data;
}