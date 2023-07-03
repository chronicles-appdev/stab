import "./Blog.css";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Blog = () => {
  return (
    <div className="blog-main" id="blog">
      <h2>
        Blog <div className="markerr"></div>
      </h2>
      <p>
        Discover informative articles and inspiring
        <br /> success stories shared by SuccessTAB users.
      </p>
      <div className="blog-wrapper">
        <Splide>
          <SplideSlide>
            <div className="blog-container">
              <div className="blog-left">
                <img src="./Tablettt.png" alt="" />
              </div>
              <div className="blog-right">
                <Link to="https://punchng.com/the-digital-age-of-education-how-successtab-is-helping-nigerian-students-achieve-academic-success/">
                  The Digital Age of Education: How SuccessTAB is <br />
                  Helping Nigerian Students Achieve Academic Success
                </Link>
                <p>
                  Adebayo’s story is one of success and resilience. As a young
                  Nigerian student, he faced many challenges in his academic
                  journey. Despite these challenges, Adebayo remained determined
                  to succeed and was willing to do whatever it takes to achieve
                  his goals.
                </p>
                <span>11th of May, 2023</span>
                <Link to="https://punchng.com/the-digital-age-of-education-how-successtab-is-helping-nigerian-students-achieve-academic-success/">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="blog-container">
              <div className="blog-left">
                <img src="./Blog_img2.png" alt="" />
              </div>
              <div className="blog-right">
                <Link to="https://lagosmums.com/successtab-for-secondary-school-students/">
                  How SuccessTAB Empowers Students for Outstanding
                  <br /> Performance in Examinations
                </Link>
                <p>
                  As a secondary school student, preparing for exams like the
                  International General Certificate of Secondary Education
                  (IGCSE), Scholastic Assessment Test (SAT), West African
                  Examinations Council (WAEC), and Joint Admissions and
                  Matriculations Board (JAMB) can be quite daunting.
                </p>
                <span>11th of May, 2023</span>
                <Link to="https://lagosmums.com/successtab-for-secondary-school-students/">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className="blog-container">
              <div className="blog-left">
                <img src="./Blog_img3.png" alt="" />
              </div>
              <div className="blog-right">
                <Link to="https://www.legit.ng/education/1533955-achieve-academic-excellence-successtab-ultimate-study-companion/">
                  Achieve Academic Excellence with SuccessTAB: The Ultimate
                  Study Companion
                </Link>
                <p>
                  For many decades, traditional textbook studying has been the
                  norm for children in secondary schools; students would read
                  from textbooks, take notes, and listen to lectures. While this
                  may have worked very well for some students, some others find
                  it extremely boring. But let’s face it, studying from
                  textbooks has several limitations....
                </p>
                <span>10th of May, 2023</span>
                <Link to="https://www.legit.ng/education/1533955-achieve-academic-excellence-successtab-ultimate-study-companion/">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Blog;
