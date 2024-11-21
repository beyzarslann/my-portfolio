import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Beyza Arslan",
  initials: "DV",
  url: "https://dillion.io",
  location: "Ankara, Türkiye",
  locationLink: "",
  description:
    "Junior Front-End geliştiriciyim. React, Javascript ile projeler geliştirmeyi seviyorum ve hala da kendimi geliştirmeye devam ediyorum. ",
  summary:
    "Ankara'da yaşıyorum. Cumhuriyet Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Javascript",
    "Tailwind Css",
    "MySql",
    "Figma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Medium" },
  ],
  contact: {
    email: "beyzarslan865@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/beyzarslann",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/beyza-arslan-21357a20a",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "İnstagram",
        url: "https://www.instagram.com/byzrslnnn/",
        icon: Icons.instagram,

        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:beyzarslan865@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "T.C. Cumhurbaşkanlığı İletişim Başkanlığı",
      badges: [],
      title: "Stajyer Mühendis",
      logoUrl: "/ib-logo.png",
      start: "Temmuz 2022",
      end: "Ağustos 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "PTT A.Ş",
      badges: [],
      title: "Stajyer Mühendis",
      logoUrl: "/ptt-logo.png",
      start: "Temmuz 2023",
      end: "Ağustos 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Cumhuriyet Üniversitesi",
      href: "https://www.cumhuriyet.edu.tr/",
      degree: "Bilgisayar Mühendisliği",
      logoUrl: "/cu-logo.jpg",
      start: "2019",
      end: "2023",
    },
    {
      school: "İstanbul Üniversitesi",
      href: "https://auzef.istanbul.edu.tr/tr/_",
      degree: "Web Tasarımı ve Kodlama",
      logoUrl: "/iu-logo.png",
      start: "2023",
      end: "Devam",
    },
  ],
  projects: [
    {
      title: "Hava Durumu",
      href: "https://the-weather-woad.vercel.app/",
      dates:"",
      active: true,
      description:
        "Bu hava durumu uygulaması, JavaScript kullanılarak geliştirilmiş ve OpenWeatherMap API entegrasyonu yapılmış bir web uygulamasını temsil eder. Kullanıcıların seçtikleri şehirler için güncel hava durumu bilgilerini görüntülemelerine olanak tanır. Uygulama, hava durumu bilgilerini API üzerinden çeker ve kullanıcıya sunar.",
      technologies: [
        "Html",
        "Css",
        "Javascript"
      ],
      links: [
        {
          type: "Website",
          href: "https://the-weather-woad.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/beyzarslann/TheWeather",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/havadurumu.JPG",
      video:
        "",
    },
    {
      title: "Alman Usulu Projesi",
      href: "https://alman-usulu-projesi-end.vercel.app/",
      dates: "",
      active: true,
      description:"Kullanıcılardan isim ve harcama bilgilerini alıp ortalama ve toplam hesabı hesaplayıp kişi başına düşen hesabın dolar ve tl cinsinden hesaplamasını yapan bir uygulama.",
      technologies: [
        "Java",
        "Spring Boot",
        "Angular"
      ],
      links: [
        {
          type: "Website",
          href: "https://alman-usulu-projesi-end.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/beyzarslann/AlmanUsuluProjesi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/alman1.JPG",
      video: "",
    },
    {
      title: "Dunyanin Yedi Harikasi",
      href: "https://dunyanin-yedi-harikasi.vercel.app/",
      dates: "",
      active: true,
      description:"Html ve Css ile kodlanmış bir websitesi.",
      technologies: [
        "Html",
        "CSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://dunyanin-yedi-harikasi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/beyzarslann/DunyaninYediHarikasi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dunya.JPG",
      video: "",
    },
    {
      title: "My Portfolio",
      href: "https://www.beyzarslan.com.tr/",
      dates: "Eylül 2024 - Ekim 2024",
      active: true,
      description:
        "",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.beyzarslan.com.tr/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/beyzarslann/my-portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/website.jpg",
      video:
        "",
    },
  ]
  
} as const;
