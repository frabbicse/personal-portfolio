import { promises as fs } from "fs";

export default async function Experience() {
  const { publications } = JSON.parse(await fs.readFile(process.cwd() + "/public/data/publications.json", "utf8"));
  return (
    <div className="row mx-2">
      <h4 className="mt-5">Publications</h4>
      <div className="row mb-4 mt-1">
        <div>
          <div className="row">
            {publications &&
              publications.map((pub: any, ind: any) => (
                <div className="" key={ind}>
                  <ul>
                    <li>{pub.item}</li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
