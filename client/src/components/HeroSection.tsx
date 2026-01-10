import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@assets/stock_images/How To Start Sewing.jpg";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

  return (
    <motion.section
        className="relative px-4 sm:px-6 lg:px-8 min-h-[70vh] sm:min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <motion.img
          src={heroImage}
          alt="Pattern Making Hero"
          className="absolute inset-0 w-full h-full object-cover object-center sm:object-top z-0 brightness-110 contrast-110"
          style={{ scale }}
        />

      <div className="absolute inset-0 bg-black/10 z-10"></div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1
            style={{ fontWeight: '900', fontFamily: 'Times New Roman, sans-serif' }}
            className="text-4xl sm:text-5xl md:text-7xl leading-tight text-gray-900"
          >
            <span className="inline-block bg-black/10 backdrop-blur-md px-4 py-2 rounded-xl">
            Learn. Craft. Freelance.  </span> 
            <br/>
            <span className="inline-block bg-black/10 backdrop-blur-md px-4 py-2 rounded-xl mt-3">
              Garment Patterns Simplified. </span>
          </h1>

          <p
            style={{ fontWeight: '800', fontFamily: 'Arial, sans-serif' }}
            className="text-xl md:text-xl text-blue-800 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
             <span className="inline-block bg-black/10 backdrop-blur-md px-4 py-2 rounded-lg mt-3">
            Experience precision in manual and CAD <br />pattern making, from expert-led training to professional services.</span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">

            {/* Professional Training */}
            <a
              href="#training-section"
              className="text-blue-800 font-extrabold text-lg relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              <span className="font-extrabold"> 
                <span className="inline-block bg-black/10 backdrop-blur-md px-4 py-2 rounded-lg">
                  Professional Training</span> </span>
               <span className="text-base font-extrabold">↓</span>
              <span className="block h-[2px] w-0 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Freelance Services */}
            <a
              href="#freelance-services"
              className="text-blue-800 font-bold text-lg relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              <span className="font-extrabold"> 
              <span className="inline-block bg-black/10 backdrop-blur-md px-4 py-2 rounded-lg"> 
              Freelance Services </span></span>
              <span className="text-base font-extrabold">↓</span>
              <span className="block h-[2px] w-0 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
            </a>

          </div>


        </motion.div>
      </div>
    </motion.section>
  );
}
