// import {
//     motion,
//     useMotionValue,
//     useTransform,
//   } from "framer-motion"
  
//   export const MyComponent = () => {
//     const x = useMotionValue(0)
//     const background = useTransform(
//       x,
//       [-100, 0, 100],
//       ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
//     )
  
//     return (
    
//     )
//   }

  
//   const ReactDemu = () => {
//     return (
//         <div>
//              <motion.div style={{ background }}>
//         <motion.div
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           style={{ x }}
//         >
//           <Icon x={x} />
//         </motion.div>
//       </motion.div>
//         </div>
//     );
//   };
  
//   export default ReactDemu;