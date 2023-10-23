import React from "react";
import Link from "next/link";
import { IconLink } from "./icons";
import educations from "@/app/_mock/educations.json";
import { dateFormat } from "../utils/utils";

export default function Educations() {
  const title = "🎓 Education";
  return (
    <section id="education" className="mt-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="text-primary fw-bolder text-gradient mb-0">{title}</h4>
      </div>
      {educations.map((education, i) => (
        <div className="card shadow border-0 rounded mb-2" key={i}>
          <div className="card-body p-3">
            <div className="fs-5 text-gradient fw-bolder">
              {education.degree}
            </div>
            <div className="small fw-bolder">
              <Link target="_blank" href={education.universityURL}>
                {education.university}
                {" · "}
                {education.location}
                {"  "}
                <IconLink />
              </Link>
            </div>
            <div className="small text-muted">
              {dateFormat(education.start, "Y")}
              {" — "}
              {education.present ? (
                <span className="fst-italic">Present</span>
              ) : (
                dateFormat(education.end, "Y")
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
