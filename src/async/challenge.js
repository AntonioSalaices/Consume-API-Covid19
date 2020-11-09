const fetchData = require('../utils/fetchData');
const API = 'https://api.covid19api.com/country/mexico';

const anotherFunction = async (url_api) =>{
    try{
        const data = await fetchData(url_api);
        // const character = await fetchData(`${API}${data.results[0].id}`);
        console.log(data[284]);
        
    
    }catch(error)
    {
        console.error(error);
    }
}

anotherFunction(API);
