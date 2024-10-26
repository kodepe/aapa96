export const lang_es = {
  profileName: "Alex Paredes",
  profileTitle: "Ingeniero de software",
  profileDescription:
    "Creo experiencias digitales perfectas en píxeles, atractivas y accesibles.",

  menuAbout: "Sobre mi",
  menuExperience: "Experiencias",
  menuProjects: "Proyectos",
  menuSkills: "Habilidades",
  menuEducation: "Educación",
  fullResume: "Desacargar en PDF",
  experiences: [
    {
      date: "Ago 2022 - Set 2024",
      title: "Ssr Frontend developer - Baufest",
      link: "/",
      techs: ["Javascript", "Typescript", "React Native", "React", "Scrum"],
      description:
        "Diseñé y desarrollé componentes reutilizables en React Native, mejorando la eficiencia y la experiencia de usuario en proyectos de banca y seguros. Implementé lógica de negocio. Colaboré en la integración de APIs RESTful y el consumo de servicios externos. Realicé pruebas unitarias con Jest y React Testing Library para asegurar la calidad del código. También optimicé el rendimiento mediante técnicas de carga diferida.",
    },
    {
      date: "Ago 2022 - Ene 2023",
      title: "SSR Backend Developer - GlobalTask Freelance",
      link: "/",
      techs: ["Typescript", "NestJS", "MongoDB", "NodeJS"],
      description:
        "Diseñé y desarrollé microservicios escalables en NestJS para gestionar transacciones de criptomonedas, incluyendo wallets y pagos. Integré APIs de blockchain para procesar transacciones en tiempo real, asegurando precisión y seguridad. También implementé pruebas unitarias y de integración con Jest y Supertest para garantizar la fiabilidad de los servicios.",
    },
    {
      date: "Nov 2021 - Dec 2022",
      title: "Instructor en Javascript - Coderhouse",
      link: "/",
      techs: ["Typescript", "Javascript", "NodeJS", "HTML", "CSS"],
      description:
        "Impartí cursos de JavaScript online a más de 150 estudiantes, enfocándome en el desarrollo de aplicaciones web y móviles con tecnologías modernas. Utilicé metodologías ágiles para fomentar la colaboración en entornos simulados de trabajo real. Desarrollé proyectos prácticos como apps de gestión de tareas y simulaciones de e-commerce. Proporcioné mentoría individual, ayudando a los estudiantes a mejorar sus habilidades y prepararse para oportunidades laborales.",
    },
    {
      date: "Ene 2021 - Ago 2022",
      title: "Fullstack Developer - Rootstack - Freelance",
      link: "/",
      techs: [
        "Typescript",
        "Javascript",
        "NodeJS",
        "NextJS",
        "NestJS",
        "Wordpress",
        "Ruby on Rails",
      ],
      description:
        "He trabajado en proyectos diversos, incluyendo el desarrollo de funcionalidades críticas con Next.js para Double Nines/Ryder, optimizando la experiencia de usuario con SSR. Para Ourselves Media, desarrollé una app móvil en React Native, mejorando el rendimiento con Redux. En Lovable, implementé soluciones en Ruby on Rails para un e-commerce, mientras que en Delivery Dynamics, creé una app de logística con NativeScript, optimizando la navegación. También desarrollé una solución web para la Superintendencia de Bancos de Panamá utilizando WordPress, mejorando la seguridad y gestión de contenidos.",
    },
    {
      date: "Jul 2020 - Jul 2021",
      title: "Frontend Developer - The Pineapple Academy - Freelance",
      link: "/",
      techs: [
        "Typescript",
        "Javascript",
        "Angular",
        "React",
        "NextJS",
        "Shadcn",
      ],
      description:
        "Lideré el desarrollo de un dashboard interactivo para el proyecto Pineapple Dashboard utilizando Angular y ReactJS, optimizando el rendimiento y asegurando la cohesión entre la UI y la lógica de negocio. Realicé un análisis exhaustivo de UI/UX para definir lineamientos de diseño. También diseñé interfaces de usuario compatibles con SCORM para el proyecto Pacman, permitiendo la integración con sistemas LMS y el seguimiento del rendimiento de los usuarios.",
    },
    {
      date: "Jul 2018 - Ago 2022",
      title: "Ingeniero de software - Shellcatch",
      link: "/",
      techs: [
        "Typescript",
        "Javascript",
        "Angular",
        "React",
        "NextJS",
        "React Native",
        "Ionic",
        "MongoDB",
        "Scrum",
      ],
      description:
        "Desarrollé la aplicación móvil e-Reporting en React Native para reportes en tiempo real de actividades pesqueras, junto con un dashboard de monitoreo en React y Node.js para mejorar la toma de decisiones. Creé el backoffice de Shellcatch para gestión interna, además de la plataforma B2C de Frescapesca y su aplicación B2B en React Native para ventas. Implementé un dashboard de inventario para Frescapesca y rediseñé la landing page de Shellcatch.com. Lideré el despliegue de e-Reporting en varios países, adaptando la solución a normativas locales.",
    },
    {
      date: "Ene 2018 - Dic 2018",
      title: "Frontend Developer - Evolution Soluciones Digitales",
      link: "/",
      techs: ["Angular", "React"],
      description:
        "Lideré el desarrollo del frontend de una plataforma e-commerce en Angular, optimizando la experiencia de usuario y el rendimiento. Para Tecsup, desarrollé una landing page interactiva en Angular para una feria virtual, mejorando la conversión. También implementé el frontend de una herramienta en Ionic que permite a los usuarios diseñar y personalizar sus propias aplicaciones de forma intuitiva.",
    },
    {
      date: "Jul 2016 - Dic 2017",
      title: "Instructor en Robotica Lego - Smartbot",
      link: "/",
      techs: ["Lego Weedo", "Mindstorm EV3", "Scratch", "Python"],
      description:
        "Impartí cursos de robótica utilizando módulos educativos como LEGO EV3, Mindstorm y WeDo, introduciendo a los estudiantes a la lógica de programación y construcción robótica. Además, enseñé programación básica con Python, fomentando el desarrollo de habilidades de pensamiento lógico y resolución de problemas.",
    },
    {
      date: "Dic 2015 - Jul 2016    ",
      title: "Unity Developer - Universidad Catolica de Santa Maria",
      link: "/",
      techs: ["Unity", "C#"],
      description:
        "Desarrollé un laboratorio virtual interactivo utilizando Leap Motion e integrando la experiencia con Unity, lo que permitió a los estudiantes simular experimentos químicos en un entorno digital inmersivo.",
    },
  ],
  projects: [
    {
      title: "Aquicito",
      link: "/",
      description:
        "Aquicito es una startup, que se enfoca en promover el reciclaje a través de una aplicación móvil. La app permite a los recicladores registrar bolsas recogidas mediante la lectura de códigos QR de los vecinos, lo que otorga puntos tanto al reciclador como al vecino. La plataforma incluye módulos para reportar incidencias ambientales y noticias relacionadas con el reciclaje, además de ofrecer un sistema de incentivos para fomentar buenas prácticas. La iniciativa está diseñada para facilitar la segregación de residuos y mejorar las prácticas de reciclaje en la comunidad.",
    },
    {
      title: "Dr In House",
      link: "/",
      description:
        "Desarrollé un dashboard web utilizando Node.js, Angular, MongoDB y Express.js para la gestión de datos médicos.",
    },
    {
      title: "GanaConIlaria",
      link: "/",
      description:
        "Desarrollé una aplicación móvil y web con React Native y un backend con Node.js y MongoDB para gestionar promociones y puntos de fidelidad.",
    },
    {
      title: "Landing Page Calico Construction y Java-Nation",
      link: "/",
      description:
        "Creé landing pages con Angular Universal para optimizar la indexación SEO y mejorar la carga inicial.",
    },
  ],
  skills: [
    "React native",
    "React",
    "NodeJS",
    "Typescript",
    "Javascript",
    "Angular",
    "Ionic",
    "Scrum",
  ],
  footer:
    " Todos los derechos reservados. Desarrollador apasionado por crear soluciones innovadoras con React Native y tecnologías frontend. Si tienes algún proyecto o idea en mente, no dudes en contactarme. ¡Siempre estoy abierto a nuevas oportunidades y colaboraciones!",
};
