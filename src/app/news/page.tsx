'use client';

import Formulario from "@/app/components/form";
import ImgHeader from "@/app/components/imgHeader";
import DropdownMenu from "@/app/components/menuDropdown";
import { MenuPagS, LinkMenuS, LogoPagS, TituloPagS } from "@/app/styles/styles";
import Link from "next/link";

export default function Teste() {
  return(
    <>
    <DropdownMenu />
    <MenuPagS>
      <ImgHeader />
      <LinkMenuS>
        <Link href="/quemsao">Quem são elas?</Link>
        <Link href={'/news'}>Fique por dentro</Link>
        <Link href={'/mulheres-importantes-da-atualidade'}>+ Mulheres</Link>
        <Link href={'/rafaellylemos'}>Sobre a Dev</Link>
      </LinkMenuS>
      <LogoPagS>
        <Link href={'/'}>FemTech</Link>
      </LogoPagS>
      <TituloPagS>
        <h1>Saiba mais</h1>
      </TituloPagS>
    </MenuPagS><Formulario /></>
  )
}