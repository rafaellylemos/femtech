import React from "react";
import Image from "next/image";
import RafaellyLemos from "../imgs/RafaellyLemos.jpeg";
import { RafaellyLemosS } from "@/app/styles/styles";

export function DevRafaellyLemos() {
  return (
    <>
    <RafaellyLemosS>
      <div>
        <Image src={RafaellyLemos} alt="Rafaelly Lemos" height={300} width={300}/>
      </div>
      <div>
        <h2>Fotógrafa migrando pro mundo Tech &#128248; &#128640;</h2>
        <p>Estudante de Desenvolvimento Web com foco em Frontend.</p>
        <p>Tenho 33 anos, sou mulher, mãe, Nordestina e meu sobrenome é &quot;determinação&quot;...muito prazer!</p>
        <p>Sou nascida e criada no mundo das artes e, embora seja apaixonada pela minha profissão, senti que era 
          hora de respirar novos ares...</p>
          <p>Então eu mudei (:</p>
        <p>Mudar de carreira não é fácil, mas aprendi que não devemos ir pelo caminho mais fácil, mas sim pelo 
          caminho que nos enche os olhos e faz o coração aquecer.</p>
        <p>Atualmente, estou me dividindo entre meus jobs como fotógrafa e meus estudos em Frontend. Esse site é um
          projeto desenvolvido para um desses estudos.</p>
        <p>Aqui, eu utilizo HTML, CSS, JavaScript, TypeScript, Styled Components, Git, Github e Vercel, mas 
          também tenho outros projetos que englobam outras tecnologias. Abaixo segue com o que tenho prática:
        </p>
        <p className="tecnologias">Tecnologias:</p>
            <p className="tecnologia">-HTML5</p>
            <p className="tecnologia">-CSS3</p>
            <p className="tecnologia">-JavaScript</p>
            <p className="tecnologia">-TypeScript</p>
            <p className="tecnologia">-React</p>
            <p className="tecnologia">-Next.Js</p> 
            <p className="tecnologia">-Styled Components</p> 
            <p className="tecnologia">-TailwindCSS</p>
            <p className="tecnologia">-Git/ GitHub </p>
            <p className="tecnologia">-Vercel</p>
        <p className="conhecimentos">Conhecimentos em:</p>
            <p className="conhecimento">-Metodologias ágeis &#40;Scrum / Kanban&#41;</p>
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