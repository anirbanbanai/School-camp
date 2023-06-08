
const AddClass = () => {
    return (
        <div className="m-10">
            <h5 className="text-4xl font-semibold text-center">Add Class</h5>
            <form >
               <div className="flex">
               <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Class name</span>
                    </label>
                    <input type="text" placeholder="Class Name" className="input input-bordered w-full " />
                  </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Instructor name</span>
                    </label>
                    <input type="text" placeholder="Instructor Name" className="input input-bordered w-full " />
                  </div>
               </div>
               <div className="flex justify-between">
               <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor email</span>
                    </label>
                    <input type="text" placeholder="Email" className="input input-bordered w-full " />
                  </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" placeholder="price" className="input input-bordered w-full " />
                  </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Avilable seat</span>
                    </label>
                    <input type="number" placeholder="avilable seat" className="input input-bordered w-full " />
                  </div>
               </div>
               <div className="mt-5">
               <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
               </div>
              <div className="flex justify-center ">
              <input className="btn btn-warning mx-auto" type="submit" value="Submit" />
              </div>
            </form>
        </div>
    );
};

export default AddClass;