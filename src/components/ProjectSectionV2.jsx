"use client";
import styles from "./ProjectSectionV2.module.scss";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useDimension from "../useDimension";

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg"
]

export default function ProjectsSectionV2() {

    const container = useRef(null);
    const { height } = useDimension();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    return(
        <main className={styles.main}>
                <div ref={container} className={styles.gallery}>
                    <Column images={[images[0], images[1], images[2]]} y={y}/>
                    <Column images={[images[3], images[4], images[5]]} y={y2}/>
                    <Column images={[images[6], images[7], images[8]]} y={y3}/>
                    <Column images={[images[9], images[10], images[11]]} y={y4}/>
                </div>

        </main>
    )

}

const Column = ({ images, y=0 }) => {
    return (
        <motion.div style={{y}} className={styles.column}>
            {
                images.map((src, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <Image
                            src={`/images/${src}`}
                            fill
                            alt="image"
                        />
                    </div>
                ))
            }
        </motion.div>
    )
}