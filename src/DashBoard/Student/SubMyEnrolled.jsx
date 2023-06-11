import ExtraSubMyEnrol from "./ExtraSubMyEnrol";

const SubMyEnrolled = ({m}) => {
    console.log(m);
    return (

        <>
        {
            m?.map((m)=><ExtraSubMyEnrol key={m._id}  m={m}></ExtraSubMyEnrol>)
        }
        </>
        // <div>
        //     <div>
           
        //     </div>
        //    {/* {
        //     m?.map(m=><ExtraSubMyEnrol key={m._id} m={m}></ExtraSubMyEnrol>)
        //    } */}
        // </div>
    );
};

export default SubMyEnrolled;