import './App.css';
import Header from './components/Header';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import About from './components/About';

function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), MoveOut(0, 400))}>
        <Header/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1} style={{marginTop:"200px"}}>
        <Animator animation={ZoomInScrollOut}>
          <About />
          {/* <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span> */}
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
        </Animator>
      </ScrollPage>
  
    <ScrollPage page={3}>
      <Animator animation={batch(Fade(), Sticky())}>
        <span style={{ fontSize: "40px" }}>Done</span>
        <br/>
        <span style={{ fontSize: "30px" }}>
          There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
        </span>
      </Animator>
    </ScrollPage>
</ScrollContainer>   
  );
}

export default App;
