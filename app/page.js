import Image from "next/image";
import { Vortex } from "@/components/vortex";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Aqui va la Portada y descripción */}
      <section>
        <Vortex />
        <div>
          <h1>Bryan Sigala</h1>
          <p>Hi I'm Bryan Sigala, a Full-Stack Developer from Chihuahua, Mexico. I love having challenges and building new projects</p>
        </div>
        <button>Contact Me</button>
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
              <p>I was member of the 2024B batch of the Internchip Program and participate in some activities for Full-Stack Development. </p>
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
