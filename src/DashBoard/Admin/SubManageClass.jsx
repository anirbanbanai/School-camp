import { MdOutlinePending } from 'react-icons/md';
import { FiDelete } from 'react-icons/fi';
import { RiFeedbackLine } from 'react-icons/ri';

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
        <td> <button className="btn btn-warning btn-sm text-2xl"><MdOutlinePending/></button> </td>
        <td> <button className="btn btn-warning btn-sm text-2xl"><FiDelete/></button> </td>
        <td> <button className="btn btn-warning btn-sm text-2xl"><RiFeedbackLine/></button> </td>
        <th></th> 
      </tr>
       </>
    );
};

export default SubManageClass;