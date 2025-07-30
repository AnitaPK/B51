import { useEffect } from 'react';


function WelcomeGreetings({ name }) {

 const msg = `Hi, ${name}!`;     // Calculates output

 useEffect(() => {
   document.title = `Welcome to you ${name}`;    // Side-effect!
 }, [name]);


 return (
 <div>{msg}</div>         // Calculates output
 )
}

export default WelcomeGreetings
