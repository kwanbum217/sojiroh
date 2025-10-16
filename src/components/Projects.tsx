import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "React와 TypeScript로 구축한 대규모 이커머스 플랫폼. 장바구니, 결제, 주문 관리 기능을 포함합니다.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwNTI4NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "Tailwind", "Redux"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "팀 협업을 위한 태스크 관리 애플리케이션. 드래그 앤 드롭, 실시간 동기화 기능 제공.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwNTI4NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "Firebase", "DnD", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description: "실시간 날씨 정보를 제공하는 대시보드. 차트와 지도를 활용한 데이터 시각화.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwNTI4NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "API", "Recharts", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio CMS",
      description: "포트폴리오를 쉽게 관리할 수 있는 CMS. 마크다운 에디터와 이미지 업로드 기능.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwNTI4NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "MongoDB", "MDX", "Auth"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">프로젝트</h2>
          <p className="text-gray-600">
            다양한 프로젝트를 통해 기술을 발전시켜왔습니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <CardContent className="pt-6">
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
