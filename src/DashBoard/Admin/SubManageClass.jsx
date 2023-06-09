// import { MdOutlinePending } from 'react-icons/md';
// import { FiDelete } from 'react-icons/fi';
import { RiFeedbackLine } from 'react-icons/ri';
import { FcCancel, FcAcceptDatabase } from 'react-icons/fc';

const SubManageClass = ({main, i}) => {
    const {name, img, instructor_name, available_seats, price} = main;
    return (
       <>
        <tr>
        <th>{i + 1}</th> 
        <td>
            <img className="w-[100px] mx-auto rounded-2xl" src={img} alt="" />
            </td> 
        <td className='text-sm font-semibold'>{name}</td> 
        <td className='text-sm font-semibold'>{instructor_name}</td> 
        <td className='text-sm font-semibold'>{available_seats}</td> 
        <td className='text-sm font-semibold'>{price}</td> 
        <td>Pending</td>
        <td>
        <button className="btn hover:btn-warning btn-sm text-2xl mb-1"><FcAcceptDatabase/></button><br />
        <button className="btn hover:bg-red-500 text-white btn-sm text-2xl mb-1"><FcCancel/></button> <br />
        <button className="btn btn-success btn-sm text-2xl mb-1"><RiFeedbackLine/></button>
        </td>
       
        <th></th> 
      </tr>
       </>
    );
};

export default SubManageClass;