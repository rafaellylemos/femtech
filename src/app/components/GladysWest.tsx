import React from "react";
import Image from "next/image";
import GladysWest from '../imgs/GladysWest.jpeg';
import { DivaS } from "@/app/styles/styles";

export default function DivaGladysWest() {
  return (
    <DivaS>
    <><Image src={GladysWest} alt="Gladys West" />
    <h1>Gladys West</h1></>
  </DivaS>
  )
}