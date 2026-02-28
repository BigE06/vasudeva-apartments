"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  className,
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const ys = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });

  const Comp: any = href ? "a" : "button";

  return (
    <motion.div
      style={{ x: xs, y: ys }}
      onPointerMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        x.set(dx * 0.18);
        y.set(dy * 0.18);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      <Comp
        href={href}
        onClick={onClick}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold",
          "bg-gray-900 text-white shadow-soft ring-1 ring-black/10",
          "hover:shadow-[0_28px_80px_rgba(0,0,0,0.14)] transition-shadow",
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
