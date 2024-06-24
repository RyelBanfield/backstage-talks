"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import Dark_Blue from "@/images/Dark_Blue.jpg";
import Light_Blue from "@/images/Light_Blue.jpg";
import Orange from "@/images/Orange.jpg";
import Red from "@/images/Red.jpg";
import Yellow from "@/images/Yellow.jpg";

const images = [Yellow, Red, Light_Blue, Orange, Dark_Blue];

export default function Home() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fifthRef = useRef(null);

  const isFirstInView = useInView(firstRef, { amount: 0.5 });
  const isSecondInView = useInView(secondRef, { amount: 0.5 });
  const isThirdInView = useInView(thirdRef, { amount: 0.5 });
  const isFourthInView = useInView(fourthRef, { amount: 0.5 });
  const isFifthInView = useInView(fifthRef, { amount: 0.5 });

  const getBackgroundColor = () => {
    if (isFirstInView) return "#ffbe00";
    if (isSecondInView) return "#e30512";
    if (isThirdInView) return "#00c1b5";
    if (isFourthInView) return "#ff651a";
    if (isFifthInView) return "#1d3fbb";
  };

  return (
    <>
      <motion.div
        initial={{ backgroundColor: "#ffbe00" }}
        animate={{ backgroundColor: getBackgroundColor() }}
        className="fixed inset-0 -z-50"
      ></motion.div>

      {[firstRef, secondRef, thirdRef, fourthRef, fifthRef].map(
        (ref, index) => (
          <section key={index} className="h-screen py-52">
            <div ref={ref} className="aspect-[9/16] max-h-[100%] w-full">
              <Image
                src={images[index]}
                alt="image"
                className="h-full w-full object-cover px-12"
              />
            </div>
          </section>
        ),
      )}
    </>
  );
}
