import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="benefits-wrapper">
      <div className="benefits-heading">
        <h2>
          Perks and Benefits <div className="marker benefits-marker"></div>
        </h2>

        <p>What you stand to gain when you choose to use SuccessTAB</p>
      </div>

      <div className="benefits-container">
        <div className="benefits-left">
          <img src="./Benefit_img.png" />
        </div>
        <div className="benefits-right">
          <ul>
            <li>21st Century Education refined</li>
            <li>Over 100 e-Textbooks</li>
            <li style={{ width: "352px" }}>35 Subject Based eLesson Notes</li>
            <li>Customized for the School</li>
            <li style={{ width: "357px" }}>EduGames Pre-installed</li>
            <li style={{ width: "357px" }}>15 years Question Bank for WAEC</li>
            <li style={{ width: "448px" }}>
              10 Years Question for NECO (Junior SCE) in 20 subjects combined
            </li>
            <button className="benefits-button">
              Explore <img src="/Send.png" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
