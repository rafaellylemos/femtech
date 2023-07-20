"use client";

import React, { useState } from 'react';
import IconMenu from '@/app/icons/IconMenu';
import { DropdownItemS, DropdownListS, MenuDropdownS } from '@/app/styles/styles';
import Link from 'next/link';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <MenuDropdownS>
        <IconMenu onClick={handleToggleDropdown}/>
    </MenuDropdownS>
      {isOpen && (
        <DropdownListS>
          <DropdownItemS><Link href="/">Home</Link></DropdownItemS>
          <DropdownItemS><Link href="/quemsao">Quem são elas</Link></DropdownItemS>
          <DropdownItemS><Link href={'/news'}>Fique por dentro</Link></DropdownItemS>
          <DropdownItemS><Link href={'/mulheres-importantes-da-atualidade'}>+ Mulheres</Link></DropdownItemS>
          <DropdownItemS><Link href={'/rafaellylemos'}>Sobre a Dev</Link></DropdownItemS>
        </DropdownListS>
      )}
    </div>
  );
};

export default DropdownMenu;