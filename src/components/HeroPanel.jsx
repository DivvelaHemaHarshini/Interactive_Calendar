import { motion } from "framer-motion";
export default function HeroPanel({ month }) {
  const monthImages = {
    0: "january.jpg",
    1: "february.png",
    2: "march.jpeg",
    3: "april.webp",
    4: "may.jpg",
    5: "june.jpg",
    6: "july.avif",
    7: "august.jpg",
    8: "september.jpg",
    9: "october.jpg",
    10: "november.avif",
    11: "december.jpg",
  };

  const image = monthImages[month.getMonth()];

  return (
<div className="relative h-48 md:h-64 overflow-hidden">      
      {/* IMAGE */}
      <motion.img
        key={month.getMonth()} // important for animation
        src={image}
        alt="month"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* BLUE DIAGONAL SHAPE */}
      <div className="absolute bottom-0 left-0 w-full h-18 bg-blue-500 clip-diagonal"></div>

      {/* TEXT */}
      <div className="absolute bottom-6 right-6 text-white text-right">
        <p className="text-sm opacity-80">
          {month.getFullYear()}
        </p>
        <h2 className="text-2xl font-bold uppercase">
          {month.toLocaleString("default", { month: "long" })}
        </h2>
      </div>
    </div>
  );
}