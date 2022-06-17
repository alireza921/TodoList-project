import Navigation from "../components/navigation/Navigation";
import Header from "../components/header/header";

const LayOut = ({children}) => {
  return (
    <section>
      <Header />
      <Navigation />
      {children}
    </section>
  );
};

export default LayOut;
