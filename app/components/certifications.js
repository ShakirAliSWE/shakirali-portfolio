import React from "react";

import certifications from "@/app/_mock/certifications.json";
import Link from "next/link";
import { IconLink } from "./icons";
import { dateFormat } from "../utils/utils";

export default function Certifications() {
  const title = "📃 Licenses & Certifications";
  return (
    <section>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h4 className="text-primary fw-bolder text-gradient mb-0">{title}</h4>
      </div>
      {certifications.map((certification, i) => (
        <div className="card shadow border-0 rounded mb-2" key={i}>
          <div className="card-body p-3">
            <div className="fs-5 text-gradient fw-bolder">
              {certification.name}
            </div>
            <div className="small fw-bolder">{certification.source}</div>
            <div className="small text-muted">
              Issued {dateFormat(certification.issued)}{" "}
              {certification.expired
                ? ` — Expired ${dateFormat(certification.issued)}`
                : null}
            </div>
            <div>
              <Link
                target="_blank"
                href={certification.link}
                className="badge text-bg-primary"
              >
                Show credentials <IconLink />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
