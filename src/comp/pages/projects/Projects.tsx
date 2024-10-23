import "./projects.css";

import { AiOutlineGlobal } from "react-icons/ai";

import freelance1 from "./Imgs/first-work-freelance.png";

import questionspro from "./Imgs/questions.png";
import crypto_project from "./Imgs/crypto_project.png";

import Travel_advisor_project from "./Imgs/Travel_advisor_project.png";
import wordgame from "./Imgs/wordgame.png";
import veg_cart from "./Imgs/veg-cart.png";
import weatherapp from "./Imgs/weatherapp.png";
import linkedin from "./Imgs/linkedin.png";
import temp1 from "./Imgs/temp1.png";
import advice_generator from "./Imgs/advice-generator.png";
import discord from "./Imgs/discord.png";
import calc from "./Imgs/calc.png";
import mem_game from "./Imgs/mem-game.png";
import shoppingcart from "./Imgs/shoppingcart.png";
import productlandingpage from "./Imgs/product-landingpage.png";
import amazoneclone from "./Imgs/amazontemp.png";
import outlet from "./Imgs/outlet.png";
import sharek from "./Imgs/sharek.png";
import eskan from "./Imgs/eskan.png";
import aboTaleb from "./Imgs/abo-taleb.png";
import fruit from "./Imgs/fruit.png";
import levelup from "./Imgs/levelup.png";

