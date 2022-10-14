import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <Header />

      <main role="main" className="inner cover">
        <h1 className="cover-heading">Voting Dapp</h1>
        <p className="lead">
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
        <p className="lead">
          <a
            href="/voting"
            className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
          >
            Go to voting page
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default App;
