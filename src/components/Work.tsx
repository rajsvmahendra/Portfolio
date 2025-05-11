import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    id: "01",
    title: "Fraud Detection",
    category: "Machine Learning full web app",
    tools: "Flask, Python, Scikit-learn, Pandas, Numpy",
    image: "Fraud Detection.png",
  },
  {
    id: "02",
    title: "Dynamic Memory Visualizer",
    category: "Dynamic Memory Allocation",
    tools: "React, Vite, Tailwind CSS, GSAP",
    image: "DMV.png",
  },
  {
    id: "03",
    title: "Excel Dashboard on UAE Car Market",
    category: "Data Analysis and Visualization",
    tools: "Excel, Power Query, Power Pivot, DAX",
    image: "Excel Dashboard on UAE Car Market.png",
  },
];

const Work = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 500;

    if (!current) return;

    const newScrollLeft =
      direction === "left"
        ? current.scrollLeft - scrollAmount
        : current.scrollLeft + scrollAmount;

    current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const checkScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    };

    const ref = scrollRef.current;
    if (!ref) return;

    checkScroll(); // initial

    ref.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      ref.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="carousel-controls">
          <button
            onClick={() => scroll("left")}
            className="arrow-button"
            disabled={!canScrollLeft}
          >
            &#8592;
          </button>
          <div className="work-flex" ref={scrollRef}>
            {projects.map((project) => (
              <div className="work-box" key={project.id}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>{project.id}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools and Features</h4>
                  <p>{project.tools}</p>
                </div>
                <WorkImage image={project.image} alt={project.title} />
                <a
                  href="#"
                  className="project-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="arrow-button"
            disabled={!canScrollRight}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
