import React from "react";
import Image from "next/image";
import img02 from '../imgs/img02.jpeg';
import { ImgS } from "@/app/styles/styles";

const ImgHeader = () => {
  return (
    <ImgS>
      <Image src={img02} alt="Header" layout="fill" objectFit="cover" objectPosition="bottom"  
      style={{ opacity: 0.5 }}/>
    </ImgS>
  );
};

export default ImgHeader;
