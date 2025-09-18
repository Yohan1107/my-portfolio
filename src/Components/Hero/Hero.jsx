import React from 'react'
import './Hero.css'

const Hero = () => {

  const handleDownloadCV = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/CV-Yohan.pdf", { cache: "no-store" });
      if (!res.ok) throw new Error("Network error");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Yohan-Olivier-CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      window.location.href = "/CV-Yohan.pdf";
      console.error(err);
    }
  };

  return (
    <section id="home" className="hero">
      <h1>Hello, my name is <span>Yohan</span></h1>
      <p>Passionate web developer — I create modern and elegant websites.</p>
      <a  href="/public/CV-Yohan.pdf" onClick={handleDownloadCV} >Download my CV</a>
    </section>
  )
}

export default Hero