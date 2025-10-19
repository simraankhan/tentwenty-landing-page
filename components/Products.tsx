"use client"

import { motion } from "motion/react"

const Products = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-2">
            <motion.h1 className="font-semibold text-2xl sm:text-4xl mb-3" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 2, y: 0 }} transition={{ duration: 2, ease: "easeOut" }}>
                Quality Products
            </motion.h1>
            <motion.p className="text-gray-500 text-xs sm:text-sm" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 2, y: 0 }} transition={{ duration: 2, ease: "easeOut" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci laboriosam omnis facere animi est quis distinctio reiciendis ex quos quo sapiente voluptatem similique, vero ab? Ipsam atque porro soluta.
            </motion.p>
        </div>
    )
}

export default Products