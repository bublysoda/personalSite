import "./aboutme.css"
import { useState } from "react"

export default function AboutMe() {
  const [openSection, setOpenSection] = useState(null)
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="wholePage">

      <div className="childhood">
        <div className="title" onClick={() => toggleSection('childhood')}>Childhood</div>
        {openSection === 'childhood' && <div className="text">
          My journey into technology started at five years old with World of Warcraft, where I unknowingly began developing problem-solving skills through gaming. By seven I had already overclocked the family computer, my parents just knew it kept shutting down and couldn't figure out why.
          <br></br><br></br>
          In elementary school I taught myself Batch scripting, mostly to write harmless programs that would mess with the school computers, like endlessly opening the disc drive. It was mischievous, but it was my first real taste of what code could do. By 6th grade I decided to channel that energy into something more constructive and started building Raspberry Pi projects, most notably <a href="https://medium.com/@stacha.l/magic-mirror-my-first-ever-raspberry-pi-project-ced7985ff1a" className="clickable" target="_blank">Magic Mirrors</a> for myself, my family, and friends.
          <br></br><br></br>
          From there I moved into more serious languages, studying C# and C++ with a focus on game development. I also learned 3DS Max, Maya, and Blender to create my own 3D models for use in Unity and Unreal Engine 4. One of my favorite projects was a Super Monkey Ball inspired game featuring a large round Sonic the Hedgehog collecting chili dogs and growing bigger with each one he grabbed. What eventually drew me to web development was the balance it offered between artistic expression and analytical problem solving. I can make something visually compelling with CSS while also tackling real technical challenges with JavaScript and backend development. Outside of tech I swam competitively, played baseball, and spent time hiking with my dog Jasmine, a sweet little Havanese and Bichon mix.
        </div>}
      </div>

      <div className="college">
        <div className="title" onClick={() => toggleSection('college')}>College</div>
        {openSection === 'college' && <div className="text">
          Wanting to keep costs low, I started at North Hennepin Community College rather than jumping straight into a four year university. Instead of following a rigid transfer pathway I pursued an Associates degree while loading up on electives that matched a computer science curriculum, including Java, Python, Discrete Math, Calculus 1, and Computer Architecture.
          <br></br><br></br>
          I then transferred to Saint Cloud State University to finish my Computer Science degree. What I did not anticipate was how broken the transfer credit system could be. Classes I had already passed were being treated as the wrong version at SCSU, meaning I was effectively retaking coursework I had completed. After weighing the time and cost of starting over against what I could teach myself, I made the decision to leave and pursue full stack web development on my own terms through <a href="https://www.theodinproject.com/" className="clickable" target="_blank">The Odin Project</a>, a free and highly respected self taught developer curriculum.
        </div>}
      </div>

      <div className="postCollege">
        <div className="title" onClick={() => toggleSection('postCollege')}>Post College</div>
        {openSection === 'postCollege' && <div className="text">
          After leaving university I committed fully to The Odin Project, working through every course, project, and lesson the program had to offer. What made it particularly meaningful was that I completed it while juggling full and part time jobs simultaneously, which took about a year and a half. The program sharpened my frontend and backend skills and more importantly taught me how to read documentation and find patterns across languages, which has made picking up new tools significantly faster.
          <br></br><br></br>
          During this time I worked as a Retail Display Technician for BDS Solutions and 2020 Companies, traveling independently across multiple retail locations to troubleshoot hardware, diagnose software issues, and maintain electronics displays. The work ranged from mounting large format TVs at Best Buy and configuring demo software, to updating Intel firmware across entire laptop lineups at various stores. It required a mix of technical problem solving, adaptability, and the ability to work efficiently without supervision.
          <br></br><br></br>
          Alongside that I took on freelance web development work, building and delivering real projects for actual clients on real deadlines. This gave me experience that personal projects simply cannot replicate, and reinforced that I can scope, execute, and deliver under pressure. I am currently seeking my first full time role in web development and am actively building out my portfolio to reflect the full range of what I can do.
        </div>}
      </div>

    </div>
  )
}