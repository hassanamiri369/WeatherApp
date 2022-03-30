import React from 'react'

const Weather = ({city , temperature , description , country , error}) => {

  const imageCloud = <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpYOC2K8tp8zXFQAVytHieAUBuO2WrNgjdk7GRaznZ6-naZM3F7seOFm8UFQ20QDo7Tc&usqp=CAU' alt='clouds'/>
  
  const matchValues = ()=>{
    if(description){
      const weatherDescription = description.split(" ")
      const cloudyData = ['clouds' , 'cloud' , 'overcast' , 'cloudy']
      for(var i = 0 ; i<weatherDescription.length ; i++){
        if(cloudyData.includes(weatherDescription[i])){
          // console.log(weatherDescription[i] , "you have a match")
          return imageCloud
        }
      }
  
    }
  }


  return (
    <>
      <div>
        {city && country && <p>city : {city} ,<br/> country : {country}</p>}
        {temperature && <p>Temperature : {temperature} C</p>}
        {description && <p>Description : {description}</p>}
        {error && <p>{error}</p>}
        {description && matchValues()}
      </div>
    </>
  )
}

export default Weather