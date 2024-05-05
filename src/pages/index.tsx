import { projectData } from "@/data/data";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Work_Sans } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
const ws = Work_Sans({
  subsets: ["latin"],
});
const resumeLink =
  "https://drive.google.com/file/d/1qWfFcrZay2lUtoID7o2FJaZOgF-dS1Jb/view?usp=drive_link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shyamanand Yadav - FullStack Devloper</title>
      </Head>
      <main
        className={` text-white min-h-screen bg-zinc-900 selection:text-gray-900 selection:bg-orange-200  ${ws.className} `}
      >
        <Container>
          <HeroSection />
          <ProjectSection />
        </Container>
        <Footer />
      </main>
    </>
  );
}

const HeroSection = () => {
  return (
    <section className='sm:pt-32 sm:max-w-xl mx-auto pt-20 p-5'>
      <motion.div initial={{ opacity: 0, zoom: 0 }} animate={{ opacity: 1, zoom: 1 }}>
        <Image
          src='/profile.jpg'
          alt='profile'
          width={64}
          height={64}
          priority
          className='rounded-full ring-2 ring-offset-4 ring-offset-gray-800 ring-orange-200  object-cover h-16 w-16 transition-all hover:-rotate-12'
        />
      </motion.div>
      <article className='mt-3 '>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className='sm:text-6xl text-4xl font-thin tracking-tight'
        >
          Shyamanand Yadav
        </motion.h1>
        <motion.h2
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='sm:text-3xl text-xl uppercase tracking-tight mt-1'
        >
          Fullstack Developer
        </motion.h2>
        <motion.p
          transition={{ delay: 0.5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-zinc-400 mt-6 '
        >
          I am a fullstack developer with over 2 years of experience in building web applications. I
          am passionate about building scalable and maintainable web applications.
        </motion.p>
      </article>
      <motion.article
        transition={{ delay: 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='mt-6'
      >
        <div className='flex gap-3 items-center'>
          <Link href='mailto:shyamayadav154@gmail.com'>
            <AiOutlineMail className='h-7 w-7 text-zinc-300 transition-all hover:scale-125 hover:text-zinc-100' />
          </Link>
          <Link target='_blank' href='https://github.com/shyamayadav154'>
            <AiFillGithub className='h-7 w-7 text-zinc-300 transition-all hover:scale-125 hover:text-zinc-100' />
          </Link>
          <Link target='_blank' href='https://www.linkedin.com/in/shyamanandy1/'>
            <AiFillLinkedin className='h-7 w-7 transition-all hover:scale-125 text-zinc-300 hover:text-zinc-100' />
          </Link>
        </div>
        <Link
          target='_blank'
          href={resumeLink}
          className='px-7 inline-block mt-3 font-medium py-2 hover:bg-orange-200 hover:text-gray-900 transition-colors duration-200 -ml-2 rounded-md bg-zinc-700'
        >
          Resume
        </Link>
      </motion.article>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className=' bg-black border-zinc-600 rounded-t-3xl mt-32 py-10'>
      <Container>
        <article className='grid place-content-center'>
          <h3 className='sm:text-5xl text-3xl text-center'>
            <span className='font-thin'>Get&nbsp;</span>
            in Touch.
          </h3>
          <p className='font-thin mt-1 text-center '>So that we can talk more about...</p>
        </article>
        <article className='flex justify-center gap-3 mt-10 items-center'>
          <Link href='mailto:shyamayadav154@gmail.com'>
            <AiOutlineMail className='h-7 w-7 text-zinc-300 transition-all hover:scale-125 hover:text-zinc-100' />
          </Link>
          <Link target='_blank' href='https://github.com/shyamayadav154'>
            <AiFillGithub className='h-7 w-7 text-zinc-300 transition-all hover:scale-125 hover:text-zinc-100' />
          </Link>
          <Link target='_blank' href='https://www.linkedin.com/in/shyamayadav154/'>
            <AiFillLinkedin className='h-7 w-7 transition-all hover:scale-125 text-zinc-300 hover:text-zinc-100' />
          </Link>
        </article>
        <article className='grid place-content-center mt-10'>
          <div>
            <span className='font-thin'>Made with ❤️ by &nbsp;</span>
            Shyamanand Yadav
          </div>
        </article>
      </Container>
    </footer>
  );
};

const ProjectSection = () => {
  return (
    <motion.section
      transition={{ delay: 1.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='mt-24 m-5'
    >
      <h2 className='text-4xl text-center  z-20 bg-zinc-900 sticky top-0 py-5  '>
        <span className='font-thin'>Personal</span>
        &nbsp;
        <span>Projects</span>
      </h2>
      <article className='gap-5 grid pt-5 md:grid-cols-2 '>
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </article>
    </motion.section>
  );
};

type ProjectCardProps = (typeof projectData)[0];

const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  function handleMouseMove({ clientX, clientY, currentTarget }:React.MouseEvent ) {
    if (currentTarget == null) return;
    let { left, top } = currentTarget.getBoundingClientRect();
    let xPostion = clientX - left;
    let yPosition = clientY - top;
    console.log(xPostion, yPosition);
    mouseX.set(xPostion);
    mouseY.set(yPosition);
  }
  return (
    <motion.article
      onMouseMove={handleMouseMove}
      className='rounded-xl relative group border bg-zinc-800  p-5 border-zinc-700  text-zinc-300 flex  flex-col justify-between    '
    >
      <motion.div
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgb(254 215 170 / 0.10 ),transparent 40%)`,
        }}
        className='absolute pointer-events-none  -inset-px opacity-0 group-hover:opacity-100 transition-all duration-200 rounded-xl'
      />
      <section className='pb-5'>
        <Image
          src={project.img}
          width={500}
          className='flex-1 aspect-[16/10]  relative z-10  object-cover mx-auto w-full rounded-lg'
          height={300}
          alt={project.title}
        />
        <div className='mt-6'>
          <h3 className='text-2xl text-zinc-100 font-medium flex items-center'>
            {project.title}
            <span className='font-thin text-base'>&nbsp;</span>
          </h3>
          <section className='py-2'>
            <ul role='skills' className='flex gap-2 flex-wrap'>
              {project.techStacks.map((skill) => (
                <li
                  className='px-2 py-1 text-gray-200 whitespace-nowrap bg-zinc-700 rounded'
                  key={skill.id}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </section>

          <p className='leading-tight mt-1'>{project.desc}</p>
        </div>
      </section>
      <section className='px-4 pt-4 border-t border-zinc-600 flex justify-end gap-6'>
        <Link
          target='_blank'
          className='px-4 py-1.5 text-zinc-400 hover:text-zinc-300 hover:underline rounded'
          href={project.repo}
        >
          Source code
        </Link>
        <Link
          target='_blank'
          className='px-4 transition-colors duration-200 hover:bg-orange-200/90 hover:underline py-2 bg-orange-200 text-gray-900 font-medium rounded-md flex items-center gap-2'
          href={project.url}
        >
          Demo
          <BiLinkExternal />
        </Link>
      </section>
    </motion.article>
  );
};

const Container = ({ children }: { children: ReactNode }) => {
  return <section className='w-full lg:max-w-6xl mx-auto '>{children}</section>;
};
