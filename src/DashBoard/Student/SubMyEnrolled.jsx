import ExtraSubMyEnrol from "./ExtraSubMyEnrol";

const SubMyEnrolled = ({m}) => {
    // console.log(m);
    return (

        <>
        {
            m?.map((m)=><ExtraSubMyEnrol key={m._id}  m={m}></ExtraSubMyEnrol>)
        }
        </>
   
    );
};

export default SubMyEnrolled;