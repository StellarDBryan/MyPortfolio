import Image from "next/image";
import { Vortex } from "@/components/ui/vortex";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { BoxesCore } from "@/components/ui/background-boxes";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function Home() { 

  /*
  <StarsBackground starDensity={0.001} className="absolute inset-0 bg-neutral-800" />
        
  <ShootingStars starColor="#00FFF7" minDelay={500} maxDelay={2000} starWidth={15} starHeight={2} className="absolute inset-0 bg-transparent" />
  
  <BoxesCore className="absolute inset-0" >
  </ BoxesCore>
  */

  return (
    <div className="">
      {/* Aqui va la Portada y descripción */}
      <section className="relative w-full h-screen border-2"> 
        <HeroHighlight  containerClassName="bg-black">
          <div className="relative z-20 items-center justify-center h-auto w-auto text-white border-2">
            <h1 className="text-[4.5rem] text-left font-bold mb-4">
              Hi, I'm <a className="text-stone-400 hover:text-gray-200">Bryan Sigala</a>!
            </h1>
            <p className="text-h6 mb-6 text-left max-w-2xl">
              I'm a Full-Stack Developer from Chihuahua, Mexico; who loves geek stuff, having challenges and building new projects to learn and grow. 
            </p>
          </div>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            Contact Me 
          </button> 
        </HeroHighlight>
      </section>
      <section>

        {/* Aqui va el About Me  y Tools/Skills */}
        <div>
          <h2>About Me</h2>
          <p>My name is Bryan Aaron Sigala Jaime, I'm a Intern from the Computing Systems Engineer Career specialized as a Full-Stack Developer. </p>
        </div>
        <div>
            <p>Skills</p>
            <ul>
              <li>- Java </li>
              <li>- SQL Databases </li>
              <li>- Figma </li>
              <li>- OOP</li>
              <li>- React.js </li>
            </ul>
          </div>
        
      </section>

      {/* Aqui van los Projects */}
      <section>

          <div>
            <h2>Projects</h2>
            <ul>
              <li>
                <h3>- UniTalent Project </h3>
                <p>FEB-MAY 2024</p>
                <p>Me and some friends build an app for Job Oportunities to Interns, so the enterprises don't have difficulties on contact to the students. </p>
                <ul>
                  <li>- Used Next.js for the Frontend. </li>
                  <li>- Used TailwindCSS for the responsive design of the app. </li>
                  <li>- Design UI prototypes in Figma. </li>
                </ul>
              </li>
            </ul>
          </div>
          
        </section>
          {/* Aqui va la Experience */}
        <section>

        <div>
          <h2>Experiencie</h2>
          <ul>
            <li>
              <h3>Encora Spark Internship Program</h3>
              <p>JUN-AUG 2024</p>
              <p>I was member of the 2024B batch of the Internship Program and participate in some activities for Full-Stack Development. </p>
              <ul>
                <li>- Used Java with Spring Boot for Backend programming. </li>
                <li>- Used React.js for Frontend programming. </li>
              </ul>
            </li>
          </ul>
        </div>

        </section>
    </div>
  );
}
