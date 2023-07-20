import React from "react";
import Image from "next/image";
import MargaretHamilton from '../imgs/MargaretHamilton.jpeg';
import { DivaS } from "@/app/styles/styles";

export default function DivaMargaretHamilton() {
  return (
    <DivaS>
    <><Image src={MargaretHamilton} alt="Margaret Hamilton" />
    <h1>Margaret Hamilton</h1></>
  </DivaS>
  )
}