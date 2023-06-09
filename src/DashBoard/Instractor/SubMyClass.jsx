

const SubMyClassjsx = ({ m, i }) => {
    return (
    
           <>
           <tr>
                <th>{i+1}</th>
                <td>{m.name}</td>
                <td>
                    <img className="w-[100px]" src={m.img} alt="" />
                </td>
                <td>{m.email}</td>
                <td>{m.price}</td>
                <td>{m.available_seats}</td>
            </tr>
           </>
       
    );
};

export default SubMyClassjsx;