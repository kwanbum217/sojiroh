import { Github, Linkedin, Mail, MapPin, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export function ProfileHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 opacity-10"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Avatar className="w-64 h-64 border-4 border-white shadow-2xl">
                <AvatarImage src="https://i.pravatar.cc/300?img=33" />
                <AvatarFallback className="text-6xl">홍길동</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                  Available for work
                </span>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm mb-4">
                Frontend Developer
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              홍길동
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 max-w-2xl">
              사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. 
              React와 TypeScript를 활용하여 아름답고 효율적인 웹 애플리케이션을 만듭니다.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-gray-600">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                서울, 대한민국
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                5년 경력
              </span>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2">
                <Mail className="w-4 h-4" />
                이메일 보내기
              </Button>
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
