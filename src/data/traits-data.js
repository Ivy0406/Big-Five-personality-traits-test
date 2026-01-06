import axios from "axios";

const TRAITS_API_URL = "https://raw.githubusercontent.com/hexschool/js-training-task/master/api/BigFive.json";

const getTraitsData = async () => {
  try {
    const response = await axios.get(TRAITS_API_URL);
    return response.data;
  }catch (error) {
    console.log(error);
    return null;
  }
};

export default getTraitsData;   