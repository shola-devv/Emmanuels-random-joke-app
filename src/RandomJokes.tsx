import {FC, useState} from 'react';
import Axios from 'axios';
 
const Jokes : FC= ()=>{

    const [joke, setJoke] = useState("what is a computer's favourite snack");
    const [punch, setPunch] = useState("computer chips");
    const [emoji, setEmoji] = useState("");
    
    const getJoke = ()=>{
        Axios.get("https://official-joke-api.appspot.com/random_joke").then((res)=>{
            setJoke(res.data.setup);
            setPunch(res.data.punchline);
        })
    }

    return(
        <div>
<div className="top">
    <p className='laugh'>  </p>
  <p className="text"> <span className= 'jo'>EMMANUELS</span>RANDOM<span className="jo">JOKE</span>GENERATOR</p>
  </div>
<div className="bottom">
<p className='story'>{joke}</p>
<p className='line'>-{punch}</p> 
<button className='butt5' onClick={getJoke} >GET A JOKE NOW</button>

<p className='laugh a'>🤣</p>
<p className='laugh b'>😂</p>
<p className='laugh c'>😅</p>
<p className='laugh d'>🤣</p>
<p className='laugh e'>🤣</p>
<p className='laugh f'>😂</p>
<p className='laugh g'>😂</p>
<p className='laugh h'>😅</p>

</div>
</div>
    )
}

export default Jokes