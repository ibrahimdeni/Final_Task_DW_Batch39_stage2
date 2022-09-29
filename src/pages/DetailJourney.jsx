import Layout from "../components/NavigationBar";

export default function Detail() {
  return (
    <>
      <Layout />
      <div className="w-100 d-flex">
        <div className="w-50">
          <h1 className="fw-bold title_detail ms-5 ">
            Bersemayam di Tanah Dewata
          </h1>
        </div>
        <div className="w-50">
          <p className="author text-end fw-semibold fs-5 me-5">
            Ibrahim Ganteng
          </p>
        </div>
      </div>
      <p className="text-primary ms-5">17 October 2020</p>
    </>
  );
}
