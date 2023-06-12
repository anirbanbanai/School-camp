import group from '../assets/img/3.png'

const ExtraSection = () => {
    return (
        <div>
           <h5 className='text-5xl font-bold text-center'>Our Purpose</h5>
         <div className="m-5 grid md:grid-cols-3">
            <div className='col-span-2'>
                <img src={group} alt="" />
                <div className='m-5'>
                    <h3 className="text-4xl font-bold ">Make learning fun  and make the lessons learned last</h3>
                    <p className="pt-5">
                        High-quality programmes of outdoor education for schools and other educational establishments have been at the heart of what we do at Essex Outdoors for over 50 ☺years. <br /><br />


                        Why do schools keep coming back year after year? Because we offer young people far more than just exhilarating outdoor activities  our professionally tailored and passionately delivered day, residential and expedition programmes challenge and inspire participants to learn and develop in new and exciting ways. <br /><br />

                        Were proud of the excellent relationships we build with our educational customers enabling real progression and development for pupils through continuous refinement and reinvestment into new programmes, activities and facilities. We look forward to welcoming you to our outdoor family.
                    </p>
                </div>
            </div>
            <div>
                <form className='bg-slate-300 p-5 m-4'>
                    <h3 className='text-3xl font-bold'>Request a Quate</h3>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" placeholder="subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Massage"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <hr  className='border-4 border-dashed'/>
       </div>
    );
};

export default ExtraSection;