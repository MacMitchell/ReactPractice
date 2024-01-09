import React from "react"
import { motion } from "framer-motion"
const Logo: React.FC<{}> = function ({ }) {
    return (
        <motion.a whileHover={{ rotateY: 180 }} className="Logo" href="../">
            <svg width={130} height={130}>
                <path d='M 40 80 L 100 10 L 130 0 L 120 30 L 50 90 C 60 100 60 110 70 100 C 70 110 80 120 70 120 A 14.2 14.2 90 0 1 60 130 A 50 50 90 0 0 40 100 Q 35 99 35 105 T 20 118 T 12 110 T 25 95 T 30 90 A 50 50 90 0 0 0 70 A 14.2 14.2 90 0 1 10 60 C 10 50 20 60 30 60 C 20 70 30 70 40 80 M 100 10 L 100 30 L 120 30 L 102 28 L 100 10' />
            </svg>
        </motion.a>
    )
}

export default Logo;