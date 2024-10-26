"use client";
import { UseLangaugeContext } from "@/context/language";

export const About = () => {
  const { lang } = UseLangaugeContext();
  if (lang === "lang_en") {
    return (
      <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="about">
        <div className="flex flex-col gap-2">
          <p>
            I’m{" "}
            <strong className="text-slate-300">
              Alex Andre Paredes Aranzamendi,
            </strong>
            a software developer with over 7 years of experience, specializing
            in{" "}
            <strong className="text-slate-300">
              frontend development and mobile applications.
            </strong>
            {`My journey began in 2017, and since then, I've primarily worked with
            technologies like `}
            <strong className="text-slate-300">
              JavaScript/TypeScript, React, React Native, and Node.js.{" "}
            </strong>
            <br />I started out with{" "}
            <strong className="text-slate-300">Angular</strong> and{" "}
            <strong className="text-slate-300">Ionic</strong>, but my passion
            for mobile development led me to focus on{" "}
            <strong className="text-slate-300">React Native,</strong>
            where I’ve developed various mobile apps for both Android and iOS.
          </p>
          <p>
            Over the years, I’ve built efficient, scalable user interfaces,
            always focusing on user experience and app performance. I have led
            complex projects, integrating modern systems and services using
            advanced tools from the React ecosystem.
          </p>
          <p>
            Currently, I’m the founder of a small startup called{" "}
            <strong className="text-slate-300">Aquicito</strong>, Aquicito, a
            mobile platform focused on recycling, encouraging users through a
            point system and waste collection, promoting environmental awareness
            through technology.
          </p>
          <p>
            In addition to my technical skills, I have strong experience with{" "}
            <strong className="text-slate-300">agile methodologies</strong> like
            Scrum and Scrumban, which allow me to manage teams and projects
            efficiently, always focusing on continuous value delivery.
          </p>
          <p>
            In my free time, I enjoy activities like watching movies,
            participating in Scouts, and spending quality time with my son, who
            is my greatest inspiration.
          </p>
        </div>
      </section>
    );
  }
  if (lang === "lang_es")
    return (
      <section className="animate__animated animate__fadeInDown mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="about">
        <div className="flex flex-col gap-2">
          <p>
            Desarrollador de software con más de 7 años de experiencia,
            especializado en desarrollo frontend y aplicaciones móviles. Mi
            trayectoria comenzó en 2017, y desde entonces he trabajado
            principalmente con tecnologías como{" "}
            <strong className="text-slate-300">
              JavaScript/TypeScript, React, React Native y Node.js.
            </strong>
            Inicié mi carrera explorando Angular e Ionic, pero mi pasión por el
            desarrollo móvil me llevó a centrarme en{" "}
            <strong className="text-slate-300">React Native</strong>, donde he
            desarrollado diversas aplicaciones móviles tanto para Android como
            iOS.
          </p>
          <p>
            A lo largo de los años, he construido interfaces de usuario
            eficientes y escalables, siempre enfocado en la experiencia del
            usuario y el rendimiento de las aplicaciones. He liderado proyectos
            complejos, integrando sistemas y servicios modernos, utilizando
            herramientas avanzadas del ecosistema de React.
          </p>
          <p>
            Actualmente, lidero una pequeña startup llamada{" "}
            <strong className="text-slate-300">Aquicito</strong>, una plataforma
            móvil relacionada al reciclaje, que incentiva a los usuarios a
            través de un sistema de puntos y acopio de residuos, impulsando así
            la conciencia ambiental mediante la tecnología.
          </p>
          <p>
            Además de mis habilidades técnicas, destaco por mi conocimiento en{" "}
            <strong className="text-slate-300">
              metodologías ágiles como Scrum y Scrumban,
            </strong>{" "}
            lo que me permite manejar equipos y proyectos con eficiencia y
            enfoque en la entrega continua de valor.
          </p>
          <p>
            En mi tiempo libre, disfruto de actividades como ver{" "}
            <strong className="text-slate-300">películas</strong>, participar en
            los <strong className="text-slate-300">Scouts</strong>, y compartir
            tiempo con mi hijo, quien es mi mayor inspiración.
          </p>
        </div>
      </section>
    );
};
