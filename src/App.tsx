import { profile, projectShowcases, experience } from './content';
import { AppShell, Section, SectionHeading } from './components/ui';
import { ProjectShowcase } from './components/ProjectShowcase';

function App() {

  return (
    <AppShell>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <a href="#top" className="text-lg font-bold text-white">
              LOGAN DIEP
            </a>
            <p className="text-xs text-gray-400">Computer Engineer | Hardware Engineer</p>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition">
              About
            </a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-white transition">
              Projects
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-8xl md:text-8xl font-bold text-white mb-6 typewriter-text">
              Logan Diep
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto typewriter-description text-center">
              Hardware engineer focused on PCB design, embedded systems, and FPGAs
            </p>
            <div className="flex gap-4 justify-center flex-wrap hero-buttons">
              <a
                href="/Logan_Diep_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white text-white hover:bg-white/10 transition flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
                  <path d="M13 2v7h7" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <rect x="8" y="11" width="8" height="1" fill="currentColor"/>
                  <rect x="8" y="14" width="8" height="1" fill="currentColor"/>
                </svg>
                Resume
              </a>
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white text-white hover:bg-white/10 transition flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.826 0-9.749h3.554v1.381c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.393 3.745 4.385v5.591zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.955.768-1.716 1.959-1.716 1.188 0 1.914.761 1.939 1.716 0 .953-.751 1.715-1.983 1.715zm1.946 11.019H3.39V8.684h3.893v11.768zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Section id="projects" className="py-20 md:py-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Featured Projects</h2>
          <div className="space-y-16">
            {projectShowcases.map((project) => (
              <ProjectShowcase
                key={project.id}
                name={project.name}
                description={project.description}
                media={project.media}
                tags={project.tags}
                date={project.date}
                details={project.details}
              />
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" className="py-20 md:py-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Experience</h2>
          <div className="space-y-8">
            {experience.map((item) => (
              <div key={item.role} className="border-l border-white/20 pl-6">
                <p className="text-sm text-gray-500">{item.timeframe}</p>
                <h3 className="text-xl font-bold text-white mt-2">{item.role}</h3>
                <p className="text-gray-400 mt-1">{item.company}</p>
                {Array.isArray(item.summary) ? (
                  <ul className="text-gray-400 mt-3 space-y-2">
                    {item.summary.map((point, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-white">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 mt-3">{item.summary}</p>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" className="py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Computer Engineer
              </h2>
              <div className="space-y-4">
                {Array.isArray(profile.intro) ? (
                  profile.intro.map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {profile.intro}
                  </p>
                )}
              </div>
              <div className="mt-8 space-y-3">
                <p className="text-gray-300">
                  <span className="text-gray-500">Education: </span>
                  {profile.education}
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/headshot.jpg"
                alt="Logan Diep"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg border border-white/20"
              />
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-gray-500">
        <p>&copy; 2026 Logan Diep. All rights reserved.</p>
      </footer>
    </AppShell>
  );
}

export default App;