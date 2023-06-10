import { GrUpdate } from "react-icons/gr";


const SubMyClassjsx = ({ m, i }) => {
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
                        m.role === 'aprove' ? <h3 className="text-xl text-green-500">Approve</h3> :<h3 className="text-xl text-red-500">Pending..</h3>  
                    }
                </td>
                <td>
                    <button className="btn btn-success btn-outline"><GrUpdate/></button>
                </td>
            </tr>
        </>

    );
};

export default SubMyClassjsx;