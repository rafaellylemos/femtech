'use client';

import About from '@/app/components/about';
import ImgHeader from '@/app/components/imgHeader';
import { Divas } from '@/app/components/imgsDivas';
import DropdownMenu from '@/app/components/menuDropdown';
import IconMenu from '@/app/icons/IconMenu';
import GlobalStyle from '@/app/styles/globalStyle'
import { GaleriaS, LinkMenuS, LogoS, LogoSubS, MenuDropdownS, MenuS, UnderlineS} from '@/app/styles/styles';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <GlobalStyle />
    <DropdownMenu />
    <MenuS>
        <ImgHeader />
        <LinkMenuS>
          <Link href="/quemsao">Quem são elas?</Link>
          <Link href={'/news'}>Fique por dentro</Link>
          <Link href={'/mulheres-importantes-da-atualidade'}>+ Mulheres</Link>
          <Link href={'/rafaellylemos'}>Sobre a Dev</Link>
        </LinkMenuS>
        <LogoS>
          FemTech
          <LogoSubS>
            A Tecnologia é feminina!
          </LogoSubS>
        </LogoS>

    </MenuS>
    <About />
    <GaleriaS>
      Hall das Divas
      <UnderlineS />
    </GaleriaS>
    <Divas />
    </>
  );
}
