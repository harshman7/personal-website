import type { WorkExperience } from "./types";

export const workExperience: WorkExperience[] = [
  {
    company: "Soft Matter & Interfaces Research Group — University of Alberta",
    position: "Research Assistant",
    location: "Edmonton, AB",
    startDate: "May 2025",
    endDate: "Sept 2025",
    isCurrent: false,
    description:
      "Applied machine learning to chemical-engineering and industrial pipeline problems, from exploratory analysis through validated surrogate models and technical reporting.",
    achievements: [
      "Collaborated with post-doctoral researchers to design ML surrogate models that reduced computational time for complex CFD simulations.",
      "Led work with proprietary Imperial Oil operational data to develop predictive ANN models for slurry waste pipeline pressure drop under varying flow and material conditions.",
      "Built end-to-end data pipelines: cleaning, feature engineering from sensor and experimental data, model training/validation, and hyperparameter tuning for stable predictions.",
      "Presented results in technical reports and visualizations, informing research decisions and discussions on industrial deployment of ML surrogates.",
      "Performed exploratory data analysis on high-dimensional sensor data to support feature selection for downstream models.",
      "Evaluated generalization on unseen conditions using cross-validation and held-out test sets to support industrial decision-making.",
    ],
    order: 2,
  },
  {
    company: "Disney Streaming",
    position: "Data Engineer",
    location: "New York, NY",
    startDate: "Sept 2024",
    endDate: "May 2025",
    isCurrent: false,
    description:
      "Owned cross-system data migration delivery with engineering, product, and analytics partners—focusing on integrity, performance, and safe cutover.",
    achievements: [
      "Led planning, execution, and validation of cross-system data migrations with product, infrastructure, and analytics teams to minimize downtime and defects.",
      "Built automated ETL validation suites (schema checks, row-level reconciliations, data-quality alerts) for consistency across legacy and target platforms.",
      "Optimized batch and streaming pipelines after migration (partitioning, indexing, concurrency), improving end-to-end performance by ~30% and stabilizing SLAs.",
      "Authored migration runbooks, technical documentation, and architecture diagrams to accelerate onboarding and de-risk later migration waves.",
      "Partnered with upstream producers and downstream consumers to define and validate schema contracts, reducing breaking changes at migration cutover.",
    ],
    order: 1,
  },
];
