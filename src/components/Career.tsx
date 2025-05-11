import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Ajmani International School */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student</h4>
                <h5>Ajmani International School, Lakhimpur-Kheri</h5>
              </div>
              <h3>2019 – 2023</h3>
            </div>
            <p>
              Studied from Class 9 to 12. Took PCM (Physics, Chemistry, Maths)
              in Class 11 and 12. Built a strong foundation 
              in science and logical thinking.
            </p>
          </div>

          {/* Lovely Professional University */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE Undergraduate</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>2023 – Now</h3>
            </div>
            <p>
              Currently pursuing a Bachelor of Technology in Computer Science and Engineering. 
              Exploring programming, web development, data structures, and real-world projects.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
