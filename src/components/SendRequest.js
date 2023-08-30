import axios from "axios";

export default async function sendRequest(url) {
  try {
    const resp = await axios.get(url);

    return resp.data;
  } catch (error) {
    console.log(error)
    return {}
  }
}