import React from "react";
import Image from "next/image";
import AdaLovelace from '../imgs/AdaLovelace.jpg';
import CarolShaw from '../imgs/CarolShaw.jpeg';
import ElizabethSmithFriedman from '../imgs/ElizabethSmithFriedman.jpeg';
import GraceHopper from '../imgs/GraceHopper.jpeg';
import HedyLamarr from '../imgs/HedyLamarr.jpeg';
import SisterMaryKennethKeller from '../imgs/SisterMaryKennethKeller.png';
import { Back, Card, DivaS, DivasS, Front } from "@/app/styles/styles";

export function Divas() {
  const [isFlippedAL, setIsFlippedAL] = React.useState(false);
  const [isFlippedCS, setIsFlippedCS] = React.useState(false);
  const [isFlippedESF, setIsFlippedESF] = React.useState(false);
  const [isFlippedGH, setIsFlippedGH] = React.useState(false);
  const [isFlippedHL, setIsFlippedHL] = React.useState(false);
  const [isFlippedSMKK, setIsFlippedSMKK] = React.useState(false);
  return (
    <>
    <DivasS>
      <DivaS>
      <Card onMouseEnter={() => setIsFlippedAL(true)}
          onMouseLeave={() => setIsFlippedAL(false)}
          isFlippedAL={isFlippedAL}>
          <Front isFlippedAL={isFlippedAL}>
        <Image src={AdaLovelace} alt="Ada Lovelace" height={200}/>
        </Front>
          <Back isFlippedAL={isFlippedAL}>
            <h2><a href="https://pt.wikipedia.org/wiki/Ada_Lovelace" target="_blank">Ada Lovelace</a></h2>
          </Back>
        </Card>
      </DivaS>
      <DivaS>
      <Card onMouseEnter={() => setIsFlippedCS(true)}
          onMouseLeave={() => setIsFlippedCS(false)}
          isFlippedCS={isFlippedCS}>
          <Front isFlippedCS={isFlippedCS}>
          <Image src={CarolShaw} alt="Carol Shaw" height={200}/>
          </Front>
          <Back isFlippedCS={isFlippedCS}>
            <h2><a href="https://pt.wikipedia.org/wiki/Carol_Shaw" target="_blank">Carol Shaw</a></h2>
          </Back>
        </Card>
        </DivaS>
        <DivaS>
        <Card onMouseEnter={() => setIsFlippedESF(true)}
          onMouseLeave={() => setIsFlippedESF(false)}
          isFlippedESF={isFlippedESF}>
          <Front isFlippedESF={isFlippedESF}>
            <Image src={ElizabethSmithFriedman} alt="Elizabeth Smith Friedman" height={200}/>
          </Front>
          <Back isFlippedESF={isFlippedESF}>
            <h2><a href="https://en.wikipedia.org/wiki/Elizebeth_Smith_Friedman" target="_blank">Elizabeth Smith Friedman</a></h2>
          </Back>
        </Card>
        </DivaS>
        <DivaS>
        <Card onMouseEnter={() => setIsFlippedGH(true)}
          onMouseLeave={() => setIsFlippedGH(false)}
          isFlippedGH={isFlippedGH}>
          <Front isFlippedGH={isFlippedGH}>
        <Image src={GraceHopper} alt="Grace Hopper" height={200}/>
        </Front>
          <Back isFlippedGH={isFlippedGH}>
          <h2><a href="https://pt.wikipedia.org/wiki/Grace_Hopper" target="_blank">Grace Hopper</a></h2>
          </Back>
        </Card>
      </DivaS>
      <DivaS>
      <Card onMouseEnter={() => setIsFlippedHL(true)}
          onMouseLeave={() => setIsFlippedHL(false)}
          isFlippedHL={isFlippedHL}>
            <Front isFlippedHL={isFlippedHL}>
          <Image src={HedyLamarr} alt="Hedy Lamarr" height={200}/>
          </Front>
          <Back isFlippedHL={isFlippedHL}>
            <h2><a href="https://pt.wikipedia.org/wiki/Hedy_Lamarr" target="_blank">Hedy Lamarr</a></h2>
            </Back>
        </Card>
        </DivaS>
        <DivaS>
        <Card onMouseEnter={() => setIsFlippedSMKK(true)}
          onMouseLeave={() => setIsFlippedSMKK(false)}
          isFlippedSMKK={isFlippedSMKK}>
            <Front isFlippedSMKK={isFlippedSMKK}>
          <Image src={SisterMaryKennethKeller} alt="Sister Mary Kenneth Keller" height={200}/>
          </Front>
          <Back isFlippedSMKK={isFlippedSMKK}>
            <h2><a href="https://en.wikipedia.org/wiki/Mary_Kenneth_Keller" target="_blank">Sister Mary Kenneth Keller</a></h2>
            </Back>
        </Card>
        </DivaS>
      </DivasS>
      </>
  );
}
