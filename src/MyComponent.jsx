import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { useState } from 'react';

function MyComponent() {

    const variants = {
        add: {
            backgroundColor: '#ff0000',
            color: '#000',
            scale: 0.8,
            transition: {
                duration: 2
            }
        },
        even: {
            backgroundColor: '#003333',
            color: '#fff',
            scale: 1.3,
            transition: {
                duration: 1
            }
        }
    };
    const [counter, setCounter ] = useState(0);
    const x = useMotionValue(0)
    const background = useTransform(
        x,
        [-0, 0, 900],
        ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
    )
    return (
        <>
            <motion.h3>Motion</motion.h3>
            <motion.div
                className="box"
                transition={{duration: 2}}
                animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
            />
            <motion.h3>Motion  buton</motion.h3>
            <div>
                <motion.div
                    className='box-button'
                    animate= {counter % 2  === 0 ? 'add': 'even' }
                    variants={variants}
                >
                    {counter}
                </motion.div>
                <button  className='button-counter' onClick={() => setCounter (counter => counter + 1)}>
                        Dale!
                </button>
            </div>


            <motion.h3>Motion  drag </motion.h3>
            <div style={{display: 'flex', flexDirection:'column', gap: '10px'}}>
                <motion.div
                    className= 'box'
                    drag
                    // drag='x'
                    // dragMomentum={false}
                    dragConstraints={{
                    top: -50,
                    left: -50,
                    right: 50,
                    bottom: 50,
                    }}
                >
                </motion.div>
            </div>

            <motion.h3>Motion  MotionValues </motion.h3>

            <div style={{display: 'flex', flexDirection:'column', gap: '10px'}}>
                <motion.div
                    style={{background, x}}
                    className= 'box'
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                >
                </motion.div>
            </div>

        </>
    );
}

export default MyComponent;
