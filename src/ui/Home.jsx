import CreateUser from "../features/user/CreateUser.jsx";
import {useSelector} from "react-redux";
import Button from "./Button.jsx";
import { useTypewriterEffect } from '../services/useTypewriterEffect.jsx';

function Home() {
  const sentences = [
    "Straight out of the oven, straight to you.",
    "Enjoy our delicious pizza.",
    "Fresh ingredients, unbeatable taste."
  ];
  const animatedText = useTypewriterEffect(sentences, 180, 50, 2000);
  const username = useSelector(state=>state.user.username);

  return (
    <div className='text-center my-10 sn:my-16 px-4'>
      <h1 className='text-xl font-semibold text-center mb-4 md:text-3xl'>
        The best pizza.
        <br />
        <div style={{minHeight: "39.5px"}}>
          <span className='text-yellow-500 text-lg'>
            {animatedText}
          </span>
        </div>
      </h1>

      {username === "" ? <CreateUser/> : <Button to="/menu" type='primary'>Continue ordering</Button>}
    </div>
  );
}

export default Home;
