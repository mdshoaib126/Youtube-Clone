import axios from "axios";
const base_url = "https://youtube-v31.p.rapidapi.com";
export const options = {
  params: { 
    maxResults: "51", 
    part: 'snippet,id',
    regionCode: 'IN',

  },
  headers: {
    "X-RapidAPI-Key": "YOUR_RAPID_API_KEY",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    return data;
  } catch (error) {
    console.log("error in fetch api");
  }
};
export default fetchApi;
