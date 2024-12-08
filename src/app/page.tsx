import { promises as fs } from "fs";

export default async function Home() {
  return (
    <div className="row mx-2">
      <div className="portfolio-header jumbotron jumbotron-fluid bg-light text-dark py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Sukhen Goswami</h1>
          <p className="lead fs-5 mb-3">Assistant Professor, Department of Geology and Mining</p>
          <p className="fs-6">Faculty of Science and Engineering, University of Barishal, Barishal 8254, Bangladesh.</p>
          <p className="contact-info fs-6">
            <strong>Cell:</strong> 8801913725897 | <strong>Email:</strong>{" "}
            <a href="mailto:sgoswami@bu.ac.bd" className="text-primary">
              sgoswami@bu.ac.bd
            </a>
          </p>
          <p className="mb-0">
            <strong>Web:</strong>{" "}
            <a href="https://bu.ac.bd/?ref=teacher_profile_data_geology" className="text-primary" target="_blank" rel="noopener noreferrer">
              University Profile
            </a>{" "}
            | <strong>ResearchGate:</strong>{" "}
            <a href="https://www.researchgate.net/profile/Sukhen-Goswami" className="text-primary" target="_blank" rel="noopener noreferrer">
              ResearchGate
            </a>{" "}
            | <strong>Google Scholar:</strong>{" "}
            <a href="https://scholar.google.com/citations?user=kqtHAPMAAAAJ&hl=en" className="text-primary" target="_blank" rel="noopener noreferrer">
              Scholar Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
