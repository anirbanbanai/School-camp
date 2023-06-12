
import { Fade} from 'react-awesome-reveal';


const ExtraInstrucor = ({ m }) => {
  
    return (
        <div className='border-4 p-2 m-2 mx-auto'>
            <Fade cascade damping={0.2}>
            <p className='text-xl text-center font-semibold'>Name: {m.name}</p>
                <h3 className='text-center'>Email : {m.email}</h3>
                <img className='h-[250px] mx-auto' src={m.photo} alt="" />
                <h4 className='font-bold text-center'>{m.ins}</h4>
            </Fade>
           
        </div>
    );
};

export default ExtraInstrucor;