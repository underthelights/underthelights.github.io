---
layout: publication
title: "ESPADA: Execution Speedup via Semantics Aware Demonstration Data Downsampling for Imitation Learning"
year: 2026
month: 1
authors:
  - Byungju Kim
  - Pahk Jinu
  - Chungwoo Lee
  - Jaejoon Kim
  - Jangha Lee
  - Theo Taeyeong Kim
  - Kyuhwan Shim
  - Jun Ki Lee
  - Byoung-Tak Zhang
venue: >
  <a href="https://www.ieee-ras.org/publications/ra-l"><strong>IEEE Robotics and Automation Letters (RA-L) 2026</strong></a>
tldr: >
  ESPADA segments demonstrations with a VLM-LLM pipeline and downsamples only non-critical segments, achieving about a 2x execution speed-up for imitation-learning policies without retraining.
abstract: >
  Behavior-cloning based policies inherit the slow, cautious tempo of human demonstrations. ESPADA is a semantic and spatially aware framework that segments demonstrations using a VLM-LLM pipeline with 3D gripper-object relations, enabling aggressive downsampling only in non-critical segments while preserving precision-critical phases. To scale from a single annotated episode to the full dataset, ESPADA propagates segment labels via Dynamic Time Warping on dynamics-only features, achieving approximately a 2x speed-up while maintaining success rates, without extra data, architectural modifications, or any form of retraining.
paper: "https://arxiv.org/abs/2512.07371"
page: "https://project-espada.github.io/espada/"
category:
  - "International"
bibtex: |-
  @article{kim2026espada,
    title={ESPADA: Execution Speedup via Semantics Aware Demonstration Data Downsampling for Imitation Learning},
    author={Kim, Byungju and Jinu, Pahk and Lee, Chungwoo and Kim, Jaejoon and Lee, Jangha and Kim, Theo Taeyeong and Shim, Kyuhwan and Lee, Jun Ki and Zhang, Byoung-Tak},
    journal={IEEE Robotics and Automation Letters},
    year={2026}
  }
---
