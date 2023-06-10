import { RiDeleteBin5Line } from "react-icons/ri";


const SubMySelec = ({m,i}) => {
    return (
        <>
        <tr>
        <th>{i + 1}</th>
        <th>{m.name}</th>
        <td>
            <img className="w-[80px]" src={m.img} alt="" />
        </td>
        <td>
            {m.instructor_name}
        </td>
        <td>
            ${m.price}
        </td>
        <td>
            <button className="btn bg-red-400 hover:bg-slate-300 btn-outline hover:text-black "><RiDeleteBin5Line className="text-3xl"/></button>
        </td>
      </tr>
        </>
    );
};

export default SubMySelec;