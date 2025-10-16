import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">기술 스택</h2>
          <p className="text-gray-600">
            다양한 기술을 활용하여 프로젝트를 구현합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
