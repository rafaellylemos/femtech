import React from "react";
import Image from "next/image";
import RadiaPerlman from '../imgs/RadiaPerlman.jpeg';
import { DivaS } from "@/app/styles/styles";

export default function DivaRadiaPerlman() {
  return (
    <DivaS>
    <><Image src={RadiaPerlman} alt="Radia Perlman" />
    <h1>Radia Perlman</h1></>
  </DivaS>
  )
}