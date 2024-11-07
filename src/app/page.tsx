import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import SparklesText from "@/components/magicui/sparkles-text";
import Particles from "@/components/ui/particles";
import { BorderBeam } from "@/components/ui/border-beam";
import { CoolMode } from "@/components/ui/cool-mode";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";

const BLUR_FADE_DELAY = 0.04;

const certificates = [
  {
    title: "Turkcell Geleceği Yazanlar - React 101 eğitimi başarı belgesi",
    date: "Aralık 2023",
    link: "/react101.jpg",
  },
  {
    title: "BTK Akademi - Angular ile Web Programlama Katılım Sertifikası",
    date: "Kasım 2023",
    link: "/angular.jpg",
  },
  {
    title: "BTK Akademi - Git ve Github Eğitimi Katılım Sertifikası",
    date: "Ekim 2023",
    link: "/git-github.jpg",
  },
  {
    title: "Archi's Academy - Java Spring Boot Workshop",
    date: "Eylül 2023",
    link: "/java-springboot.jpg",
  },
  {
    title: "Kodluyoruz - Hi-Kod Front End Atölyesi",
    date: "Mayıs 2023",
    link: "/hikod.png",
  },
  {
    title: "Cumhuriyet Üniversitesi - Java ile Oyun Programlama Hackhatonu",
    date: "Ocak 2023",
    link: "/hackhathon.jpeg",
  },
];

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
                yOffset={8}
                text={`Merhaba, Ben ${DATA.name.split(" ")[0]} `}
              />
              <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                {DATA.description}
              </Markdown>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-40 border rounded-xl object-cover">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about" className="mb-40">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Hakkımda</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="work" className="mb-40">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">İş Deneyimi</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Eğitim</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Yetenekler</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Projelerim
                </div>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikalarım Bölümü */}
      <section id="certificates">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Sertifikalarım
                </div>
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {certificates.map((certificate, index) => (
              <BlurFade key={index} delay={BLUR_FADE_DELAY * (12 + index)}>
                <div className="relative p-4 bg-background border rounded-lg shadow-md min-h-[200px]">
                  <h3 className="mt-4 text-lg font-semibold">
                    {certificate.title}
                  </h3>
                  <p className="mt-4 text-sm text-gray-500">
                    {certificate.date}
                  </p>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-300 hover:underline"
                  >
                    Sertifikayı görmek için tıklayın
                  </a>
                  <BorderBeam />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12">
        <div className="relative justify-center">
          <a href="/cv.jpg" target="_blank" rel="noopener noreferrer">
            <ShimmerButton className="shadow-2xl">
              <div className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                CV mi Görüntülemek İçin Tıkla !
              </div>
            </ShimmerButton>
          </a>
        </div>
      </section>
    </main>
  );
}
