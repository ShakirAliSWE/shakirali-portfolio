import React from "react";

import Link from "next/link";
import { IconLink } from "./icons";
import { dateDiff, dateFormat } from "../utils/utils";

import experiences from "@/app/_mock/experiences.json";

export default function Experience() {
  const title = "💼 Experience";
  return (
    <section id="experience">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="fw-bolder heading-gradient mb-0 text-uppercase">
          {title}
        </h4>
      </div>
      {experiences.map((experience, i) => (
        <div className="card shadow border-0 rounded mb-2" key={i}>
          <div className="card-body p-3">
            <div className="fs-5 fw-bolder">{experience.position}</div>
            <div className="small fw-bolder">
              <Link target="_blank" href={experience.companyURL}>
                {experience.companyName} {experience.location}
                {"  "}
                <IconLink />
              </Link>
            </div>
            <div className="small text-muted">
              {dateFormat(experience.start)} {" — "}
              {experience.present ? (
                <span className="fst-italic">Present</span>
              ) : (
                dateFormat(experience.end)
              )}
              {" · "}
              {dateDiff(experience.start, experience.end)}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
