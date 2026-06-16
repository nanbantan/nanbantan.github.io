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
  linkedin: "https://www.linkedin.com/in/nandban/",
  cv: "assets/cv.pdf",
  university: "University of Notre Dame",
  department: "Computer Science & Engineering",
  // office: "[Building] [Room], [University]",
  greeting: "Hi! I am Nandini.",

  // --------------------------------------------------------------------------
  // Home page bio
  // --------------------------------------------------------------------------
  bio: `I study <strong>adoption, diffusion, and impact in scientific communities</strong> using citation networks, co-authorship graphs, and text embeddings to understand how ideas spread, who drives scientific change, and how generative AI is reshaping social science research.`,

  // --------------------------------------------------------------------------
  // About page
  // --------------------------------------------------------------------------
  about: {
    background: `PhD student in Computer Science & Engineering at University of Notre Dame. Advised by <a target="_blank" rel="noopener noreferrer" href="https://ringzlab.com/">Prof. Diego Gomez-Zara</a>.<br>Worked as a full-stack web developer for 2 years at TCS.`,
    interests: `Science of science, network science, computational social science, bibliometrics, generative AI usage.<br> Also, crosswords and sketching.`,
    note: `Feel free to reach out about research, collaboration, or anything else.`,
  },

  // --------------------------------------------------------------------------
  // Research projects
  // --------------------------------------------------------------------------
  research: [
    {
      title: "Disruption & researcher demographics",
      desc: "Examining how gender relates to a researcher's likelihood of producing disruptive work.",
      status: "in-progress",
      link: null,
      linkLabel: null,
    },   
    {
      title: "Subfield adoption & diffusion",
      desc: "Modeling how new research subfields spread through co-authorship networks.",
      status: "in-progress",
      link: null,
      linkLabel: null,
    },    
    {
      title: "Gen AI & social science",
      desc: "Characterizing how LLMs are influencing research practices and output in the social sciences.",
      status: "done",
      link: "#",
      // linkLabel: "preprint ↗",
      linkLabel: null,
    },
     {
      title: "Disruption prediction",
      desc: "Forecasting disruption scores from citation network structure and text embeddings before a paper accumulates citations.",
      status: "in-progress",
      link: null,
      // linkLabel: "preprint ↗",
      linkLabel: null,
    },
  ],

  // --------------------------------------------------------------------------
  // Publications
  // Use **Your Name** to bold your name in the authors string
  // --------------------------------------------------------------------------
  publications: [
    {
      year: 2025,
      title: "Simulating Teams with LLM Agents: Interactive 2D Environments for Studying Human-AI Dynamics",
      authors: "Almutairi, M., Chiang, C., Guo, H., Belcher, M., **Banerjee, N.**, Milkowski, M., Volkova, S., Nguyen, D., Weninger, T., Yankoski, M., Ford, T. W., & Gomez-Zara, D.",
      venue: "arXiv preprint",
      url: "https://doi.org/10.48550/arXiv.2510.08242",
      type: "preprint",
    },
    {
      year: 2025,
      title: "VIRT-LAB: An AI-Powered System for Flexible, Customizable, and Large-scale Team Simulations",
      authors: "Almutairi, M., Chiang, C., Guo, H., Belcher, M., **Banerjee, N.**, Milkowski, M., Volkova, S., Nguyen, D., Weninger, T., Yankoski, M. G., Ford, T. W., & Gómez-Zará, D.",
      venue: "Adjunct Proceedings of the 38th Annual ACM Symposium on User Interface Software and Technology",
      url: "https://doi.org/10.1145/3746058.3758994",
      type: "conference",
    },
    {
      year: 2025,
      title: "VirTLab: Augmented Intelligence for Modeling and Evaluating Human-AI Teaming Through Agent Interactions",
      authors: "Volkova, S., Nguyen, D., Penafiel, L., Kao, H.-T., Cohen, M., Engberson, G., Cassani, L., Almutairi, M., Chiang, C., **Banerjee, N.**, Belcher, M., Ford, T. W., Yankoski, M. G., Weninger, T., Gomez-Zara, D., & Rebensky, S.",
      venue: "Adaptive Instructional Systems. HCII 2025. Lecture Notes in Computer Science, vol 15813. Springer, Cham.",
      url: "https://doi.org/10.1007/978-3-031-92970-0_20",
      type: "conference",
    },
    {
      year: 2025,
      title: "Enabling User-Created Multi-Agent Simulations: Interactive and Customizable 2D Environments to Study Team Dynamics with LLM Agents",
      authors: "Almutairi, M., Chiang, C., Guo, H., **Banerjee, N.**, Milkowski, M., Nguyen, D., Yankoski, M. G., Weninger, T., Volkova, S., & Ford, T. W.",
      venue: "Workshop on Scaling Environments for Agents",
      url: null,
      type: "conference",
    },
    {
      year: 2021,
      title: "A trojan framework in AES core to evade state-of-the-art HT detection schemes",
      authors: "Das, N., Sen, R., Ray, D., **Banerjee, N.**, Halder, J., Tenhunen, H., & Sikdar, B. K.",
      venue: "Microelectronics Journal",
      url: "https://doi.org/10.1016/j.mejo.2021.105023",
      type: "journal",
    },
    // {
    //   year: 2025,
    //   title: "Subfield emergence and diffusion in co-authorship networks",
    //   authors: "**[Last Name], B.**, [Co-author A.]",
    //   venue: "NetSci 2025",
    //   url: null,
    //   type: "abstract",
    // },
  ],

  // --------------------------------------------------------------------------
  // Teaching
  // --------------------------------------------------------------------------
  teaching: [
    {
      year: 2026,
      course: "Data Science",
      role: "Teaching Assistant",
      details: "Weekly labs, office hours, assignment design",
      semester: "Spring",
    },
    {
      year: 2023,
      course: "Operating System Principles",
      role: "Teaching Assistant",
      details: "Office hours, grading",
      semester: "Spring",
    },
    {
      year: 2022,
      course: "Principles of Computing",
      role: "Teaching Assistant",
      details: "Office hours, grading",
      semester: "Fall",
    },
  ],

  // --------------------------------------------------------------------------
  // Presentations / Talks
  // --------------------------------------------------------------------------
  presentations: [
    {
      year: 2026,
      title: "Can We Identify Breakthroughs Before They Happen? Predicting Disruptive Science from Manuscript Text and Citation Network Features",
      venue: "NetSci 2026",
      location: "Boston, MA",
      date: "June 2026",
      url: null,
    },
    {
      year: 2026,
      title: "Predicting Scientific Subfield Adoption in Collaboration Networks: The Role of Exposure Timing and Collaborator Composition",
      venue: "NetSci 2026",
      location: "Boston, MA",
      date: "June 2026",
      url: null,
    },
    {
      year: 2024,
      title: "All-Female Teams Produce More Disruptive Work: Evidence from Scientific Paper",
      venue: "IC2S2 2024",
      location: "Philadelphia, PA",
      date: "July 2024",
      url: null,
    },
    {
      year: 2024,
      title: "All-Female Teams Produce More Disruptive Work: Evidence from Scientific Paper",
      venue: "ICSSI 2024",
      location: "Washington, DC",
      date: "June 2024",
      url: null,
    },
  ],

  // --------------------------------------------------------------------------
  // Gallery
  // Upload images to assets/gallery/
  // --------------------------------------------------------------------------
  gallery: [
    { src: "assets/gallery/IMG_0011.JPG", caption: "" },
    { src: "assets/gallery/IMG_0078.JPG", caption: "" },
    { src: "assets/gallery/F9C1E753-2D67-4FE3-8229-5D9CF0A790AD.JPG", caption: "" },
    { src: "assets/gallery/IMG_0046.PNG", caption: "" },
    { src: "assets/gallery/IMG_0075.PNG", caption: "" },
    { src: "assets/gallery/IMG_0122.PNG", caption: "" },
    { src: "assets/gallery/IMG_0119.PNG", caption: "" },
    { src: "assets/gallery/IMG_0110.PNG", caption: "" },
    { src: "assets/gallery/IMG_0079.JPG", caption: "" },
    { src: "assets/gallery/IMG_0034.PNG", caption: "" },    
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
    { id: "about", label: "about", icon: "assets/icons/about.png", children: [
      { id: "gallery", label: "art", icon: "assets/icons/art.png" }
    ]},
  ],

};
