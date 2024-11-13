import { Sparkles } from "lucide-react";

// app/skills/page.js
export default function Skills() {
  return (
    <>
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
    </>
  );
}
