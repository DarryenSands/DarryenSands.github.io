---
layout: post
title: DM Assistant
author: Darryen Sands
tags: [Neural Networks,  Python, PyTorch, Product, PHP, Laravel, FastAPI, Postgres]
excerpt_separator: <!-- excerpt -->
image: /assets/img/DMAssistant.png
---

For a capstone product, myself and two other members created a web application that can help users create Dungeons and Dragons worlds with the help of AI. It includes the ability to generate maps, stories, and NPCs.

<center><img src="/assets/img/DMAssistant.png" alt="DM website"></center>

I primarily worked on the diffusion model that generates maps with a UNet architecture. The architecture diagram looks like the image below.

<center><img src="/assets/img/ArchitectureDiagram.png" alt="Architecture of UNet"></center>

The map generation interacts with the main web app as a separate microservice (FastAPI). The main web app (Laravel) gives the microservice a response then the microservice generates an image and returns that to the Laravel controller.

The github for the web app is [here](https://github.com/blade-lucas/dm-assistant-webapp) and the microservice is [here](https://github.com/DarryenSands/MLImageGenerator). You can use the website [here](https://dm-assistant-webapp-production.up.railway.app/).

The training process involved generating 25k images using procedural generation algorithms such as cellular automata, BSP, and MST. These images look like the following 

<center><img src="/assets/img/sample_grid_balanced.png" alt="Grid of training samples"></center>

and these were processed into a dataloader to make training more efficient.