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
    var disabledDate=[];
    // console.log(data.reservedDate)
    for(var i in data.reservedDate){
        for(var j in data.reservedDate[i]){
            console.log(data.reservedDate[i][j])
            disabledDate.push(new Date(data.reservedDate[i][j]))
            }
    }
    // console.log(disabledDate)
    return {'data':data,
    'disabledDate':disabledDate
    };
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
    const { data } = await axios.get("https://objectstorage.kr-central-1.kakaoi.io/v1/eb454a58725f4cf4ba059729077e409b/bella-test/kube-image/춘식이방.png",
    {
        headers:{
            "X-Auth-Token":"gAAAAABj0Sop7rSDXM7UNo4mLHS7IrMBiWDzFJI9qVNkfMs7Avmftqe8n0NNXMjQXon789_KjxY3sB5K-aT6FqTepONdec06iveyFO3mggYZd30vQSqjeiLupMoy7N_HH7qpFoBXs8n86wTpCZSpPkBAUpd2PYehsfT8TLgcFM9goFqh6lH6fGoJvXCKIYOnxZcQ_rKe4Taw"
        },
        responseType:"blob",
    })
    console.log(data)
    return(data);
}

export const UPLOAD_IMAGE = async (img) => {
    // const formData = new FormData();
    // formData.append('img', img);

    const { data } = await axios.put("https://objectstorage.kr-central-1.kakaoi.io/v1/eb454a58725f4cf4ba059729077e409b/bella-test/kube-image/test1.png",
    {
        headers:{
            "X-Auth-Token":"gAAAAABj0Sop7rSDXM7UNo4mLHS7IrMBiWDzFJI9qVNkfMs7Avmftqe8n0NNXMjQXon789_KjxY3sB5K-aT6FqTepONdec06iveyFO3mggYZd30vQSqjeiLupMoy7N_HH7qpFoBXs8n86wTpCZSpPkBAUpd2PYehsfT8TLgcFM9goFqh6lH6fGoJvXCKIYOnxZcQ_rKe4Taw"
        },
    });
    console.log(data);
    return data;
}