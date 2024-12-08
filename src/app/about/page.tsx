import { promises as fs } from "fs";

export default async function Education() {
  const { education, profession, administration, researchAssistant, internship } = JSON.parse(await fs.readFile(process.cwd() + "/public/data/about/about.json", "utf8"));

  return (
    <div className="row mx-2">
      <h4 className="mt-5">About</h4>
      <div className="row mb-4 mt-1">
        <div className="mt-2">
          <h5 color="red">Professional Experience</h5>
          <div className="row">
            {profession &&
              profession.map((prof: any, ind: any) => (
                <div className="" key={ind}>
                  <ul>
                    <strong>{prof.designation}</strong> , {prof.workplace}, {prof.duration}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-2">
          <h5>Administrative Experience</h5>
          <div className="row">
            {profession &&
              administration.map((prof: any, ind: any) => (
                <div className="" key={ind}>
                  <ul>
                    <strong>{prof.designation}</strong> , {prof.workplace}, {prof.duration}
                  </ul>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-2">
          <h5 color="red">Training Assistant</h5>
          <div className="row">
            {profession &&
              researchAssistant.map((ta: any, ind: any) => (
                <div className="" key={ind}>
                  <ul>
                    <strong>{ta.projectTitle}</strong> , {ta.workplace} from ({ta.duration})
                    <p>
                      <strong>Responsibilities:</strong>{" "}
                    </p>
                    {console.log(ta.repsonsibility)}
                    {ta.repsonsibility.map((resp: any, ind: any) => (
                      <ul key={ind}>
                        {ind + 1}. {resp.item}
                      </ul>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-2">
          <h5 color="red">Internship</h5>
          <div className="row">
            {profession &&
              internship.map((intern: any, ind: any) => (
                <div className="" key={ind}>
                  <ul>
                    <strong>{intern.designation}</strong> , {intern.workplace} from ({intern.duration})
                    <p>
                      <strong>Responsibilities:</strong>
                    </p>
                    {intern.repsonsibility.map((resp: any, ind: any) => (
                      <ul key={ind}>
                        {ind + 1}. {resp.item}
                      </ul>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-2">
          <h5>Education</h5>
          <div className="row">
            {education &&
              education.map((edu: any, ind: any) => (
                <div className="mb-0 mt-0" key={ind}>
                  <ul>
                    <strong>{edu.degree}</strong> , {edu.specialization}, {edu.institute} ({edu.passingyear})
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
