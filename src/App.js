import React from "react";
import "./App.css";
import Header from "./components/Header";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import About from "./components/About";
import Projects from "./components/Projects";
import MoreProjects from "./components/MoreProjects";
import Skills from "./components/Skills";

function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const ZoomInScroll = batch(Move(), Sticky());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
    <Header/>
    <div class="container" >
    <About />
    <hr class="my-5" />
    <Projects />
    <hr class="my-5" />
    <MoreProjects/>
    <hr class="my-5" />
    <Skills />
      {/* <ScrollContainer>
        <ScrollPage page={0} >
          <Header />
        </ScrollPage>
        <ScrollPage page={1}></ScrollPage>
        <ScrollPage page={2} style={{ marginTop: "300px", padding: "400px",heigth: "100%" }}>
          <section id="about">
            <Animator animation={ZoomInScrollOut}>
              <About />
            </Animator>
          </section>
        </ScrollPage>
        <ScrollPage page={3}></ScrollPage>
        <ScrollPage page={4} style={{ marginTop: "400px", padding: "400px" }}>
          <section id="portfolio">
            <Animator animation={FadeUp}>
              <Projects />
            </Animator>
          </section>
        </ScrollPage>
        <ScrollPage page={5}></ScrollPage>
        <ScrollPage page={6} style={{ marginTop: "400px", padding:"400px" }}>
          <section >
            <Animator animation={FadeUp}>
              <MoreProjects/>
            </Animator>
          </section>
        </ScrollPage>
        <ScrollPage page={7}></ScrollPage>        
        <ScrollPage page={8}>
          <section id="skills" >
            <Animator animation={FadeUp} >
              <Skills/>
            </Animator>
          </section>
        </ScrollPage>  
        
        <ScrollPage page={9}></ScrollPage>        
        <ScrollPage page={10}>
          <Animator
            animation={FadeUp}
            style={{ marginTop: "400px", padding: "400px" }}
          >
            <span style={{ fontSize: "40px" }}>Done</span>
            <br />
            <span style={{ fontSize: "30px" }}>
              There's FadeAnimation, MoveAnimation, StickyAnimation,
              ZoomAnimation
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer> */}
      </div>
    </>
  );
}

export default App;
