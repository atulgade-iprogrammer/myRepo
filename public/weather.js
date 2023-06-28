const cityName = document.getElementById("cityInput");
document.getElementById("search").addEventListener("click", fetchData);
async function fetchData () {
  console.log(cityName, "value", cityName.value);
  // console.log(JSON.stringify({ cityName: cityName }), "JSON");
  const city = cityName.value;
  // console.log(city)
  console.log("city--> ", city);

  try {
    const res = await fetch("/weather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city }),
    });

    const data = await res.json();
    console.log("Response",data);

    const { temp } = data.main;
    const { name } = data;
    const { temp_min } = data.main;
    const { temp_max } = data.main;
    const { speed } = data.wind;
    const { humidity } = data.main;
    const { description } = data.weather[0];
    const { icon } = data.weather[0];

    document.getElementById("temp").innerHTML = temp;
    document.getElementById("cityName").innerHTML = name;
    document.getElementById("minTemp").innerHTML = temp_min;
    document.getElementById("maxTemp").innerHTML = temp_max;
    document.getElementById("speed").innerHTML = speed;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("description").innerHTML = description;

    var icon1 = document.getElementById("img1");
    icon1.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  } catch (error) {
    console.error(error);
    alert('Please Enter a valid city name')
  }

  document.getElementById("cityInput").value = "";
}

