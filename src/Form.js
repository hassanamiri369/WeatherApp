import React from 'react'

const Form = (props) => {
  return (
    <>
        <form method='POST' onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="city" />
            <input type="text" name="country" placeholder="country" />
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default Form