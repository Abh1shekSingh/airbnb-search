import axios from 'axios';
const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary"
const options = {
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
  },
  headers: {
    'X-RapidAPI-Key': 'e01e91e7d8msh1a4c5f9cc30e96bp1a8d98jsneb73548a1580',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


export const getHotels = async () => {

    try {
        const {data:{data}} = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.error(error);
    }
}