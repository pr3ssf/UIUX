import "../styles/MainProjects.css";
import yourImage from "../assets/Main Page.png";

const MainProjects = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="parallax-container">
        <h1>Main Projects</h1>
        <p>Main developed environments and levels.</p>
      </div>

      <div className="buffer"></div>

      {/* Section 1 */}
      <div className="parallax-container parallax-container2">
        <div className="container-element">
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <img src={yourImage} alt="Project Description" className="element-image" />
          </div>
          <div className="element-text">
            <p className="element-text-title">Project Title</p>
            <p className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </p>
          </div>
        </div>

        <div className="container-element">
          <div className="element-text">
            <p className="element-text-title">Project Title</p>
            <p className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </p>
          </div>
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <img src={yourImage} alt="Project Description" className="element-image" />
          </div>
        </div>
      </div>

      <div className="buffer"></div>

      {/* Section 2 */}
      <div className="parallax-container parallax-container3">
        <div className="container-element">
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <img src={yourImage} alt="Project Description" className="element-image" />
          </div>
          <div className="element-text">
            <p className="element-text-title">Project Title</p>
            <p className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </p>
          </div>
        </div>

        <div className="container-element">
          <div className="element-text">
            <p className="element-text-title">Project Title</p>
            <p className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </p>
          </div>
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <img src={yourImage} alt="Project Description" className="element-image" />
          </div>
        </div>
      </div>

      <div className="buffer"></div>

      {/* Section 3 */}
      <div className="parallax-container parallax-container4">
        <div className="container-element">
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <img src={yourImage} alt="Project Description" className="element-image" />
          </div>
          <div className="element-text">
            <p className="element-text-title">Project Title</p>
            <p className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </p>
          </div>
        </div>

        <div className="container-element">
          <div className="element-text">
            <p className="element-text-title">Project Title</p>
            <p className="element-text-description">
              This is a description of the project. It explains the goals, features, and technology used in this project. 
              You can add more details here to give viewers a better understanding of what this project is about.
            </p>
          </div>
          <div style={{ flex: 2, maxWidth: "600px" }}>
            <img src={yourImage} alt="Project Description" className="element-image" />
          </div>
        </div>
      </div>

      <div className="buffer"></div>
    </div>
  );
};

export default MainProjects;
