// =============================================================================
// data.js — Edit this file to update your site content
// Never need to touch index.html for content changes
// =============================================================================

const SITE = {

  // --------------------------------------------------------------------------
  // Personal info
  // --------------------------------------------------------------------------
  name: "Nandini Banerjee",
  title: "PhD Candidate · Computer Science & Engineering",
  advisor: { name: "Prof. Diego Gomez-Zara", url: "https://ringzlab.com/" },
  phdYear: 2022,
  email: "nbanerje@nd.edu",
  scholar: "https://scholar.google.com/citations?user=qPRoaFsAAAAJ&hl=en",
  github: "https://github.com/nanbantan",
  cv: "assets/cv.pdf",
  university: "University of Notre Dame",
  department: "Computer Science & Engineering",
  office: "[Building] [Room], [University]",

  // --------------------------------------------------------------------------
  // Home page bio
  // --------------------------------------------------------------------------
  bio: `I study <strong>adoption, diffusion, and impact in scientific communities</strong> — using citation networks, co-authorship graphs, and text embeddings to understand how ideas spread, who drives scientific change, and how generative AI is reshaping social science research.`,

  // --------------------------------------------------------------------------
  // About page
  // --------------------------------------------------------------------------
  about: {
    background: `PhD candidate in Computer Science & Engineering at University of Notre Dame. Advised by <a href="https://ringzlab.com/">Prof. Diego Gomez-Zara</a>.`,
    interests: `Science of science, network science, computational social science, bibliometrics, generative AI.`,
    note: `Feel free to reach out about research, collaboration, or anything else.`,
  },

  // --------------------------------------------------------------------------
  // Research projects
  // --------------------------------------------------------------------------
  research: [
    {
      title: "Disruption prediction",
      desc: "Forecasting CD index disruption scores from citation network structure and text embeddings before a paper accumulates citations.",
      status: "in-progress",
      link: null,
      // linkLabel: "preprint ↗",
    },
    {
      title: "Subfield adoption & diffusion",
      desc: "Modeling how new research subfields spread through co-authorship networks using epidemic-style diffusion models.",
      status: "in-progress",
      link: null,
      linkLabel: null,
    },
    {
      title: "Disruption & researcher demographics",
      desc: "Examining how gender, career stage, and institutional prestige relate to a researcher's likelihood of producing disruptive work.",
      status: "in-progress",
      link: null,
      linkLabel: null,
    },
    {
      title: "Gen AI & social science",
      desc: "Characterizing how LLMs are influencing research practices, citations, and output in the social sciences.",
      status: "done",
      link: "#",
      linkLabel: "preprint ↗",
    },
  ],

  // --------------------------------------------------------------------------
  // Publications
  // Use **Your Name** to bold your name in the authors string
  // --------------------------------------------------------------------------
  publications: [
    {
      year: 2025,
      title: "Predicting disruption in citation networks using structural and semantic features",
      authors: "**[Last Name], B.**, [Co-author A.], [Co-author B.]",
      venue: "Example Conference on Computational Science",
      url: null,
      type: "conference",
    },
    {
      year: 2025,
      title: "Subfield emergence and diffusion in co-authorship networks",
      authors: "**[Last Name], B.**, [Co-author A.]",
      venue: "NetSci 2025",
      url: null,
      type: "abstract",
    },
  ],

  // --------------------------------------------------------------------------
  // Teaching
  // --------------------------------------------------------------------------
  teaching: [
    {
      year: 2024,
      course: "Data Science",
      role: "Teaching Assistant",
      details: "Weekly labs, office hours, assignment design",
      semester: "Fall 2024",
    },
    {
      year: 2024,
      course: "Operating System Principles",
      role: "Teaching Assistant",
      details: "Office hours, grading, exam design",
      semester: "Spring 2024",
    },
    {
      year: 2023,
      course: "Principles of Computing",
      role: "Teaching Assistant",
      details: "Python instruction for non-engineering students",
      semester: "Fall 2023",
    },
  ],

  // --------------------------------------------------------------------------
  // Presentations / Talks
  // --------------------------------------------------------------------------
  presentations: [
    {
      year: 2026,
      title: "Predicting Scientific Subfield Adoption in Collaboration Networks: The Role of Exposure Timing and Collaborator Composition",
      venue: "NetSci 2026",
      location: "Maastricht, Netherlands",
      date: "May 2026",
      url: null,
    },
  ],

  // --------------------------------------------------------------------------
  // Gallery
  // Upload images to assets/gallery/
  // --------------------------------------------------------------------------
  gallery: [
    // { src: "assets/gallery/photo1.jpg", caption: "Caption here" },
    // { src: "assets/gallery/photo2.jpg", caption: "Caption here" },
  ],

  // --------------------------------------------------------------------------
  // Nav items — order controls display order
  // --------------------------------------------------------------------------
  nav: [
    { id: "research",      label: "research",      icon: "assets/icons/research.png" },
    { id: "teaching",      label: "teaching",      icon: "assets/icons/teaching.png" },
    { id: "publications",  label: "publications",  icon: "assets/icons/publications.png" },
    { id: "presentations", label: "presentations", icon: "assets/icons/presentations.png" },
    { id: "cv",            label: "cv",            icon: "assets/icons/cv.png" },
    { id: "about",         label: "about",         icon: "assets/icons/about.png" },
    { id: "gallery",       label: "art",           icon: "assets/icons/art.png" },
  ],

};
