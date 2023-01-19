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
            "X-Auth-Token":"gAAAAABjyI93HMiCl7ObcUhc3_qxZvZcAHpbZiRaZkGF5M1DWgtgnPkxtpTJOSx2Dle2dZEpZ5WeGxnD5Rn_z_7DxAMlfxq9wIaP8MBEdKfpvmXbHJgygNF6kXkOIvhZzYYOtiL7ZMmOKDE9drf3_tTU94sA4620yPEAuuGVLLdn6pHSyb_2I772FD38nesBMSXvuVKdZckd"
        }
    })
    console.log(typeof(data))
    console.log(data);
}

export const UPLOAD_IMAGE = async (img) => {
    const formData = new FormData();
    formData.append('img', img);
}