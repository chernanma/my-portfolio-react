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
import $ from "jquery";
import Projects from "./components/Projects";

function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const ZoomInScroll = batch(Move(), Sticky());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0} style={{ heigth: "100%" }}>
          <Header />
        </ScrollPage>
        <ScrollPage page={1}></ScrollPage>
        <ScrollPage page={2} style={{ marginTop: "300px", padding: "400px" }}>
          <section id="about">
            <Animator animation={ZoomInScrollOut}>
              <About />
            </Animator>
          </section>
        </ScrollPage>
        <ScrollPage page={3}></ScrollPage>
        <ScrollPage page={4} style={{ marginTop: "400px", padding: "400px" }}>
          <Animator animation={FadeUp}>
            <Projects />
            {/* <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span> */}
          </Animator>
        </ScrollPage>
        <ScrollPage page={5}></ScrollPage>
        <ScrollPage page={6}>
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
      </ScrollContainer>
    </>
  );
}

export default App;
