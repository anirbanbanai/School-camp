
import { keyframes } from '@emotion/react';
import {  Reveal } from 'react-awesome-reveal';

const ReactDemu = () => {
    const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
    return (
        <div className='pt-32'>
            <Reveal keyframes={customAnimation}>
              <div className='text-center'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, officiis!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, officiis!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, officiis!</p>
              </div>
            </Reveal>
        </div>
    );
};

export default ReactDemu;