import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Process />
            <Projects />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </>
    );
}