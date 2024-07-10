/* eslint-disable react/prop-types */
const PupukDetail = ({ pupuk }) => {
  return (
    <div className="container">
      <h1 className="fw-semibold text-center mb-4">Hasil Pencarian</h1>
      <h2 className="text-lg font-semibold mb-2 text-center">
        Detail Pupuk {pupuk.nama}
      </h2>
      <div className="row my-5">
        {pupuk.komponen.map((komponen, index) => (
          <div key={index} className="col-lg-3 mb-3">
            <div className="card p-3 shadow border-0 rounded-4">
              <div className="card-body">
                <h4 className="card-title">{komponen.nama}</h4>
                <p className="card-text">{komponen.deskripsi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PupukDetail;
