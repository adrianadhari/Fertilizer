import { useState } from "react";
import dataPupuk from "./data-pupuk.json";
import PupukList from "./components/PupukList";
import PupukDetail from "./components/PupukDetail";
import backgroundImage from "./assets/images/background.jpg";
import { useRef } from "react";

const App = () => {
  const [selectedPupukId, setSelectedPupukId] = useState(null);
  const detailRef = useRef(null);

  const handlePupukClick = (pupukId) => {
    setSelectedPupukId(pupukId);
    setTimeout(() => {
      if (detailRef.current) {
        detailRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const selectedPupuk = dataPupuk.pupuk.find(
    (pupuk) => pupuk.id === selectedPupukId
  );

  return (
    <>
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <PupukList
              pupuks={dataPupuk.pupuk}
              onPupukClick={handlePupukClick}
            />
          </div>
        </div>
      </div>
      <div className="container my-5" ref={detailRef}>
        {selectedPupuk && <PupukDetail pupuk={selectedPupuk} />}
      </div>
    </>
  );
};

export default App;
