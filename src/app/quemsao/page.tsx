'use client';

import DivasTech from "@/app/components/Divas";
import ImgHeader from "@/app/components/imgHeader";
import DropdownMenu from "@/app/components/menuDropdown";
import { MenuPagS, LinkMenuS, LogoPagS, TituloPagS } from "@/app/styles/styles";
import Link from "next/link";

export default function QuemSao() {

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
        <h1>5 nomes para você não esquecer</h1>
      </TituloPagS>
    </MenuPagS>
    <DivasTech />
      </>
    )
}