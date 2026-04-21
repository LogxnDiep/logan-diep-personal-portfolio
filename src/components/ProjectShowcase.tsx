import { useState } from 'react';

type MediaItem = {
  src: string;
  label: string;
};

type ProjectShowcaseProps = {
  name: string;
  description: string;
  media: MediaItem[];
  tags: string[];
  date: string;
  details: {
    technologies: string[];
  };
};

export function ProjectShowcase({
  name,
  description,
  media,
  tags,
  date,
  details,
}: ProjectShowcaseProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const isCurrentMediaPdf = media[currentMediaIndex]?.src.endsWith('.pdf');

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <div className="bg-gray-950 border border-gray-700 rounded-lg p-8 md:p-12">
      {/* Project Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{name}</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs border border-gray-600 px-3 py-1 rounded bg-gray-900/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500">{date}</p>
      </div>

      {/* Media Gallery */}
      {media.length > 0 && (
        <div className="mb-12">
          {/* Media Label Tab */}
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 border border-gray-600 inline-block rounded bg-gray-900/50 text-gray-300">
              {media[currentMediaIndex]?.label}
            </span>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 mb-6 flex items-center justify-center min-h-[400px]">
            {isCurrentMediaPdf ? (
              <div className="w-full h-[500px] flex flex-col items-center justify-center">
                <object
                  data={media[currentMediaIndex]?.src}
                  type="application/pdf"
                  className="w-full h-full"
                  title={`${name} - ${media[currentMediaIndex]?.label}`}
                >
                  <div className="flex flex-col items-center justify-center gap-4 p-6">
                    <p className="text-gray-400">PDF viewer not supported</p>
                    <a
                      href={media[currentMediaIndex]?.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-600 px-4 py-2 hover:border-white transition text-sm"
                    >
                      Open PDF
                    </a>
                  </div>
                </object>
              </div>
            ) : (
              <img
                src={media[currentMediaIndex]?.src}
                alt={`${name} - ${media[currentMediaIndex]?.label}`}
                className="w-full h-auto object-cover"
              />
            )}
          </div>

          {/* Media Controls */}
          {media.length > 1 && (
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevMedia}
                className="border border-gray-700 p-2 hover:border-white transition"
              >
                ←
              </button>
              <span className="text-sm text-gray-500">
                {currentMediaIndex + 1} / {media.length}
              </span>
              <button
                onClick={nextMedia}
                className="border border-gray-700 p-2 hover:border-white transition"
              >
                →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Technologies Section */}
      <div className="border-t border-gray-700 pt-8">
        <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-400">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {details.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-800 border border-gray-700 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
