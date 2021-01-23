import axios from 'axios';

export async function getData()  {
    const response = await axios.get("http://localhost:5000/get-data");
    const data = response.data
    return data;
}

export async function postData(data)  {
    await axios.post("http://localhost:5000/post-data", data);
}

