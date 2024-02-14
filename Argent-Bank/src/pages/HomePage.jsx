import Navbar from "../components/Navbar";
import "../index.css";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Data from "../assets/featureText.json";
import Features from "../components/Features";

const HomePage = () => {
  const datas = { Data };
  console.log(datas);
  return datas.Data ? (
    <>
      <Navbar />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {datas.Data?.map((data) => (
            <Features
              key={data.featureId}
              title={data.title}
              text={data.text}
              imageUrl={data.imageUrl}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  ) : (
    <Loader />
  );
};

export default HomePage;
