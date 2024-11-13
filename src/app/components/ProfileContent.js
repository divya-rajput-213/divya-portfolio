// app/components/ProfileContent.js
export default function ProfileContent() {
    return (
      <div className="min-h-screen bg-[#D4C5B5] text-zinc-800">
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
      </div>
    );
  }
  