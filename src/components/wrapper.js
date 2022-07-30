import { useState } from 'react';

import ImageComponent from "./image-component";
import Socials from "./social-component";
import TextComponent from "./text-component";

export default function WrapperComponent(){
    const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle)
  }

    return (
        <div className='wrapper-row'>
            <div>
                <ImageComponent />
            </div>
            <div>
                <TextComponent clickHandler={clickHandler} />
                {toggle && <Socials clickHandler={clickHandler} />}
            </div>
        </div>
    )
}