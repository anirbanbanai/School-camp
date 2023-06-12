import { Fade } from "react-awesome-reveal";


const ExtraSubMyEnrol = ({ m }) => {
    // console.log(m);
    return (

        <>
            <tr className="text-xl font-semibold">
                <td>
                    <Fade cascade damping={0.1}>
                        {m.name}
                    </Fade>
                </td>
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
            </tr>

        </>
        // <div>
        //     <p>{m.name}</p>
        // </div>
    );
};

export default ExtraSubMyEnrol;