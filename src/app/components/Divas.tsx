import DivaAnnieEasley from "@/app/components/AnnieEasley";
import DivaGladysWest from "@/app/components/GladysWest";
import DivaMargaretHamilton from "@/app/components/MargaretHamilton";
import DivaMarianCroak from "@/app/components/MarianCroak";
import DivaRadiaPerlman from "@/app/components/RadiaPerlman";
import IconClose from "@/app/icons/IconClose";
import { ElasS } from "@/app/styles/styles";
import Link from "next/link";
import { useState } from "react";

export default function DivasTech() {
  const [isDivaAEOpen, setIsDivaAEOpen] = useState(false);
  const [isDivaGWOpen, setIsDivaGWOpen] = useState(false);
  const [isDivaMHOpen, setIsDivaMHOpen] = useState(false);
  const [isDivaMCOpen, setIsDivaMCOpen] = useState(false);
  const [isDivaRPOpen, setIsDivaRPOpen] = useState(false);

  const handleDivaAEClick = () => {
    setIsDivaAEOpen(true);
  };

  const handleDivaGWClick = () => {
    setIsDivaGWOpen(true);
  };

  const handleDivaMHClick = () => {
    setIsDivaMHOpen(true);
  };

  const handleDivaMCClick = () => {
    setIsDivaMCOpen(true);
  };

  const handleDivaRPClick = () => {
    setIsDivaRPOpen(true);
  };

  const handleCloseDivaAE = () => {
    setIsDivaAEOpen(false);
  };

  const handleCloseDivaGW = () => {
    setIsDivaGWOpen(false);
  };

  const handleCloseDivaMH = () => {
    setIsDivaMHOpen(false);
  };

  const handleCloseDivaMC = () => {
    setIsDivaMCOpen(false);
  };

  const handleCloseDivaRP = () => {
    setIsDivaRPOpen(false);
  };
  return (
    <>
    <ElasS>
    <div onClick={handleDivaAEClick}>
            <DivaAnnieEasley />
        </div>
        <div onClick={handleDivaGWClick}>
            <DivaGladysWest />
        </div>
        <div onClick={handleDivaMHClick}>
            <DivaMargaretHamilton />
        </div>
        <div onClick={handleDivaMCClick}>
            <DivaMarianCroak />
        </div>
        <div onClick={handleDivaRPClick}>
            <DivaRadiaPerlman />
        </div>
      </ElasS>

      {isDivaAEOpen && (
        <div className="popup-overlay">
          <div className="popup-modal">
          <button onClick={handleCloseDivaAE}><abbr title="Fechar"><IconClose /></abbr></button>
            <h3>23/04/1933 - 25/11/2011</h3>
            <div className="diva">
                <p>Annie J. Easley foi uma cientista da computação, matemática e cientista de foguetes americana.</p>
                <p>Trabalhou no Lewis Research Center (atualmente denominado Centro de Pesquisa John H. Glenn) da 
                  NASA e sua antecessora, National Advisory Comittee for Aeronautics (NACA).</p>
                <p>Foi a líder do time responsável pelo desenvolvimento do software Centaur para processo conhecido 
                  como &quot;staging&quot; - processo de combinação de várias sessões de foguete que pegam fogo em uma ordem 
                  específica e, então, se destacam da nave principal, para que essa atinja o espaço.</p>
                <p> Além disso, Annie foi uma das primeiras mulheres afro-descendentes a trabalhar, como cientista 
                    da computação, para a NASA.</p>
            </div>
                <div className="saibamais">Saiba mais sobre Annie{' '}<a href="https://pt.wikipedia.org/wiki/Annie_Easley" target="_blank">
                  <span>aqui</span></a></div>
          </div>
        </div>
      )}

  {isDivaGWOpen && (
        <div className="popup-overlay">
          <div className="popup-modal">
          <button onClick={handleCloseDivaGW}><abbr title="Fechar"><IconClose /></abbr></button>
          <h3>1930 - Atualmente</h3>
          <div className="diva">
            <p> Gladys Mae West (nascida Gladys Mae Brown), é uma matemática norte-americana que serviu de 
              base essencial no desenvolvimento e criação do GPS.</p>
            <p>Nascida no Condado de Dinwiddie, ela não se interessava por plantações de algodão ou tabaco, 
              que era o trabalho dos pais e dos amigos, e sabia que a melhor maneira de deixar o campo seria 
              através da educação.</p>
            <p>Quando estava no ensino médio, ela soube que os melhores alunos do último ano poderiam ganhar 
              uma bolsa de estudos para a Universidade de Virgínia, Gladys se empenhou nos estudos e se formou 
              como a primeira da classe.</p>
            <p>Com bolsa de estudos para a universidade, ela se graduou em matemática e por dois anos lecionou 
              no Condado de Sussex antes de voltar para a faculdade a fim de obter um mestrado.</p>
            <p>Em 1956, ingressou na base naval de Dahlgren, sendo a segunda mulher negra a ser empregada na 
              instituição.</p>
          </div>
            <div className="saibamais">Saiba mais sobre Gladys{' '}<a href="https://pt.wikipedia.org/wiki/Gladys_West" target="_blank">
              <span>aqui</span></a></div>
          </div>
        </div>
      )}

  {isDivaMHOpen && (
        <div className="popup-overlay">
          <div className="popup-modal">
          <button onClick={handleCloseDivaMH}><abbr title="Fechar"><IconClose /></abbr></button>
          <h3>17/08/1936 - Atualmente</h3>
          <div className="diva">
                <p>Margaret Heafield Hamilton é uma cientista da computação, engenheira de software e empresária 
                  estadunidense.</p>
              <p>Foi diretora da Divisão de Software no Laboratório de Instrumentação do MIT, que desenvolveu o 
                programa de voo usado no projeto Apollo 11, a primeira missão tripulada à Lua. O software de Hamilton 
                impediu que o pouso na Lua fosse abortado.</p>
              <p>Margaret publicou mais de 130 artigos, atas e relatórios relacionados aos 60 projetos e seis 
                programas importantes nos quais ela esteve envolvida.</p>
              <p>Em 22 de novembro de 2016 foi premiada com a Medalha Presidencial da Liberdade pelo presidente 
                dos Estados Unidos Barack Obama, honraria recebida por seu trabalho sobre o desenvolvimento do 
                software de voo a bordo das missões Apollo da NASA.</p>
            </div>
            <div className="saibamais">Saiba mais sobre Margaret{' '}<a href="https://pt.wikipedia.org/wiki/Margaret_Hamilton_(cientista_da_computa%C3%A7%C3%A3o)" target="_blank">
              <span>aqui</span></a></div>
          </div>
        </div>
      )}

  {isDivaMCOpen && (
        <div className="popup-overlay">
          <div className="popup-modal">
          <button onClick={handleCloseDivaMC}><abbr title="Fechar"><IconClose /></abbr></button>
          <h3>14/05/1955 - Atualmente</h3>
          <div className="diva">
            <p>Marian Rogers Croak é vice-presidente de engenharia do Google. Ela foi vice-presidente sênior de 
              pesquisa e desenvolvimento da AT&T e detém mais de 200 patentes.</p>
            <p>Marian foi indicada para o Women in Technology International Hall of Fame em 2013.</p>
            <p>Em 2022, Croak foi incluída no National Inventors Hall of Fame por sua patente sobre a tecnologia 
              VoIP (Voice over Internet Protocol). Dessa forma, ela se tornou uma das duas primeiras mulheres 
              negras a receber essa honra, junto com Patricia Bath. A sua invenção permite que os usuários façam 
              chamadas pela internet em vez de uma linha telefônica.</p>
              <p>Atualmente, o uso generalizado da tecnologia VoIP é vital para trabalhos e conferências remotos.</p>
            </div>
            <div className="saibamais">Saiba mais sobre Marian{' '}<a href="https://pt.wikipedia.org/wiki/Marian_Croak" target="_blank">
              <span>aqui</span></a></div>
          </div>
        </div>
      )}

  {isDivaRPOpen && (
        <div className="popup-overlay">
          <div className="popup-modal">
          <button onClick={handleCloseDivaRP}><abbr title="Fechar"><IconClose /></abbr></button>
          <h3>01/01/1951 - Atualmente</h3>
          <div className="diva">
            <p>Radia Joy Perlman é uma cientista da computação estadunidense, projetista de software e engenheira 
              de redes.</p>
            <p>É algumas vezes referenciada como a &quot;mãe da Internet&quot; por sua invenção do protocolo Spanning Tree 
              (STP), que é fundamental para a operação de pontes de rede mais conhecida por bridge (redes de 
              computadores), enquanto trabalhava para a Digital Equipment Corporation.</p>
            <p>Ela também fez grandes contribuições para muitas outras áreas de design e padronização de redes, 
              como os protocolos de roteamento link-state.</p>
            <p>Mais recentemente, ela inventou o protocolo TRILL para corrigir algumas das deficiências das spanning
              trees. Atualmente, ela é funcionária da Dell EMC.</p>
          </div>
            <div className="saibamais">Saiba mais sobre Radia{' '}<a href="https://pt.wikipedia.org/wiki/Radia_Perlman" target="_blank">
              <span>aqui</span></a></div>
          </div>
        </div>
      )}

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .popup-modal {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          z-index: 9999;
          width: 50%;
        }

        .popup-modal h3 {
          text-align: center;
          text-transform: uppercase;
          text-decoration: underline;
          margin-bottom: 20px;
        }

        .popup-modal .diva {
          font-size: 12px;
          text-align: justify;
          margin-bottom: 30px;
        }

        .popup-modal .saibamais {
          font-size: 10px;
          text-transform: uppercase;
          text-align: end;
        }

        .popup-modal span {

          &:hover {
          text-decoration: underline;
          color: rgba(0, 0, 0, 0.8);
          }
        }
      `}</style>
      </>
  )
}