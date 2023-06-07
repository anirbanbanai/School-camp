import { BiUserVoice } from 'react-icons/bi';
import { GrUserAdmin } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';

const SubUsers = ({ m ,i}) => {
    return (
       
          <>
            <tr>
                <th>{i + 1}</th>
                <td>{m.name}</td>
                <td>
                    <img className="w-[100px]" src={m.photo} alt="" />
                </td>
                <td>{m.email}</td>
                <td>
                    <button className="btn btn-warning btn-md text-2xl"><BiUserVoice/></button>
                </td>
                <td>
                    <button className="btn btn-warning btn-md text-2xl"><GrUserAdmin/></button>
                </td>
                <td>
                    <button className="btn btn-warning btn-md text-2xl"><RiDeleteBin6Line/></button>
                </td>
            </tr>
          </>
        
    );
};

export default SubUsers;