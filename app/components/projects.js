import React from "react";

import projects from "@/app/_mock/projects.json";
import { dateFormat } from "../utils/utils";
import Link from "next/link";
import { IconLink } from "./icons";

export default function Projects() {
  const title = "💻 Projects";
  return (
    <section id="projects" className="mt-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="text-primary fw-bolder text-gradient mb-0">{title}</h4>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-md-12">
          {projects.map((project, i) => (
            <div className="card shadow rounded border-0 mb-2" key={i}>
              <div className="card-body">
                <div className="fs-5 text-gradient fw-bolder">
                  {project.title}
                </div>
                <div className="small text-muted mb-2">
                  {dateFormat(project.start)}
                  {" · "}
                  {project.present ? (
                    <span className="fst-italic">Present</span>
                  ) : (
                    dateFormat(project.end)
                  )}
                </div>
                <ul className="list-group list-group-flush mb-4">
                  <ProjectDescription data={project.description} />
                </ul>
                <div className="d-flex flex-wrap mb-4 gap-1 small">
                  <ProjectSkills data={project.skills} />
                </div>
                <Link
                  target="_blank"
                  href={project.link}
                  className="badge text-bg-primary"
                >
                  View Project <IconLink />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectDescription = ({ data }) => {
  return data.map((d, i) => (
    <li className="small text-muted list-group-item" key={i}>
      {d}
    </li>
  ));
};

const ProjectSkills = ({ data }) => {
  return data.map((skill, i) => (
    <span className="badge text-bg-light" key={i}>
      {skill}
    </span>
  ));
};
