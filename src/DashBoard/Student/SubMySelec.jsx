import { RiDeleteBin5Line } from "react-icons/ri";
import { CgEnter } from 'react-icons/cg';
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const SubMySelec = ({ m, i }) => {
 
    return (
        <>
            <tr>
                <th>{i + 1}</th>
                <th>
                <Fade cascade damping={0.1}>
                        {m.name}
                    </Fade>
                   </th>
                <td>
                <Fade cascade damping={0.1}>
                <img className="w-[80px]" src={m.img} alt="" />
                    </Fade>
                   
                </td>
                <td>
                <Fade cascade damping={0.1}>
                    {m.instructor_name}
                    </Fade>
                </td>
                <td>
                    ${m.price}
                </td>
                <td>
                  {m.role === 'enrol'? <h3 className="text-green-500 text-xl font-bold">Enrolled</h3> :  <Link to='/dash/mypay'>
                  <button  className="btn btn-warning btn-outline"><CgEnter className="text-3xl" /></button>
                  </Link>}
                </td>
                <td>
                    <button className="btn hover:bg-red-400  btn-outline hover:text-black "><RiDeleteBin5Line className="text-3xl" /></button>
                </td>
            </tr>
        </>
    );
};

export default SubMySelec;