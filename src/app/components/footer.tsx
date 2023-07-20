'use client';

import IconGithub from "@/app/icons/IconGithub";
import IconLinkedin from "@/app/icons/IconLinkedin";
import IconVercel from "@/app/icons/IconVercel";
import { FooterS } from "@/app/styles/styles"

export default function Footer() {
  return (
    <>
  <FooterS>
    <div className="redessociais">
        <div>
          <a href="https://www.linkedin.com/in/rafaelly-lemos" target="_blank" rel="noopener noreferrer">
          <abbr title="Linkedin"><IconLinkedin /></abbr>
          </a>
        </div>
        <div>
          <a href="https://www.github.com/rafaellylemos" target="_blank" rel="noopener noreferrer">
          <abbr title="Github"><IconGithub /></abbr>
          </a>
        </div>
        <div>
          <a href="https://www.vercel.com/rafaellylemos" target="_blank" rel="noopener noreferrer">
          <abbr title="Vercel"><IconVercel /></abbr>
        </a>
        </div>
    </div>
    <div className="copyright">
      <p>&copy; Rafaelly Lemos | 2023</p>
    </div>
  </FooterS>
      </>
  );
}