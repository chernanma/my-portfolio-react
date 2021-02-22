import React, {useState, useEffect} from "react";
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
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const ZoomInScroll = batch(Move(), Sticky());
  const FadeUp = batch(Fade(), Move(), Sticky());

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("none");

  useEffect(() => {
   console.log(status);
  
  }, [status])

  function handleInputNameChange (event){
    setName(event.target.value);
    
  } 
  function handleInputEmailChange (event){
    setEmail(event.target.value);
  } 
  function handleInputSubjectChange (event){
    setSubject(event.target.value);
  } 
  function handleInputMessageChange (event){
    setMessage(event.target.value);
  } 

  function validateForm(){
    console.log(name);
    if (name === "") {
        setStatus("Name cannot be empty");
        return;
    }
    if (email === "") {
      setStatus("Email cannot be empty");
        return;
    } else {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
          setStatus("Email format invalid");
            return;
        }
    }
    if (subject === "") {
      setStatus("Subject cannot be empty");
        return;
    }
    if (message === "") {
      setStatus("Message cannot be empty");
        return ;
    }
    setStatus("Sending...");
  }

  return (
    <>
    <Header/>
    <div className="container" >
    <About />
    <hr className="my-5" />
    <Projects />
    <hr className="my-5" />
    <MoreProjects/>
    <hr className="my-5" />
    <Skills />
    <hr className="my-5" />
    <Contact handleInputNameChange={handleInputNameChange} handleInputEmailChange ={handleInputEmailChange } handleInputSubjectChange={handleInputSubjectChange}  handleInputMessageChange={handleInputMessageChange} validateForm={validateForm} status={status}/>
    
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
    <Footer />
    </>
  );
}

export default App;
