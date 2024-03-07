import { FaSquareGithub } from "react-icons/fa6";
import Reviews from "./Review";

function AppJs() {
  return (
    <>
      <main>
        <section className="container">
          <div className="title">
            <h2>Our Revies</h2>
            <div className="underline"></div>
          </div>
          <Reviews></Reviews>
        </section>
      </main>
    </>
  );
}

export default AppJs;