const Projects = () => {
  return (
    <section className="relative projects-section bg-slate-700">
      <h1
        className="my-4 mb-8 font-bold text-center text-slate-50 lg:text-2xl text-xl"
        style={{ borderBottom: "1px solid white" }}
      >
        Next Js Projects
      </h1>

      <div className="flex items-center justify-center gap-5">
        <div className="single-personal-projects overflow-hidden flex flex-col">
          <div
            className="overflow-hidden"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              width={"100%"}
              height={"100%"}
              src={fruit}
              alt="project image"
            />
          </div>
          <div className="text-center info-hiding">
            <h1>Fruits</h1>
            <h2>
              HTML + CSS + JAVASCRIPT + REACT.JS + TYPESCRIPT + TAILWIND_CSS + NODE_JS + MONGOOS + MONGO_DB
            </h2>
            <br />
            <a
              target="_blank"
              href="https://food-menu-bice.vercel.app/"
            >
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>
        <div className="single-personal-projects overflow-hidden flex flex-col">
          <div
            className="overflow-hidden"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              width={"100%"}
              height={"100%"}
              src={`https://png.pngtree.com/thumb_back/fh260/background/20220518/pngtree-quiz-game-show-quiz-uncertainty-photo-image_2221079.jpg`}
              alt="project image"
            />
          </div>
          <div className="text-center info-hiding">
            <h1>Quiz</h1>
            <h2>
              HTML + CSS + JAVASCRIPT + REACT.JS + TYPESCRIPT + TAILWIND_CSS
            </h2>
            <br />
            <a
              target="_blank"
              href="https://quiz-app-next-js-peach.vercel.app/"
            >
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>
      </div>

      <h1
        className="my-4 mb-8 font-bold text-center text-slate-50"
        style={{ fontSize: "39px", borderBottom: "1px solid white" }}
      >
        Projects
      </h1>

      <div
        className="flex flex-wrap justify-center mx-auto personal-projects-container gap-9"
        style={{ width: "90%" }}
      >
        <div className="single-personal-projects">
          <div
            className="overflow-hidden project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img style={{ width: "100%", height: "100%" }} src={levelup} alt="levelup image" />
          </div>

          <div className="text-center info-hiding">
            <h1>LevelUp ESG</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + TAILWIND_CSS</h2>
            <br />
            <a target="_blank" href="https://levelupesg.co/">
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>
        <div className="single-personal-projects">
          <div
            className="overflow-hidden project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img style={{ width: "100%", height: "100%" }} src={eskan} alt="" />
          </div>

          <div className="text-center info-hiding">
            <h1>Eskan El Mansoura</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + TAILWIND_CSS</h2>
            <br />
            <a target="_blank" href="https://mansoura-eco-build.com/">
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="overflow-hidden project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={outlet}
              alt=""
            />
          </div>

          <div className="text-center info-hiding">
            <h1>Mansoura Outlet</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + TAILWIND_CSS</h2>
            <br />
            <a target="_blank" href="https://abc-mansoura.com/">
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="overflow-hidden project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={sharek}
              alt=""
            />
          </div>

          <div className="text-center info-hiding">
            <h1>Sharek</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + TAILWIND_CSS</h2>
            <br />
            <a target="_blank" href="https://sharek-eg.com/">
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>
      </div>

      <h2
        className="my-12 font-bold text-center text-black bg-slate-300"
        style={{ fontSize: "28px" }}
      >
        FreeLance Projects
      </h2>
      <div className="relative flex justify-around flex-wrap gap-5 freelance-projects-container">
        <div className="text-center freeelance-single-project">
          <div
            className="overflow-hidden project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={aboTaleb}
              alt="Project image"
            />
          </div>
          <div className="info-hiding">
            <h1>Abo Taleb</h1>
            <h2>
              HTML + CSS + JAVASCRIPT + REACT.JS + TAILWIND_CSS
            </h2>
            <br />
            <a target="_blank" href="https://sirtz.com/">
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>
        <div className="text-center freeelance-single-project">
          <img src={freelance1} alt="" />
          <div className="info-hiding">
            <h1>Dgym Project</h1>
            <h2>HTML + CSS + BOOTSTRAP + JAVASCRIPT</h2>
            <div className="flex flex-wrap justify-between mt-4 dgymlinks">
              <a
                target="_blank"
                href="https://digitalgym.in/v1/app/pages/dashboards/default.html"
              >
                Link1
              </a>
              <a
                href="https://digitalgym.in/v1/app/pages/authentication/signin/cover.html"
                target="_blank"
              >
                Link2
              </a>
              <a
                href="https://digitalgym.in/v1/app/pages/authentication/signup/cover.html"
                target="_blank"
              >
                Link3
              </a>
              <a
                href="https://digitalgym.in/v1/app/pages/ecommerce/referral.html"
                target="_blank"
              >
                Link4
              </a>
              <a
                href="https://digitalgym.in/v1/app/pages/applications/wizard.html"
                target="_blank"
              >
                Link5
              </a>
              <a
                href="https://digitalgym.in/v1/app/pages/applications/analytics.html"
                target="_blank"
              >
                Link6
              </a>
              <a
                href="https://digitalgym.in/v1/app/pages/ecommerce/overview.html"
                target="_blank"
              >
                Link7
              </a>
              <a
                href="https://digitalgym.in/v1/app/pages/ecommerce/attendee.html"
                target="_blank"
              >
                Link8
              </a>
              <a
                href="https://digitalgym.in/v1/app/pages/ecommerce/employeelist.html"
                target="_blank"
              >
                Link9
              </a>
              <a
                href="https://digitalgym.in/v1/app/pages/ecommerce/memberlist.html"
                target="_blank"
              >
                Link10
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1
        className="font-bold text-center my-11 text-slate-50"
        style={{ fontSize: "35px", borderBottom: "1px solid white" }}
      >
        Personal Projects
      </h1>

      <div
        className="flex flex-wrap justify-center mx-auto personal-projects-container gap-9"
        style={{ width: "90%" }}
      >
        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={questionspro}
              alt=""
            />
          </div>
          <div className="text-center info-hiding">
            <h1>Questions Game</h1>
            <h2>
              HTML + CSS + JAVASCRIPT + REACT + MATERIAL-UI + FIREBASE + REDUX
            </h2>
            <br />
            <a target="_blank" href="https://questions-game-cd095.web.app/">
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={crypto_project}
              alt=""
            />
          </div>
          <div className="text-center info-hiding">
            <h1>Crypto App</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT + Anti Design</h2>
            <br />
            <a
              target="_blank"
              href="https://yousefjoe1.github.io/crypto-project/"
            >
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={amazoneclone}
              alt=""
            />
          </div>

          <div className="text-center info-hiding">
            <h1>Amazon Clone</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS</h2>
            <br />
            <a href="https://yousefjoe1.github.io/amazone1/" target="_blank">
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={mem_game}
              alt=""
            />
          </div>

          <div className="text-center info-hiding">
            <h1>Memeory Game</h1>
            <h2>
              HTML + CSS + JAVASCRIPT + REACT.JS + REACT-TYPESCRIPT +
              TAILWIND_CSS
            </h2>
            <br />
            <a target="_blank" href="https://yousefjoe1.github.io/Memory-Game/">
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={productlandingpage}
              alt=""
            />
          </div>
          <div className="text-center info-hiding">
            <h1>Product Landing page</h1>
            <h2>
              HTML + CSS + JAVASCRIPT + REACT.JS + REACT-TYPESCRIPT +
              TAILWIND_CSS
            </h2>
            <br />
            <a
              target="_blank"
              href="https://yousefjoe1.github.io/Simple-Product-Landing-Page/"
            >
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img style={{ width: "100%", height: "100%" }} src={calc} alt="" />
          </div>
          <div className="text-center info-hiding">
            <h1>Calculaotr</h1>
            <h2>
              HTML + CSS + JAVASCRIPT + REACT.JS + TYPESCRIPT + TAILWIND CSS
            </h2>
            <br />
            <a
              href="https://yousefjoe1.github.io/Simple-Calculator/"
              target="_blank"
            >
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={linkedin}
              alt=""
            />
          </div>
          <div className="text-center info-hiding">
            <h1>LinkedIn Clone</h1>
            <h2>
              HTML + CSS + JAVASCRIPT + REACT.JS + REACT_BOOTSTRAP + BOOTSTRAP
            </h2>
            <br />
            <a
              target="_blank"
              href="https://yousefjoe1.github.io/linkedIn-clone-2022/"
            >
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={discord}
              alt=""
            />
          </div>
          <div className="text-center info-hiding">
            <h1>Discord Clone</h1>
            <h2>
              HTML + CSS + JAVASCRIPT + REACT.JS + REACT_BOOTSTRAP + BOOTSTRAP
            </h2>
            <br />
            <a
              target="_blank"
              href="https://yousefjoe1.github.io/discord-clone/#/"
            >
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={shoppingcart}
              alt=""
            />
          </div>
          <div className="text-center info-hiding">
            <h1>Food Shopping Cart</h1>
            <h2>HTML + CSS + JAVASCRIPT + BOOTSTRAP + REACT.JS</h2>
            <br />
            <a
              target="_blank"
              href="https://yousefjoe1.github.io/my-shopping-cart/#/shopping-cart"
            >
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>{" "}
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={Travel_advisor_project}
              alt=""
            />
          </div>
          <div className="text-center info-hiding">
            <h1>Travel Advisor</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT + GOOGLE MAPS + MATERIAL-UI</h2>
            <br />
            <a
              target="_blank"
              href="https://yousefjoe1.github.io/simple-react-travel-advisor-app/"
            >
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={wordgame}
              alt=""
            />
          </div>
          <div className="text-center info-hiding">
            <h1>Words Game</h1>
            <h2>
              HTML + CSS + JAVASCRIPT + REACT.JS + TYPESCRIPT + TAILWIND CSS
            </h2>
            <br />
            <a href="https://yousefjoe1.github.io/Words-Game/" target="_blank">
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={veg_cart}
              alt=""
            />
          </div>
          <div className="text-center info-hiding">
            <h1>Vegetables Shopping Cart</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + REDUX/TOOLKIT</h2>
            <br />
            <a
              target="_blank"
              href="https://yousefjoe1.github.io/vegetables-shopping-cart/"
            >
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>{" "}
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={weatherapp}
              alt=""
            />
          </div>
          <div className="text-center info-hiding">
            <h1>Weather App</h1>
            <h2>HTML + CSS + JAVASCRIPT</h2>
            <br />
            <a
              target="_blank"
              href="https://yousefjoe1.github.io/simple-weather-app-js/"
            >
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img style={{ width: "100%", height: "100%" }} src={temp1} alt="" />
          </div>
          <div className="text-center info-hiding">
            <h1>Landing page</h1>
            <h2>HTML + CSS + JAVASCRIPT + BOOTSTRAP + REACT.JS</h2>
            <br />
            <a href="https://yousefjoe1.github.io/temp-2n/#/" target="_blank">
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>{" "}
          </div>
        </div>

        <div className="single-personal-projects">
          <div
            className="project-img-container"
            style={{ width: "100%", height: "60%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={advice_generator}
              alt=""
            />
          </div>
          <div className="text-center info-hiding">
            <h1>Advice Generator</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS</h2>
            <br />
            <a
              target="_blank"
              href="https://yousefjoe1.github.io/advice-generator-app/"
            >
              Link
              <span className="flex justify-center">
                <AiOutlineGlobal style={{ fontSize: "20px" }} />
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
