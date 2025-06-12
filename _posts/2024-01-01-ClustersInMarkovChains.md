---
layout: post
title: Cluster Detection in General Markov Chains with Applications to Directed Networks
author: Darryen Sands
tags: [Mathematical Modelling, Python, MATLAB, Cluster Detection, Network Theory, Data Analysis, Data Visualization]
excerpt_separator: <!-- excerpt -->
image: /assets/img/HeatmapMotivatingProblem.png
---

For my thesis work I developed an algorithm that detects clusters in Markov chains, and I mathematically justified the algorithm. It uses spectral theory to find clusters within a Markov chain and analyzes the gap between the eigenvalues.
The thesis can be found [here](https://ontariotechu.scholaris.ca/items/bdce277c-6d20-4457-b7ff-fe332863790a). I used Python and MATLAB to develop the algorithm as well as the benchmarks/analysis. I also used Python libraries such as NetworkX and Matplotlib to visualize the results.

<!-- excerpt -->

The algorithm works on the idea that the gaps between the eigenvalues of the transition matrix give us a good indicator of how many clusters there are. What is nice about this is that the gap can be found without using a divide-and-conquer method, reducing the use of memory. This algorithm is comparable to state of the art cluster detection algorithms such as Louvain in terms of accuracy. However, since the algorithm is based on finding eigenvectors, it is not as fast as other algorithms.
One of the future directions of this work is to develop bounds on Markov chain quantities given the information of the eigenvectors.