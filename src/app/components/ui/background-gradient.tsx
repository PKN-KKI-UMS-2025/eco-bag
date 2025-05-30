import React from "react";
import { motion } from "framer-motion"; // perbaiki dari "motion/react"
import { cn } from "@/app/components/utils/lib";

export const BackgroundGradient = ({
    children,
    className,
    containerClassName,
    animate = true,
  }: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
  }) => {
    const variants = {
      initial: { backgroundPosition: "0 50%" },
      animate: {
        backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
      },
    };
  
    return (
      <motion.div
        variants={animate ? variants : undefined}
        initial="initial"
        animate="animate"
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "relative inline-block rounded-[22px] p-[4px]",
          containerClassName,
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      >
        <div
          className={cn(
            "relative z-10 rounded-[18px]", // biar isi dan gradient match radius-nya
            className
          )}
        >
          {children}
        </div>
      </motion.div>
    );
  };
  