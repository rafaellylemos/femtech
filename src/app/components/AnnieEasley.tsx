import React from "react";
import Image from "next/image";
import AnnieEasley from '../imgs/AnnieEasley.jpeg';
import { DivaS } from "@/app/styles/styles";

export default function DivaAnnieEasley() {
  return (
    <DivaS>
      <><Image src={AnnieEasley} alt="Annie Easley" />
      <h1>Annie Easley</h1></>
    </DivaS>
  )
}