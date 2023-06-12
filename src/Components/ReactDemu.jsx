// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import useAproveClasses from '../Hooks/useAproveClass';

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// function ReactDemo() {
//   const [selectedId, setSelectedId] = useState(null);
//   const [classes] = useAproveClasses()
//   console.log(classes);
//   // const items = [
//   //   { id: 1, subtitle: 'Subtitle 1', title: 'Title 1' },
//   //   { id: 2, subtitle: 'Subtitle 2', title: 'Title 2' },
//   //   // Add more items as needed
//   // ];

//   return (
//     <div className='pt-32 text-center'>
//       {classes.map(item => (
//         <motion.div
//           key={item._id}
//           layoutId={item._id}
//           onClick={() => setSelectedId(item.id)}
//         >
//           <motion.h5>{item.name}</motion.h5>
//           <motion.h2>{item.instructor_name}</motion.h2>
//           <motion.h2>
//             <img src={item.img} alt="" />
//           </motion.h2>
//         </motion.div>
//       ))}

//       <AnimatePresence>
//         {selectedId && (
//           <motion.div layoutId={selectedId}>
//             <motion.h5>fdsfdsfcsddfsadas</motion.h5>
//             <motion.h2>{classes[selectedId - 1].title}</motion.h2>
//             <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default ReactDemo;



const ReactDemu = () => {
  const [classes] = useAproveClasses()
  const [selectedId, setSelectedId] = useState(null)
  return (
    <div className='pt-20'>
      {classes.map(item => (
        <motion.div layoutId={item.id} key={item._id} onClick={() => setSelectedId(item.id)}>
          <motion.h5>{item.name}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{classes.subtitle}</motion.h5>
            <motion.h2>{classes.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReactDemu;


