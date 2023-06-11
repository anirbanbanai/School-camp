

const ExtraSubMyEnrol = ({ m }) => {
    // console.log(m);
    return (

        <>
            <tr className="text-xl font-semibold">
                <td>{m.name}</td>
                <td>
                    <img className="w-[80px]" src={m.img} alt="" />
                </td>
                <td>{m.instructor_name}</td>
            </tr>
            
        </>
        // <div>
        //     <p>{m.name}</p>
        // </div>
    );
};

export default ExtraSubMyEnrol;