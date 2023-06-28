let city='Pune';

// apiKey='1142a291eec04b3493e52026231205';

// let url='http://api.weatherapi.com/v1/current.json?key=1142a291eec04b3493e52026231205&q='+city;

let url= "https://api.openweathermap.org/data/2.5/weather?q=" +
cityName.value +
"&appid=a4c1960b910777a958021d9d44238da1&units=metric";

async function fetchData(url, method, headers, body) {
    const fetch = await import('node-fetch');
  
    const options = {
      method: method,
      headers: headers,
      body: JSON.stringify(body)
    };
  
    try {
      const response = await fetch.default(url, options);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    }
  }
fetchData(url,'GET',{},)