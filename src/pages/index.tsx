import { projectData } from "@/data/data";
import { Inter, Work_Sans } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
const ws = Work_Sans({
    subsets: ["latin"],
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Shyamanand Yadav - FullStack Devloper</title>
            </Head>
            <main
                className={` text-white min-h-screen bg-zinc-900  ${ws.className} `}
            >
                <Container>
                    <section className="sm:pt-32 pt-20 p-5">
                        <motion.div
                            initial={{ opacity: 0, zoom: 0 }}
                            animate={{ opacity: 1, zoom: 1 }}
                        >
                            <Image
                                src="/profile.jpg"
                                alt="profile"
                                width={64}
                                height={64}
                                priority
                                className="rounded-full  object-cover h-16 w-16 transition-all hover:-rotate-12"
                            />
                        </motion.div>
                        <article className="mt-3 ">
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="sm:text-6xl text-4xl font-thin tracking-tight"
                            >
                                Shyamanand Yadav
                            </motion.h1>
                            <motion.h2
                                transition={{ delay: 0.2 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="sm:text-3xl text-xl uppercase tracking-tight mt-1"
                            >
                                Fullstack Developer
                            </motion.h2>
                            <motion.p
                                transition={{ delay: 0.5 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-zinc-400 mt-6 "
                            >
                                I am a fullstack developer with over 1 year of experience in
                                building web applications. I am passionate about building
                                scalable and maintainable web applications.
                            </motion.p>
                        </article>
                        <motion.article
                            transition={{ delay: 0.7 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-6"
                        >
                            <div className="flex gap-3 items-center">
                                <Link href="mailto:shyamayadav154@gmail.com">
                                    <AiOutlineMail className="h-7 w-7 text-zinc-300 transition-all hover:scale-125 hover:text-zinc-100" />
                                </Link>
                                <Link target="_blank" href="https://github.com/shyamayadav154">
                                    <AiFillGithub className="h-7 w-7 text-zinc-300 transition-all hover:scale-125 hover:text-zinc-100" />
                                </Link>
                                <Link
                                    target="_blank"
                                    href="https://www.linkedin.com/in/shyamayadav154/"
                                >
                                    <AiFillLinkedin className="h-7 w-7 transition-all hover:scale-125 text-zinc-300 hover:text-zinc-100" />
                                </Link>
                            </div>
                            <button className="px-7 mt-3 font-medium py-2 hover:bg-zinc-600 -ml-2 rounded-lg bg-zinc-700">
                                Resume
                            </button>
                        </motion.article>
                    </section>
                    <ProjectSection />
                </Container>
                <Footer />
            </main>
        </>
    );
}

const Footer = () => {
    return (
        <footer className=" bg-black border-zinc-600 rounded-t-3xl mt-32 py-10">
            <Container>
                <article className="grid place-content-center">
                    <h3 className="sm:text-5xl text-3xl text-center">
                        <span className="font-thin">
                            Get&nbsp;
                        </span>
                        in Touch.
                    </h3>
                    <p className="font-thin mt-1 text-center ">
                        So that we can talk more about...
                    </p>
                </article>
                <article className="flex justify-center gap-3 mt-10 items-center">
                    <Link href="mailto:shyamayadav154@gmail.com">
                        <AiOutlineMail className="h-7 w-7 text-zinc-300 transition-all hover:scale-125 hover:text-zinc-100" />
                    </Link>
                    <Link target="_blank" href="https://github.com/shyamayadav154">
                        <AiFillGithub className="h-7 w-7 text-zinc-300 transition-all hover:scale-125 hover:text-zinc-100" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/shyamayadav154/"
                    >
                        <AiFillLinkedin className="h-7 w-7 transition-all hover:scale-125 text-zinc-300 hover:text-zinc-100" />
                    </Link>
                </article>
                <article className="grid place-content-center mt-10">
                    <div>
                        <span className="font-thin">
                            Made with ❤️ by &nbsp;
                        </span>
                        Shyamanand Yadav
                    </div>
                </article>
            </Container>
        </footer>
    );
};

const ProjectSection = () => {
    return (
        <motion.section transition={{delay:1.2}} initial={{opacity:0}} animate={{opacity:1}} className="mt-24 m-5">
            <h2 className="text-4xl  bg-zinc-900 sticky top-0 py-5  ">
                <span className="font-thin">
                    Personal
                </span>
                &nbsp;
                <span>
                    Projects
                </span>
            </h2>
            <article className="space-y-10 ">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </article>
        </motion.section>
    );
};

type ProjectCardProps = typeof projectData[0];

const ProjectCard = ({ project }: {
    project: ProjectCardProps;
}) => {
    return (
        <article className="rounded-xl text-zinc-300 flex  flex-col justify-between bg-zinc-800  overflow-hidden gap-6">
            <section className="p-3">
                <Image
                    src={project.img}
                    width={500}
                    className="flex-1 mx-auto w-full rounded-lg"
                    height={300}
                    alt={project.title}
                />
                <div className="mt-6">
                    <h3 className="text-2xl text-zinc-100 font-medium flex items-center">
                        {project.title}
                        <span className="font-thin text-base">
                            &nbsp;(built using MERN stack)
                        </span>
                    </h3>

                    <p className="leading-tight mt-1">
                        {project.desc}
                    </p>
                </div>
                <div className="mt-2">
                    <span className="text-zinc-100 font-thin text-xl">
                        Features
                    </span>
                    <ul className="list-disc ml-6 ">
                        {project.features.map((feature) => (
                            <li key={feature.id} className="leading-tight">
                                {feature.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="p-4 border-t border-zinc-600 flex justify-end gap-6">
                <Link
                    target="_blank"
                    className="px-4 py-1.5 text-zinc-400 hover:text-zinc-300 hover:underline rounded"
                    href={project.repo}
                >
                    Source code
                </Link>
                <Link
                    target="_blank"
                    className="px-4 hover:bg-zinc-600 hover:underline py-2 bg-zinc-700 rounded flex items-center gap-2"
                    href={project.url}
                >
                    Demo<BiLinkExternal />
                </Link>
            </section>
        </article>
    );
};

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <section className="w-full sm:max-w-xl mx-auto">
            {children}
        </section>
    );
};
