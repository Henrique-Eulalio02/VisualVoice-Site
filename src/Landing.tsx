import "./Landing.css";
// @ts-ignore  
import hand from './assets/heroHand.png';
// @ts-ignore
import graph from './assets/graph.png';
//@ts-ignore
import booksImage from './assets/booksImage.png';
// @ts-ignore
import handCoin from './assets/handCoin.png';
// @ts-ignore
import heartIcon from './assets/heartIcon.png';
// @ts-ignore
import brainIcon from './assets/brainIcon.png';
// @ts-ignore
import notebookIcon from './assets/notebookIcon.png';

import { BsSoundwave } from "react-icons/bs";

const Landing = () => {
  return (
    <>
      <div className="m-full h-screen hero-page grid grid-cols-1 relative">
        <div className="logo relative z-0">
          <div className="title text-center pt-5 font-bold text-2xl  text-primary">
            <p>VisualVoice</p>
          </div>
          <div className="subtitle text-center text-[170px] font-bold">
            <p>VISUALVOICE</p>
          </div>
        </div>
        <div className="columns-3 px-10 relative z-10 container-info">
          <div className="hero-page-title h-screen inline-grid gap-4 grid-cols-1 content-center">
            <h2 className="text-5xl font-bold text-primary">Onde vozes se tornam visíveis.</h2>
            <a href="" className="w-40 h-12 text-center content-center rounded-3xl bg-primary text-white text-sm">Saiba Mais</a>
          </div>
          <div className="pb-20 h-screen">
            <img src={hand} alt="mao abstrata sinal" className="" />
          </div>
          <div className="hero-page-subtitle h-screen inline-grid gap-4 grid-cols-1 content-center">
            <BsSoundwave size={50} className="text-primary" />
            <p className="text-wrap text-justify text-secondary">
              Um mundo onde a comunicação não tem barreiras. Junte-se a nós na construção 
              de um futuro onde a inclusão é mais do que um ideal — é a norma.
            </p>
          </div>
        </div>
      </div>

      <div className="m-full h-screen bg-yellow-500 grid grid-cols-1 grid-rows-3 people-affected">
        <div className="title text-center self-end">
          <h1 className="text-primary font-bold text-6xl">Como as pessoas são afetadas.</h1>
        </div>
        <div className="numbers-info grid grid-cols-2">
          <div className="totalCountDisease text-center self-center">
            <span className="text-5xl font-bold text-secondary">+10 Milhões</span>
            <p className="text-secondary">de brasileiros possuem deficiência auditiva.</p>
          </div>
          <div className="totalCountSeveralDisease text-center self-center">
            <span className="text-5xl font-bold text-secondary">+2 Milhões</span>
            <p className="text-secondary">de brasileiros possuem deficiência auditiva severa.</p>
          </div>
        </div>
        <div className="graph grid grid-rows-2 bg-vblue-500">
          <div className="graph-count self-center justify-self-center">
            <img src={graph} alt="" />
          </div>
          <div className="graph-subtitle text-center self-top">
            <p className="text-secondary">a cada 10 deficientes auditivos, 3 não possuem nenhuma escolaridade.</p>
          </div>
        </div>
      </div>

      <div className="m-full h-screen incluision-power grid grid-cols-1 grid-rows-3 px-10">
        <div className="general-data grid grid-rows-2 rounded-lg">
          <div className="data grid grid-cols-2 gap-12 self-center justify-self-center relative">
            <div className="general-data-info bg-purple-300 text-center content-center w-80 h-52 leading-7">
              <span className="text-primary font-bold text-3xl">+500 Milhões</span>
              <p className="text-secondary">de pessoas surdas no mundo.</p>
            </div>
            <div className="general-data-info bg-purple-200 text-center content-center w-80 h-52 leading-7">
              <p className="text-secondary">Em 2050 serão</p>
              <span className="text-primary font-bold text-3xl">+1 Bilhão</span>
              <p className="text-secondary">de pessoas surdas no mundo.</p>
            </div>
          </div>
        </div>
        <div className="title content-center">
          <h1 className="text-center text-primary font-bold text-6xl">O poder da inclusão.</h1>
        </div>
        <div className="language-data grid grid-cols-2 px-20 pt-10">
          <img src={booksImage} alt="" />
          <div className="language-data-about text-right content-center">
            <h1 className="text-5xl font-bold text-primary">2º Língua mais pesquisada</h1>
            <p className="pt-8 text-secondary">Entre os meses de janeiro e setembro de 2022, a LIBRAS (Língua Brasileira de Sinais) 
              foi a 2º língua mais pesquisada no Google Trends.</p>
          </div>
        </div>
      </div>
     
      <div className="m-full h-screen solution grid grid-rows-2 px-10">
        <div className="economy grid grid-cols-2 px-20 pt-20 items-center">
          <div className="economy-data">
            <h1 className="text-5xl font-bold text-primary">Aspecto econômico</h1>
            <p className="pt-8 text-secondary">Indivíduos portadores de deficiência estão mais vulneráveis 
              à pobreza, à discriminação e à exclusão social. A exclusão dessas pessoas causam prejuízos 
              econômicos qu variam entre 3% e 7% do PIB.</p>
          </div>
          <img className="content-end justify-self-end" src={handCoin} alt="" />
        </div>
        <div className="solution-info text-center content-center pt-20">
          <h1 className="text-center text-primary font-bold text-6xl">A solução.</h1>
          <p className="text-secondary pt-10">O VisualVoice é uma solução digital e inovadora que permite a tradução realtime de um vídeo
            para LIBRAS.
          </p>
        </div>
      </div>

      <div className="m-full h-screen solution-part2 grid grid-rows-2 px-10">
        <div className="video content-center justify-self-center">
          <iframe width="560" 
            height="315" 
            src="https://www.youtube.com/embed/ZZdHB_8GYQ8?si=6PqSiFdMLLISErOo" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
          </iframe>
        </div>
        <div className="benefits grid grid-cols-3 gap-4 p-6">
          <div className="benefits-inclusion flex flex-col items-center justify-center text-center p-4">
            <img src={heartIcon} className="h-24 w-32 mb-4" alt="" />
            <span className="text-2xl font-bold text-secondary">Inclusão</span> 
            <p className="text-secondary">A adoção desse software aumenta a inclusão no Brasil.</p>
          </div>
          <div className="benefits-scholarship flex flex-col items-center justify-center text-center p-4">
            <img src={brainIcon} className="h-28 w-32 mb-4" alt="" />
            <span className="text-2xl font-bold text-secondary">Escolaridade</span>
            <p className="text-secondary">Com a inclusão, o estudo não será mais uma barreira.</p>
          </div>
          <div className="benefits-jobs flex flex-col items-center justify-center text-center p-4">
            <img src={notebookIcon} className="h-28 w-32 mb-4" alt="" />
            <span className="text-2xl font-bold text-secondary">Mercado de Trabalho</span>
            <p className="text-secondary">A escolaridade auxiliará no processo de adesão ao mercado de trabalho.</p>
          </div>
        </div>
      </div>

      <div className="m-full h-screen market grid grid-rows-2 px-10 pb-32">
        <div className="title content-center">
          <h1 className="text-center text-primary font-bold text-6xl pb-20">O mercado.</h1>
        </div>
        <div className="cards-info grid grid-cols-2 content-center justify-self-center gap-32">
          <div className="card w-[506px] h-[302px] p-10 content-center rounded-xl">
            <span className="text-4xl text-white font-bold">EAD</span>
            <p className="text-xl text-white py-6">O Ensino à Distância, no Brasil, teve um crescimento de</p>
            <h2 className="text-6xl text-white font-bold">470%</h2>
          </div>
          <div className="card w-[506px] h-[302px] p-10 content-center rounded-xl">
            <span className="text-4xl text-white font-bold">e-Learning</span>
            <p className="text-xl text-white py-6">O valor de mercado do e-Learning em 2020 foi de</p>
            <h2 className="text-6xl text-white font-bold">U$192,2 bi</h2>
          </div>
        </div>
      </div>

      <div className="m-full h-screen bg-purple-500 prizes grid grid-rows-3">
        <div className="title-prizes bg-purple-400">
          <h1>Prêmios.</h1>
        </div>
        <div className="prizes grid grid-cols-2 bg-purple-300">
          <div className="3m-prize bg-purple-200">

          </div>
          <div className="3m-prize bg-purple-100">

          </div>
        </div>
        <div className="title-recognize bg-purple-600">
        <h1>Reconhecimento.</h1>
        </div>
      </div>

      <div className="m-full h-screen bg-green-500 news grid grid-rows-2">
        <div className="news-sp grid grid-cols-2 bg-green-400">
          <div className="news-info bg-green-300">

          </div>
          <div className="photo bg-green-200"></div>
        </div>
        <div className="news-cps grid grid-cols-2 bg-green-100">
          <div className="photo bg-green-600"></div>
          <div className="news-info bg-green-700">

          </div>
        </div>
      </div>

      <div className="m-full h-screen bg-gray-500 footer"></div>
    </>
  );
}

export default Landing;