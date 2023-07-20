import { CardDivasS, DivasAtuaisS, TextCardDivasS } from "@/app/styles/styles"
import Image from "next/image";
import NinaSilva from "../imgs/NinaSilva.jpeg";
import KimberlyBryant from "../imgs/KimberlyBryant.png";
import ReshmaSaujani from "../imgs/ReshmanSaujani.jpeg";
import SusanWojcicki from "../imgs/SusanWojcicki.jpeg";
import VirginiaRometty from "../imgs/VirginiaRometty.jpeg";

export default function DivasAtuais() {
  return (
    <>
    <DivasAtuaisS>
      <CardDivasS>
        <Image src={KimberlyBryant} alt="Kimberyly Bryant" height={200}/>
        <TextCardDivasS>
          <h2>Kimberly Bryant</h2>
          <p>Fundadora da Black Girls Code</p>
        </TextCardDivasS>
        <TextCardDivasS>
          <h2>Nina Silva</h2>
          <p>Sócia fundadora do Movimento Black Money e D’Black Bank. 
            Uma das 100 pessoas afrodescendentes com menos de 40 anos mais influentes do mundo</p>
        </TextCardDivasS>
        <Image src={NinaSilva} alt="Nina Silva" height={200}/>
      </CardDivasS>
      <CardDivasS>
      <Image src={ReshmaSaujani} alt="Reshma Saujani" height={200}/>
      <TextCardDivasS>
        <h2>Reshma Saujani</h2>
        <p>Fundadora da organização Girls Who Code,</p>
      </TextCardDivasS>
      <TextCardDivasS>
        <h2>Susan Wojcicki</h2>
        <p>Chamada de a pessoa mais importante da publicidade e a a Googler mais importante que você nunca ouviu sobre, 
            ela foi considerada a 16ª na Lista das mulheres mais poderosas segundo a revista Forbes em 2011.</p>
      </TextCardDivasS>
        <Image src={SusanWojcicki} alt="Susan Wojcicki" height={200}/>
      </CardDivasS>
      <CardDivasS>
        <Image src={VirginiaRometty} alt="Virginia Rometty" height={200}/>
        <TextCardDivasS>
          <h2>Virginia Rometty</h2>
          <p>Atual Chairwoman e CEO da IBM, e a primeira mulher a ser líder da companhia.</p>
        </TextCardDivasS>
      </CardDivasS>
    </DivasAtuaisS>
    </>
  )
}