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
    <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 md:p-6">
      {/* Project Header */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold mb-3">{name}</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs border border-gray-600 px-2 py-0.5 rounded bg-gray-900/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-500">{date}</p>
      </div>

      {/* Media Gallery */}
      {media.length > 0 && (
        <div className="mb-6">
          {/* Media Label Tab */}
          <div className="mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 border border-gray-600 inline-block rounded bg-gray-900/50 text-gray-300">
              {media[currentMediaIndex]?.label}
            </span>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 mb-4 flex items-center justify-center min-h-[250px]">
            {isCurrentMediaPdf ? (
              <div className="w-full h-[350px] flex flex-col items-center justify-center">
                <object
                  data={media[currentMediaIndex]?.src}
                  type="application/pdf"
                  className="w-full h-full"
                  title={`${name} - ${media[currentMediaIndex]?.label}`}
                >
                  <div className="flex flex-col items-center justify-center gap-2 p-4">
                    <p className="text-gray-400 text-sm">PDF viewer not supported</p>
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
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={prevMedia}
                className="border border-gray-700 p-1 hover:border-white transition text-sm"
              >
                ←
              </button>
              <span className="text-xs text-gray-500">
                {currentMediaIndex + 1} / {media.length}
              </span>
              <button
                onClick={nextMedia}
                className="border border-gray-700 p-1 hover:border-white transition text-sm"
              >
                →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Technologies Section */}
      <div className="border-t border-gray-700 pt-4">
        <h3 className="text-xs font-bold uppercase tracking-wider mb-2 text-gray-400">
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
