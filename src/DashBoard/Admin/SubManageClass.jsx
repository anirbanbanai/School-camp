import { MdOutlinePending } from 'react-icons/md';
import { FcDeleteColumn } from 'react-icons/fc';
import { RiFeedbackLine } from 'react-icons/ri';

const SubManageClass = ({main, i}) => {
    const {name, img, instructor_name, available_seats, price} = main;
    return (
       <>
        <tr>
        <th>{i + 1}</th> 
        <td>
            <img className="w-2/4 mx-auto" src={img} alt="" />
            </td> 
        <td>{name}</td> 
        <td>{instructor_name}</td> 
        <td>{available_seats}</td> 
        <td>{price}</td> 
        <td> <button className="btn btn-warning btn-sm text-sm"><MdOutlinePending/></button> </td>
        <td> <button className="btn btn-warning btn-sm text-sm"><FcDeleteColumn/></button> </td>
        <td> <button className="btn btn-warning btn-sm text-sm"><RiFeedbackLine/></button> </td>
        <th></th> 
      </tr>
       </>
    );
};

export default SubManageClass;