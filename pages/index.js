import { useState } from "react";
import BioButtons from "../components/buttons";
import Bio from "../public/data/bio.json";
import WrittenName from "../components/writtenName";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [bio, setBio] = useState();
  const showBio = (e) => {
    setBio(+e.target.id);
  };

  return (
    <Layout pageTitle={"Home"}>
      <main>
        <section className="center text-center">
          <h1 className="name-heading monteya-font m-0">
            <span className="orange">I am</span> Ahmad Chata
          </h1>

          <p className="branch-font short-bio mb-3 mb-lg-5">
            Full-Stack Developer
          </p>
          <div className="d-md-flex align-items-center">
            <p className="monteya-font m-0">About me</p>
            <p className="arrow mx-2 my-0"></p>
            <BioButtons
              buttons={["Short", "Long", "Long ago..."]}
              submit={showBio}
            />
          </div>
          <div className="mt-4 bio-view">
            {bio === 0 && (
              <p className="branch-font show mt-4">{Bio["short"]}</p>
            )}
            {bio === 1 && (
              <p className="branch-font show mt-4">{Bio["long"]}</p>
            )}
            {bio === 2 && (
              <p className="branch-font show mt-4">{Bio["verylong"]}</p>
            )}
          </div>
          <WrittenName />
          <div className="d-flex mt-5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twitter.com/ahmadchata/"
            >
              <FontAwesomeIcon
                className="twitter"
                icon={faTwitter}
                color="#000"
                size="2x"
              />
            </a>
            <a
              className="mx-4"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ahmadchata/"
            >
              <FontAwesomeIcon
                className="linkedin"
                icon={faLinkedin}
                color="#000"
                size="2x"
              />
            </a>
            <a
              className="github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/ahmadchata/"
            >
              <FontAwesomeIcon
                className="github"
                icon={faGithub}
                color="#000"
                size="2x"
              />
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
