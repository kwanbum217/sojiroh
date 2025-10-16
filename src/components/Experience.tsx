import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Experience() {
  const experiences = [
    {
      company: "테크 스타트업",
      position: "Senior Frontend Developer",
      period: "2022.03 - 현재",
      description: [
        "React와 TypeScript를 활용한 대규모 SaaS 플랫폼 개발",
        "성능 최적화로 페이지 로딩 속도 40% 개선",
        "컴포넌트 라이브러리 구축 및 디자인 시스템 구축",
        "주니어 개발자 멘토링 및 코드 리뷰",
      ],
    },
    {
      company: "IT 서비스 기업",
      position: "Frontend Developer",
      period: "2020.01 - 2022.02",
      description: [
        "반응형 웹 애플리케이션 개발 및 유지보수",
        "RESTful API 연동 및 상태 관리",
        "크로스 브라우저 호환성 테스트 및 버그 수정",
        "Git을 활용한 협업 및 버전 관리",
      ],
    },
    {
      company: "웹 에이전시",
      position: "Junior Frontend Developer",
      period: "2019.03 - 2019.12",
      description: [
        "HTML, CSS, JavaScript를 활용한 웹사이트 구축",
        "클라이언트 요구사항에 맞는 맞춤형 UI 개발",
        "jQuery 기반 인터랙티브 기능 구현",
        "웹 접근성 및 SEO 최적화",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">경력</h2>
          <p className="text-gray-600">
            다양한 프로젝트 경험을 쌓아왔습니다
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="flex-1 pl-8 md:pl-0">
                  <Card className="hover:shadow-xl transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl mb-1">{exp.position}</h3>
                          <p className="text-blue-600">{exp.company}</p>
                        </div>
                        <Briefcase className="w-6 h-6 text-gray-400" />
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
