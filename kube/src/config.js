import axios from 'axios'

const BASE_URL = 'http://localhost:8081';

export const CREATE_BOARD_PAGE = async (req) => {
    console.log(req)
    await axios.post(`${process.env.REACT_APP_API_URL}/api/posts`,req)
    .then((response) => {
    console.log(response);
    })
    .catch((error) => {
    console.log(error);
    });
};

export const GET_BOARD_PAGE = async (boardId) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/${boardId}`);
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
    const  data  = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts`);
    return data;
}

export const CREATE_RSVD = async (req) => {
    console.log(req)
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/reservation/`,req);
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
            "X-Auth-Token":"gAAAAABj0yy6wH8jmVTXShLxW3-5FxTP0nnrcCjqBlwHyWs58VX3YDyMoPumVVLYML1tIJ6ELu4nnDkQrEd62KAV1K3SHUCakNpHRVd4ha6AUyt5wbD4bHH-Wbn6Rn-GBefDPP7XOKMABx_LEdYL_-F4WEJ756w8l30Elf_dJpFJut92z6hsYvn68ZAx7PxlVXXIaOH6WR_G"
        },
        responseType:"blob",
    })
    console.log(data)
    return(data);
}

export const UPLOAD_IMAGE = async (img) => {
    // const formData = new FormData();
    // formData.append('img', img);

    const { data } = await axios.put("https://objectstorage.kr-central-1.kakaoi.io/v1/eb454a58725f4cf4ba059729077e409b/bella-test/kube-image-test",
    {
        headers:{
            "X-Auth-Token":"gAAAAABj0yy6wH8jmVTXShLxW3-5FxTP0nnrcCjqBlwHyWs58VX3YDyMoPumVVLYML1tIJ6ELu4nnDkQrEd62KAV1K3SHUCakNpHRVd4ha6AUyt5wbD4bHH-Wbn6Rn-GBefDPP7XOKMABx_LEdYL_-F4WEJ756w8l30Elf_dJpFJut92z6hsYvn68ZAx7PxlVXXIaOH6WR_G",
            'Content-Type': 'application/directory', 
            'X-Object-Meta-Company': 'kakao enterprise'
        },
    })
    console.log(data)
    return data;
}