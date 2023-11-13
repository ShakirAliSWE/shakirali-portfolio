import React from "react";

import technicalSkills from "@/app/_mock/technical-skills.json";

export default function TechnicalSkills() {
  const title = "👨‍💻 Technical Skills";
  return (
    <section>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="fw-bolder heading-gradient mb-0 text-uppercase">
          👨‍💻 Skills
        </h4>
      </div>
      <div className="card shadow border-0 rounded mb-3">
        <div className="card-body p-3">
          <div className="d-flex flex-wrap gap-1">
            {technicalSkills.map((skill, i) => (
              <span className="badge text-bg-light" key={i}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
