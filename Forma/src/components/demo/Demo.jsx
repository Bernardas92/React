// import { useEffect, useState } from "react"

// const Demo = () => {
//     useEffect(()=>{
//         console.log('Efektas veikia')
//     }, [syHi]) // Component
//     const [syHi, setSyHi] = useState('');
//     if (syHi.length === 0) {
//         return (
//             <div className="container">
//                 <button onClick={()=>{setSyHi('Labas')}}>Spausk</button>
//             </div>
//         )
//     } else {
//         return (
//             <div className="container">
//                 <p>{syHi}</p>
//             </div>
//         )
//     }
// }
// export default Demo