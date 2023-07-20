import React from "react";
import Image from "next/image";
import MarianCroak from '../imgs/MarianCroak.jpeg';
import { DivaS } from "@/app/styles/styles";

export default function DivaMarianCroak() {
  return (
    <DivaS>
    <><Image src={MarianCroak} alt="Marian Croak" />
    <h1>Marian Croak</h1></>
  </DivaS>
  )
}