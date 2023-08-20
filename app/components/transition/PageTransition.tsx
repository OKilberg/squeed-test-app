import {motion} from 'framer-motion'
import { forwardRef } from 'react';


function PageTransition({ref, children}){
    const initialPos = {x:'100%'};
    const endPos = {x:0};
    const transition = { duration: 0.25, ease: 'easeIn'};
    return (
        <motion.div
            ref={ref}
            initial={initialPos}
            animate={endPos}
            transition={transition}
        >
            {children}
        </motion.div>
    )
}

export default forwardRef(PageTransition)
