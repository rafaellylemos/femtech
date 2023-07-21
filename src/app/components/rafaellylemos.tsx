import React from "react";
import Image from "next/image";
import RafaellyLemos from "../imgs/RafaellyLemos.jpeg";
import { RafaellyLemosS } from "@/app/styles/styles";
import react from "../imgs/react.png";
import html5 from "../imgs/HTML5.png";
import css3 from "../imgs/CSS3.png";
import js from "../imgs/JS.png";
import ts from "../imgs/TS.png";
import next from "../imgs/next.png";
import tailwind from "../imgs/tailwind.png";
import git from "../imgs/git.png";
import github from "../imgs/github.png";
import vercel from "../imgs/vercel.png";

export function DevRafaellyLemos() {
  return (
    <>
    <RafaellyLemosS>
      <div className="foto">
        <Image src={RafaellyLemos} alt="Rafaelly Lemos" title="Rafaelly Lemos" height={500} width={500}/>
      </div>
      <div>
        <h2>Fotógrafa migrando pro mundo Tech &#128248; &#128640;</h2>
        <h3>Estudante de Desenvolvimento Web com foco em Frontend.</h3>
        <p>Tenho 33 anos, sou mulher, mãe, Nordestina e meu sobrenome é &quot;determinação&quot;...muito prazer!</p>
        <p>Sou nascida e criada no mundo das artes e, embora seja apaixonada pela minha profissão, senti que era 
          hora de respirar novos ares...Então eu mudei (:</p>
        <p>Mudar de carreira não é fácil, mas aprendi que não devemos ir pelo caminho mais fácil, mas sim pelo 
          caminho que nos enche os olhos e faz o coração aquecer.</p>
        <p>Atualmente, estou me dividindo entre meus jobs como fotógrafa e meus estudos em Frontend. Esse site é um
          projeto desenvolvido para um desses estudos.</p>
        <p>Aqui, eu utilizo React, NextJs, HTML, CSS, JavaScript, TypeScript, Styled Components, Git, Github e Vercel, mas 
          também tenho outros projetos que englobam outras tecnologias. Abaixo segue com o que tenho prática:
        </p>
        <p className="tecnologias">Tecnologias:</p>

          <p className="tecnologia">    
              <Image src={react} alt="React" title="React" height={80}/>
              <Image src={html5} alt="HTML5" title="HTML5" height={80}/>
              <Image src={css3} alt="CSS3" title="CSS3" height={80}/>
              <Image src={js} alt="JavaScript" title="JavaScript" height={80}/>
              <Image src={ts} alt="TypeScript" title="TypeScript" height={80}/>
              <Image src={next} alt="NextJS" title="NextJS" height={80}/>
              <Image src={tailwind} alt="TailwindCSS" title="TailwindCSS" height={80}/>
              <Image src={git} alt="GIT" title="GIT" height={80}/>
              <Image src={github} alt="Github" title="Github" height={80}/>
              <Image src={vercel} alt="Vercel" title="Vercel" height={80}/>
              </p>
            
        <p className="conhecimentos">Conhecimentos em:</p>
            <p className="conhecimento">-Metodologias ágeis &#40;Scrum / Kanban&#41;</p>
            <p className="conhecimento">-Styled Components</p> 
            <p className="conhecimento">-NodeJs</p>
            <p className="conhecimento">-React Native</p>
            <p className="conhecimento">-Prisma / SQLite</p>
            <p className="conhecimento">-DOM</p>
            <p className="conhecimento">-UX / UI</p>
      </div>
    </RafaellyLemosS>
      </>
  )
};