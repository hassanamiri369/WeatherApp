import React from "react"
import Form from "./Form"
import Weather from "./Weather.js"

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
// const key = "f0b1638f86b0cd52f52c4ddf788c7f39"

function App() {
  const [weather , setWeather] = React.useState([])
  const [city , setCity] = React.useState("")
  const [country , setCountry] = React.useState("")

  // console.log(process.env);

  const fetchData = async (e)=> {
    e.preventDefault()
    // const city = e.target.elements.city.value
    // const country = e.target.elements.country.value
    
      const apiData = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => data)
      

      if(city && country){
        setWeather({
          data : apiData,
          city : apiData.name ,
          country : apiData.sys.country ,
          temperature :Math.round((((apiData.main.temp * 9/5 - 459.67) - 32 ) * 5/9)) ,
          // temperature : Math.round(apiData.main.temp * 9/5 - 459.67),
          description : apiData.weather[0].description,
          error : ""
        }
      )
      }else{
        setWeather({
          data : "",
          city : "",
          country : "" ,
          temperature : "",
          description : "",
          error : "Please Enter a City and Country"
        }
      )
      }

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}

  }
  return (
    <>
     <div>
        <h1>Weather App</h1>
        {/* <Form getWeather={fetchData}/> */}

        <form method='POST' onSubmit={fetchData}>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="city" />
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="country" />
            <button type='submit'>Submit</button>
        </form>

        <Weather 
          city={weather.city}
          country = {weather.country}
          temperature ={weather.temperature}
          description = {weather.description}
          error = {weather.error}
        />
        {console.log(weather)}
     </div>
    </>
  );
}

export default App;
