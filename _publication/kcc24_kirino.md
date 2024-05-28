---
layout: publication
title: "KIRINO: An Interactive Chatbot System for User Persona"
year: 2024
month: 4
authors:
  - Ganghun Kim†
  - Hyunjae Kim†
  - Geon Choi†
  - Kyuhwan Shim†
  - Myoung-Wan Koo*
venue: Korean Computer Congress 2024 & Sogang Convergence Technology Competition 
venue_full: "KCC"
abstract: "This research aims to develop a dialog system that reflects the persona of a speaker in a dialog system. For this purpose, we designed an abstract architecture based on the Retrieval-Augmented Generation (RAG) architecture, which generates the persona of each speaker based on the content of the conversation and presents a method to use it to personalize the conversation. We focused on developing a persona-based dialog system to address the problem of interactive agents giving inconsistent answers, talking out of context, and sometimes giving uninteresting answers in order to maintain natural conversations with humans. Experimental results show that our proposed method can improve the quality and naturalness of conversations, which suggests that it can contribute to improving the quality of conversational interfaces."
# award: XXX Award
slide: kirino_slide.pdf
poster: kirino_poster.pdf
link: kirino_page
category: 
  - "Dialogue System"
  - "Chatbot"
  - "User Persona"
bibtex: |-
  @article{kirino2024,
    title={KIRINO: An Interactive Chatbot System for User Persona},
    author={Kyuhwan Shim and Ganghun Kim and Hyunjae Kim and Geon Choi and Myoung-Wan Koo},
    journal={KCC},
    year={2024},
    month={April},
    note={KCC}
  }
featured: true
type: Vision-Language Model
---
<meta name="description" content="KIRINO : An Interactive Chatbot System for User Persona">
<meta name="keywords" content="Dialogue System, Chatbot, User Persona">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>KIRINO : An Interactive Chatbot System for User Persona</title>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PYVRSFMDRL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PYVRSFMDRL');
</script>

<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro" rel="stylesheet">
<link rel="stylesheet" href="./static/css/bulma.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
<link rel="stylesheet" href="./static/css/index.css">
<link rel="icon" href="favicon.ico">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"></script>
<script src="./static/js/index.js"></script>
</head>
<body>

<section class="hero">
  <div class="hero-body">
    <div class="container is-max-desktop">
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <h1 class="title is-1 publication-title">KIRINO: An Interactive Chatbot System for User Persona</h1>
          <div class="is-size-5 publication-authors">
            <span class="author-block">
              <a href="https://github.com/kanghun0819">Ganghun Kim</a><sup>1†</sup>,
            </span>
            <span class="author-block">
              <a href="https://typednow.com/">Hyunjae Kim</a><sup>2†</sup>,
            </span>
            <span class="author-block">
              <a href="https://github.com/MarsMan13">Geon Choi</a><sup>3†</sup>,
            </span>
            <span class="author-block">
              <a href="https://bi.snu.ac.kr/~khshim">Kyuhwan Shim</a><sup>4†</sup>,
            </span>
            <span class="author-block">
              <a href="https://isds.sogang.ac.kr/page/members">Myoung-Wan Koo</a><sup>5*</sup>
            </span>
          </div>
          <div class="is-size-5 publication-authors">
            <span class="author-block"><sup></sup>Sogang University, Computer Science and Engineering</span>
            <span class="author-block"><sup></sup>Korea</span>
          </div>
          <p><sup>†</sup>These authors contributed equally to this work.</p>
          <p><sup>*</sup>Corresponding author.</p>
          <div class="column has-text-centered">
            <div class="publication-links">
              <!-- PDF Link. -->
              <span class="link-block">
                <a href="./static/file/research.pdf" class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                    <i class="fas fa-file-pdf"></i>
                  </span>
                  <span>Paper</span>
                </a>
              </span>
              <!-- Code Link. -->
              <span class="link-block">
                <a href="https://github.com/itsnowkim/kirino" class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Code</span>
                </a>
              </span>
              <!-- Project Page Link. -->
              <span class="link-block">
                <a href="https://underthelights.github.io/kirino_page" class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                    <i class="fas fa-link"></i>
                  </span>
                  <span>Project Page</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container is-max-desktop">
    <!-- Project Architecture Image. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Project Architecture</h2>
        <div class="publication-video">
          <img src="./static/images/project_architecture.png" alt="Project Architecture">
        </div>
      </div>
    </div>
    <!--/ Project Architecture Image. -->

    <!-- Abstract. -->
    <div class="columns is-centered has-text-centered">
      <div class="column is-four-fifths">
        <h2 class="title is-3">Abstract</h2>
        <div class="content has-text-justified">
          <p>
            This research aims to develop a dialog system that reflects the persona of a speaker in a dialog system. For this purpose, we designed an abstract architecture based on the Retrieval-Augmented Generation (RAG) architecture, which generates the persona of each speaker based on the content of the conversation and presents a method to use it to personalize the conversation. We focused on developing a persona-based dialog system to address the problem of interactive agents giving inconsistent answers, talking out of context, and sometimes giving uninteresting answers in order to maintain natural conversations with humans. Experimental results show that our proposed method can improve the quality and naturalness of conversations, which suggests that it can contribute to improving the quality of conversational interfaces.
          </p>
        </div>
      </div>
    </div>
    <!--/ Abstract. -->
  </div>
</section>
