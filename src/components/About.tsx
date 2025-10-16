import { Code, Palette, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const features = [
    {
      icon: Code,
      title: "깔끔한 코드",
      description: "유지보수가 쉽고 확장 가능한 코드를 작성합니다.",
    },
    {
      icon: Palette,
      title: "사용자 중심 디자인",
      description: "직관적이고 아름다운 UI/UX를 구현합니다.",
    },
    {
      icon: Rocket,
      title: "빠른 성능",
      description: "최적화된 코드로 빠른 웹 애플리케이션을 만듭니다.",
    },
    {
      icon: Users,
      title: "협업",
      description: "팀원들과 원활한 소통과 협업을 추구합니다.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">소개</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            안녕하세요! 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 홍길동입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl mb-4">저에 대해</h3>
              <p className="text-gray-700 mb-4">
                5년간의 프론트엔드 개발 경험을 바탕으로 다양한 프로젝트를 성공적으로 완수했습니다. 
                React와 TypeScript를 주로 사용하며, 사용자 경험을 개선하는 것에 큰 보람을 느낍니다.
              </p>
              <p className="text-gray-700">
                새로운 기술을 배우는 것을 좋아하며, 팀과 함께 성장하는 것을 중요하게 생각합니다. 
                깨끗한 코드와 효율적인 솔루션을 제공하기 위해 항상 노력합니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-gray-600">년 경력</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">20+</div>
                <div className="text-sm text-gray-600">프로젝트</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-gray-600">기술 스택</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-600">만족도</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
