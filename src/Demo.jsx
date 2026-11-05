import React from "react";
import { Compass, ArrowUpRight, Check, Heart, MoveUpRight } from "./Icons.jsx";
import image_rota from "../assets/rota.webp";
function ModelImage({ alt }) {
  return <img src={image_rota} alt={alt} width={1400} height={1000} />;
}

const DemoNote = ({ prefix: e }) => (
  <p className={`${e}-note`}>
    Experiência demonstrativa · marca, serviços e valores ilustrativos. Suas
    escolhas ficam apenas nesta tela.
  </p>
);
const DemoData1 = [
  {
    name: `Entre dunas e lagoas`,
    place: `LENÇÓIS MARANHENSES`,
    days: `5 dias`,
    type: `Natureza`,
    desc: `Caminhadas na areia, lagoas de água doce e tardes com tempo de sobra.`,
    stops: [
      `Chegada e sabores locais`,
      `Travessia entre dunas`,
      `Um dia nas lagoas`,
    ],
  },
  {
    name: `Caminhos da Mantiqueira`,
    place: `SERRA DA MANTIQUEIRA`,
    days: `4 dias`,
    type: `Montanha`,
    desc: `Estradas pequenas, trilhas na serra e o aconchego de dias mais lentos.`,
    stops: [
      `Estrada e café da serra`,
      `Trilha e paisagem`,
      `Pequenos produtores`,
    ],
  },
  {
    name: `Cores de Salvador`,
    place: `BAHIA`,
    days: `3 dias`,
    type: `Cultura`,
    desc: `Arquitetura, mesas cheias de história e encontros com a cidade.`,
    stops: [
      `Primeiro olhar pelo centro`,
      `Arte, música e sabores`,
      `Uma tarde perto do mar`,
    ],
  },
];
function RotaDemo() {
  let [selectedRouteIndex, setSelectedRouteIndex] = React.useState(0),
    [routeChosen, setRouteChosen] = React.useState(!1),
    i = DemoData1[selectedRouteIndex];
  return (
    <div id={`demo-top`} className={`rt-page`}>
      <div className={`rt-nav`}>
        <a href={`#demo-top`} className={`rt-logo`}>
          rota
          <Compass size={24} />
        </a>
        <span>VIAGENS COM OUTRO OLHAR</span>
        <a href={`#rt-discover`}>
          {`Explore destinos `}
          <ArrowUpRight size={17} />
        </a>
      </div>
      <section className={`rt-hero`}>
        <div className={`rt-title`}>
          <p>MENOS ÓBVIO. MAIS MUNDO.</p>
          <h1>
            A próxima história
            <br />
            {`começa `}
            <em>
              fora
              <br />
              do roteiro.
            </em>
          </h1>
          <a href={`#rt-discover`}>
            {`Encontre sua próxima rota `}
            <ArrowUpRight />
          </a>
        </div>
        <div className={`rt-photo`}>
          <ModelImage
            slug={`rota`}
            alt={`Paisagem de viagem inspiradora com natureza e horizonte aberto`}
          />
          <span className={`rt-postcard`}>
            vá com
            <br />
            <em>curiosidade.</em>
            <Compass size={36} />
          </span>
          <span className={`rt-caption`}>UM CONVITE PARA EXPLORAR · DEMO</span>
        </div>
      </section>
      <section className={`rt-manifesto`}>
        <span>01 / A IDEIA</span>
        <h2>
          O destino importa.
          <br />
          {`O que você vive, `}
          <em>mais ainda.</em>
        </h2>
        <p>
          Uma seleção conceitual de viagens para quem troca a lista de pontos
          turísticos por histórias para contar.
        </p>
      </section>
      <section className={`rt-discover`} id={`rt-discover`}>
        <div className={`rt-discover-top`}>
          <div>
            <p>02 / ENCONTRE SEU CAMINHO</p>
            <h2>Qual é o seu horizonte?</h2>
          </div>
          <Compass size={48} strokeWidth={1} />
        </div>
        <div className={`rt-tabs`}>
          {DemoData1.map((n, i) => (
            <button
              key={n.type}
              aria-pressed={selectedRouteIndex === i}
              onClick={() => {
                (setSelectedRouteIndex(i), setRouteChosen(!1));
              }}
            >
              {n.type}
              {` `}
              <ArrowUpRight size={15} />
            </button>
          ))}
        </div>
        <div className={`rt-itinerary`}>
          <div className={`rt-destination`}>
            <span>{i.place}</span>
            <h3>{i.name}</h3>
            <p>{i.desc}</p>
            <span className={`rt-duration`}>
              {i.days}
              {` · roteiro ilustrativo`}
            </span>
          </div>
          <div className={`rt-route`}>
            {i.stops.map((e, t) => (
              <div key={e}>
                <span>0{t + 1}</span>
                <p>
                  {e}
                  <small>Possibilidade de experiência</small>
                </p>
              </div>
            ))}
            <button
              onClick={() => setRouteChosen(!routeChosen)}
              aria-pressed={routeChosen}
            >
              {routeChosen ? <Check size={18} /> : <Heart size={18} />}
              {` `}
              {routeChosen ? `Rota selecionada` : `Quero explorar essa rota`}
            </button>
            <p role={`status`}>
              {routeChosen
                ? `Escolha registrada somente nesta tela. Nenhuma viagem contratada.`
                : `Experimente a escolha de um roteiro. Sem envio de dados.`}
            </p>
          </div>
        </div>
      </section>
      <section className={`rt-bottom`}>
        <span>VIAJAR É MUDAR DE PERSPECTIVA.</span>
        <p>
          Leve menos certezas.
          <br />
          <em>Volte com mais histórias.</em>
        </p>
        <a href={`#rt-discover`} aria-label={`Voltar aos roteiros`}>
          <MoveUpRight size={35} />
        </a>
      </section>
      <DemoNote prefix={`rt`} />
    </div>
  );
}

export default RotaDemo;
