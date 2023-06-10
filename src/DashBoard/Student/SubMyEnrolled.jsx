
const SubMyEnrolled = ({ m,i}) => {
    const { name, img, instructor_name, price } = m;
    return (
        <>
            <tr>
                <th>{i+1}</th>
                <td>{name}</td>
                <td>{instructor_name}</td>
                <td>
                    <img className="w-[80px]" src={img} alt="" />
                </td>
                <td>{price}</td>
            </tr>
        </>
    );
};

export default SubMyEnrolled;