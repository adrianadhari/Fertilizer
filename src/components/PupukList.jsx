/* eslint-disable react/prop-types */
import { useState } from "react";

const PupukList = ({ pupuks, onPupukClick }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPupuks = pupuks.filter((pupuk) =>
    pupuk.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="text-center">
        <h1 className="fw-bold text-white">Fertilizer</h1>
        <h5 className="text-white">
          Komponen Pupuk? Temukan Informasinya dalam Sekejap!
        </h5>
      </div>
      <input
        type="text"
        placeholder="Cari pupuk..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="form-control p-3 my-4"
      />
      <ul>
        {searchTerm &&
          filteredPupuks.map((pupuk) => (
            <li key={pupuk.id} className="mb-3">
              <button
                onClick={() => onPupukClick(pupuk.id)}
                className="btn btn-light fw-semibold"
              >
                {pupuk.nama}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PupukList;
