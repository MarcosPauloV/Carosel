import React, {useState} from 'react';

import { Container, Carosel } from './styles';

import img1 from './Images/image1.jpg'
import img2 from './Images/image2.jpg'

const carrossel = [{ image: img1, text: 'data e descriçao' }, { image: img2, text: 'data e descriçao' }];

const App: React.FC = () => {
  
  const [index, setIndex] = useState(0);
  const {image, text} = carrossel[index];

  const setSlide = (value:number) => {
    setIndex(value);
  }
  return (
    <Container>
      <Carosel>
        <div>
          <img src={image} alt="Imagem do evento" />
        </div>
        <p>{text}</p>
        <div>
          <ul>{
            carrossel.map((_,index)=> <li key={index}>
              <label htmlFor="">
              <input
                checked={true}
                type="radio"
                name="index"
                value={index}
                onClick={setSlide}
                />
              </label>
            </li>)
          }</ul>
        </div>
      </Carosel>
    </Container>);
}

export default App;