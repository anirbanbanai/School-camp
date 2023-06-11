
const SubPopularClass = ({m}) => {
    return (
        <div className="border-2 m-4 p-5">
            <h4 className="text-center">{m.name}</h4>
            <img className="w-[250px]" src={m.img} alt="" />
        </div>
    );
};

export default SubPopularClass;