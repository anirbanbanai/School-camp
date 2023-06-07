
const SubClasses = ({main}) => {
  
    return (
        <div>
            <div className='border-2 m-5 p-5 w-3/4 rounded-xl mx-auto text-center' >
                        <p className="text-xl font-semibold">{main.name}</p>
                        <h4>Instractor: <b>{main.instructor_name}</b></h4>
                        <img className="w-2/4 mx-auto rounded-xl" src={main.img} alt="" />
                        <h3>{main.description}</h3>
                        <p>price: ${main.price}</p>
                        <p>Available seat : {main.available_seats}</p>
                        <button className="btn btn-warning btn-outline">Selecet</button>
                    </div>
        </div>
    );
};

export default SubClasses;