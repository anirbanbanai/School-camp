import { GrUpdate } from "react-icons/gr";
import { RiFeedbackLine } from "react-icons/ri";


const SubMyClassjsx = ({ m, i }) => {
    console.log(m);
    return (

        <>
            <tr>
                <th>{i + 1}</th>
                <td>{m.name}</td>
                <td>
                    <img className="w-[100px]" src={m.img} alt="" />
                </td>
                <td>{m.email}</td>
                <td>{m.price}</td>
                <td>{m.available_seats}</td>
                <td>55</td>
                <td>
                    {
                        m.role === 'aprove' && <h3 className="text-xl text-green-500">Approve</h3> ||  m.role ==='deny' && <h3 className="text-xl text-red-500">deny</h3> || <h3 className="text-xl text-yellow-500">Pending..</h3>
                    }
                </td>
                <td>
                  { m.role ==='deny' ?  <label htmlFor="my_modal_6" className="btn"><RiFeedbackLine className="text-3xl"/></label>:<button className="btn btn-success btn-outline "><GrUpdate className="text-3xl"/></button>  }
                 

                    

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <p className="text-center text-red-500">Not a Valid Class . </p>
                            <div className="modal-action">
                                <label htmlFor="my_modal_6" className="btn">Close!</label>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </>

    );
};

export default SubMyClassjsx;