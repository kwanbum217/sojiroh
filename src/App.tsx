import { Navbar } from "./components/Navbar";
import { ProfileHero } from "./components/ProfileHero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <ProfileHero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                홍길동
              </h3>
              <p className="text-gray-400 text-sm">
                프론트엔드 개발자로서 사용자 중심의 웹
                애플리케이션을 만들어갑니다.
              </p>
            </div>

            <div>
              <h4 className="mb-4">빠른 링크</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    소개
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-blue-400 transition-colors"
                  >
                    기술
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-blue-400 transition-colors"
                  >
                    프로젝트
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    연락
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">소셜</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              © 2024 홍길동. All rights reserved. Made with ❤️
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}