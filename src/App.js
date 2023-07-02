import React from "react"
import Joke from "./Joke.js"
import jokesData from "./jokesData.js"

function App () {
  const jokeElements = jokesData.map(joke => {
    return <Joke key={joke.jokeID} setup={joke.setup} punchline={joke.punchline}/>
  });

  return (
    <div>
      {jokeElements}
    </div>
  );
}

export default App


{/* <Joke setup="Why did the chicken cross the road?" punchline="To get to the other side." />      
      <Joke setup="What's the best thing about Switzerland?" punchline="I don't know, but the flag is a big plus." />      
      <Joke setup="Helvetica and Times New Roman walk into a bar." punchline='"Get out of here!" shouts the bartender. "We don&#39;t serve your type."' />      
      <Joke setup="Hear about the new restaurant called Karma?" punchline='There&#39;s no menu: You get what you deserve.' />      
      <Joke setup="Did you hear about the actor who fell through the floorboards?" punchline='He was just going through a stage.' />      
      <Joke punchline="My wife told me to stop impersonating a flamingo. I had to put my foot down." /> */}