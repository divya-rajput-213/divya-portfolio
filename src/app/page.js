import Image from "next/image"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#D4C5B5] text-zinc-800">
      {/* Decorative Background Lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              fill="none"
              stroke="#D4C5B5"
              strokeWidth="1"
              d="M 0,100 C 20,120 40,120 60,100 C 80,80 100,80 120,100 C 140,120 160,120 180,100"
              className="animate-[wave_15s_ease-in-out_infinite]"
            />
          </svg>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Profile Section */}
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-12 items-start mb-20">
          <div className="relative">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden border-2 border-zinc-200">
              <Image
                src="/images/divya.jpeg"
                alt="Divya's Profile"
                width={600}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div>
            <h1 className="font-serif text-5xl mb-8">DIVYA</h1>
            <h2 className="text-2xl font-serif mb-6">ABOUT ME</h2>
            <p className="text-lg leading-relaxed">
              I am an experienced React developer with 3 years of expertise in creating responsive web applications. 
              Currently working at CrossML, I specialize in frontend development with a strong foundation in React.js, Redux, TypeScript, and modern development practices. 
              Proven ability to transform complex requirements into elegant, user-friendly solutions using cutting-edge React technologies.
            </p>
          </div>
        </div>

        <h2 className="font-serif text-6xl text-center mb-20">MY PROFILE</h2>

        <div className="grid md:grid-cols-2 gap-20 mb-20">
          {/* Education Section */}
          <div>
            <h3 className="font-serif text-3xl mb-8">EDUCATION</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-xl">Indo Global College of Engineering</h4>
                <ul className="mt-2 space-y-1">
                  <li>Bachelor of Technology</li>
                  <li className="text-zinc-600">Computer Science & Engineering, 2022</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <h3 className="font-serif text-3xl mb-8">WORK EXPERIENCE</h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-xl">React Developer</h4>
                <p className="text-zinc-600">CrossML | Present</p>
                <ul className="mt-2 list-disc list-inside">
                  <li>Developing enterprise-level applications using React.js and TypeScript</li>
                  <li>Implementing state management with Redux and Context API</li>
                  <li>Creating responsive UIs with Material UI and custom React components</li>
                  <li>Collaborating with teams using Azure DevOps for project management and CI/CD</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl">Software Developer</h4>
                <p className="text-zinc-600">Innow8 Apps | June 2023 - October 2024</p>
                <ul className="mt-2 list-disc list-inside">
                  <li>Developed the Leva Admin Panel using React and Redux</li>
                  <li>Integrated AWS services for backend functionality</li>
                  <li>Implemented SSO using Rippling for enhanced security</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl">Associate React Developer</h4>
                <p className="text-zinc-600">DigiMantra Labs | February 2022 - June 2023</p>
                <ul className="mt-2 list-disc list-inside">
                  <li>Built Earthlink admin panel features using React and TypeScript</li>
                  <li>Worked with GraphQL for efficient data fetching</li>
                  <li>Utilized styled-components and AntD for consistent UI design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="font-serif text-3xl mb-8">SKILLS</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["React.js Development", "Redux State Management"],
              ["TypeScript", "Material UI"],
              ["RESTful APIs", "GraphQL"],
              ["Azure DevOps", "AWS Integration"],
              ["Responsive Design", "Performance Optimization"],
              ["Team Collaboration", "Agile Methodologies"],
            ].map((row, i) => (
              <div key={i} className="space-y-4">
                {row.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-700 opacity-75" />
                    <span className="text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-20 flex justify-between text-zinc-600">
          <span>+918146683223</span>
          <span>divyarajput3223@gmail.com</span>
          <Link 
            href="https://www.linkedin.com/in/divya-81647202/"
            className="hover:text-zinc-900"
          >
            LinkedIn Profile
          </Link>
        </div>
      </main>
    </div>
  )
}