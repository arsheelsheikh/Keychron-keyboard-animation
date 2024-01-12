import {motion} from 'framer-motion'

function Loader({setIsLoading}) {
    const keyboardName = {
        init:{
            opacity: 0,
        },
        visible:{
            opacity:1,
            transition:{
                duration:1,
            }
        }
    }
    
  return (
    <motion.div className='loader'>
        <motion.h1 
        className='keyboard-name' 
        variants={keyboardName} 
        initial="init" 
        animate="visible"
        layoutId="name-move" // layoutId for smooth transition. connection to Loader App
        onAnimationComplete={() => setIsLoading(false)}
        >
            Keychron <span>K7</span> 65 percent
        </motion.h1>
    
    </motion.div>
  )
}

export default Loader