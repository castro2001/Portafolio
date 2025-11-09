"use client"
import { SectionGrid } from "@/src/Components/layout/SectionGrid";
import { ICard, ICardProps } from "@/src/interfaces/ICard";
import { Code2, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";

export const Card = (props:ICardProps)=> {
    const {card} = props;
    const {theme,systemTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    
    console.log(card);
    
     return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        {card?.map((item) => (
          <div
            key={item.id}
            className={`card relative rounded-xl p-5 transition-all hover:scale-105 group-hover:scale-[1.02] ${
              currentTheme === "dark"
                ? "bg-gray-800/50 border border-gray-700 hover:shadow-blue-500/20"
                : "bg-gray-50 border border-gray-200 hover:shadow-blue-500/30"
            }`}
            style={{ animation: `fade-in-up 0.6s ease-out ${item.id}s` }}
          >
            {item.imageUrl ? (
              <picture className="w-full h-12 rounded-lg mb-6 flex">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </picture>
            ) : (
              <div
                className={`h-48 bg-gradient-to-r ${item.gradient} rounded-lg mb-6 flex items-center justify-center relative overflow-hidden`}
              >
                <Code2 size={64} className="opacity-50 relative z-10" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
              </div>
            )}

            <header className="flex justify-between px-1">
              <h2 className="text-2xl font-bold mb-3 flex items-center justify-between">
                {item.title}
              </h2>
              <ExternalLink size={20} />
            </header>

            <section>
              <p
                className={`mb-6 ${
                  currentTheme === "dark"
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`badge px-4 pt-3 py-2 text-sm rounded-full hover:scale-110 transition-transform cursor-pointer flex items-center ${
                      currentTheme === "dark"
                        ? "bg-gray-900 text-blue-400 border border-blue-500/30"
                        : "bg-blue-100 text-amber-800 border border-blue-300"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );  
}