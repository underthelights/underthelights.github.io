---
layout: publication
title: "CLIP-RT : Learning Language-Conditioned Robotic Policies from Natural Language Supervision"
year: 2024
month: 11
authors:
  - Gi-Cheon Kang 1,2*
  - Junghyun Kim 1,2*
  - Kyuhwan Shim 1,2
  - Jun Ki Lee 2†
  - Byoung-Tak Zhang 1,2†
venue: "3rd Workshop on Language and Robot Learning (LangRob) @ The Conference on Robot Learning (CoRL 2024)"
venue_full: "3rd Workshop on Language and Robot Learning (LangRob) @ The Conference on Robot Learning (CoRL 2024)"
abstract: "This paper explores how non-experts can teach robots desired skills in their environments. We argue that natural language is an intuitive and accessible interface for robot learning. 
To this end, we investigate two key aspects: (1) how non-experts collect robotic data using natural language supervision and (2) how pre-trained vision-language models learn end-to-end policies directly from this supervision. 
We propose a data collection framework that collects robot demonstrations based on natural language supervision (e.g., \"move forward\") and further augments these demonstrations. 
Next, we introduce a model that learns language-conditioned policies from natural language supervision called CLIP-RT. 
Our model employs pre-trained CLIP models and learns to predict actions represented in language via contrastive imitation learning. 
We first train CLIP-RT on large-scale robotic data and then enable it to learn desired skills using data collected from our framework.
CLIP-RT shows strong capabilities in acquiring novel manipulation skills, outperforming the state-of-the-art model, OpenVLA (7B parameters), by 17% in average success rates, while using 7x fewer parameters (1B)."

link: "https://clip-rt.github.io"
category: 
  - "Robot Transformer"
  - "Vision-Language Model"
bibtex: |-
  @article{kang2024cliprt,
  title={CLIP-RT: Learning Language-Conditioned Robotic Policies from Natural Language Supervision},
  author={Kang, Gi-Cheon and Kim, Junghyun and Shim, Kyuhwan and Lee, Jun Ki and Zhang, Byoung-Tak},
  year = "2024",
  conference = "3rd Workshop on Language and Robot Learning (LangRob) @ The Conference on Robot Learning (CoRL 2024)",
  }
featured: true
type: Robot Transformer, Vision-Language Model
---
<meta name="description" content="CLIP-RT : Learning Language-Conditioned Robotic Policies from Natural Language Supervision">
<meta name="keywords" content="Robot Transformer, Vision-Language Model">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CLIP-RT : Learning Language-Conditioned Robotic Policies from Natural Language Supervision</title>

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
          <h1 class="title is-1 publication-title">CLIP-RT : Learning Language-Conditioned Robotic Policies from Natural Language Supervision</h1>
          <div class="is-size-5 publication-authors">
            <span class="author-block">
              <a href="https://gicheonkang.com">Gi-Choen Kang</a><sup>1,2*</sup>,
            </span>
            <span class="author-block">
              <a href="https://jhkim-snu.github.io/">Junghyun Kim</a><sup>1,2*</sup>,
            </span>
            <span class="author-block">
              <a href="https://bi.snu.ac.kr/~khshim/">Kyuhwan Shim</a><sup>1,2</sup>,
            </span>
            <span class="author-block">
              <a href="https://junkilee.github.io/">Jun Ki Lee</a><sup>2†</sup>,
            </span>
            <span class="author-block">
              <a href="https://bi.snu.ac.kr/~btzhang/">Byoung-Tak Zhang</a><sup>1,2†</sup>
            </span>
          </div>
          <div class="is-size-5 publication-authors">
            <span class="author-block"><sup></sup>¹IPAI, Seoul National University</span>
            <span class="author-block"><sup></sup>²AI Institute, Seoul National University (AIIS)</span>
          </div>
          <p><sup>*</sup>These authors contributed equally to this work.</p>
          <p><sup>†</sup>Corresponding author.</p>
          <div class="column has-text-centered">
            <div class="publication-links">
              <!-- arxiv Link. -->
              <span class="link-block">
                <a href="https://arxiv.org/" class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                    <i class="fas fa-file-pdf"></i>
                  </span>
                  <span>arXiv</span>
                </a>
              </span>
              <!-- Code Link. -->
              <span class="link-block">
                <a href="https://github.com/JHKim-snu/CLIP-RT" class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Code</span>
                </a>
              </span>
              <!-- Project Page Link. -->
              <span class="link-block">
                <a href="https://clip-rt.github.io/" class="external-link button is-normal is-rounded is-dark">
                  <span class="icon">
                    <i class="fas fa-link"></i>
                  </span>
                  <span>Official Page</span>
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
          <img src="https://github.com/clip-rt/clip-rt.github.io/blob/main/src/assets/model_overview.png" alt="Project Architecture">
          This paper explores how non-experts can teach robots desired skills in their environments. We argue that natural language is an intuitive and accessible interface for robot learning. 
To this end, we investigate two key aspects: (1) how non-experts collect robotic data using natural language supervision and (2) how pre-trained vision-language models learn end-to-end policies directly from this supervision. 
We propose a data collection framework that collects robot demonstrations based on natural language supervision (e.g., ``move forward'') and further augments these demonstrations. 
Next, we introduce a model that learns language-conditioned policies from natural language supervision called CLIP-RT. 
Our model employs pre-trained CLIP models and learns to predict actions represented in language via contrastive imitation learning. 
We first train CLIP-RT on large-scale robotic data and then enable it to learn desired skills using data collected from our framework.
CLIP-RT shows strong capabilities in acquiring novel manipulation skills, outperforming the state-of-the-art model, OpenVLA (7B parameters), by 17\% in average success rates, while using 7x fewer parameters (1B). 
        </div>
        <h2 class="title is-3">Abstract</h2>
        <div class="content has-text-justified">
          <p>
            This research aims to develop a dialog system that reflects the persona of a speaker in a dialog system. For this purpose, we designed an abstract architecture based on the Retrieval-Augmented Generation (RAG) architecture, which generates the persona of each speaker based on the content of the conversation and presents a method to use it to personalize the conversation. We focused on developing a persona-based dialog system to address the problem of interactive agents giving inconsistent answers, talking out of context, and sometimes giving uninteresting answers in order to maintain natural conversations with humans. Experimental results show that our proposed method can improve the quality and naturalness of conversations, which suggests that it can contribute to improving the quality of conversational interfaces.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
