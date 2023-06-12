import img1 from '../assets/img/group-single-2.jpg'
import img2 from '../assets/img/group-single-3.jpg'
import img3 from '../assets/img/group-single-4.jpg'
import img4 from '../assets/img/group-single-5.jpg'

const Expre = () => {
    return (
        <div className='mt-5'>
            <h4 className="text-4xl font-bold text-center">We offer experiences for...</h4>
            <div className='grid sm:grid-cols-2'>
                <div className='m-5 p-5 bg-slate-200 rounded-2xl'>
                    <img className='mx-auto' src={img1} alt="" />
                    <h3 className='text-2xl font-semibold text-center mt-3 mb-2'>Summer Camping</h3>
                    <p>If you are looking for fun, exciting and challenging outdoor adventure activity centre, look no further than Mill on the Brue! You can experience unforgettable outdoor activities, scale heights, paddle the river and explore underground.</p>
                </div>
                <div className='m-5 p-5 bg-slate-200 rounded-2xl'>
                    <img className='mx-auto' src={img2} alt="" />
                    <h2 className='text-2xl font-semibold mt-3 mb-2 text-center'>School Tips</h2>
                    <p>Fun, challenging and rewarding. A great way to grow and bring a team together, to help build working relationships.On an event with us you will have access to multiple activities,</p>
                </div>
                <div className='m-5 p-5 bg-slate-200 rounded-2xl '>
                    <img className='mx-auto' src={img3} alt="" />
                    <h2 className='text-2xl font-semibold mt-3 mb-2 text-center'>Team Days</h2>
                    <p>Summer sunshine is on the horizon and so planning your corporate away day begins. What better way to usher in the warmer weather than booking a corporate summer party outdoors.</p>
                </div>
                
                <div className='m-5 p-5 bg-slate-200 rounded-2xl  m'>
                    <img className='mx-auto' src={img4} alt="" />
                    <h2 className='text-2xl font-semibold mt-3 mb-2 text-center'>Parties</h2>
                    <p>Our outdoor learning experiences are available across the UK and designed to develop essential life skills.Our award-winning school trips help students grow, discover</p>
                </div>
            </div>
        </div>
    );
};

export default Expre;