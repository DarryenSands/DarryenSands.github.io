---
layout: post
title: Road Modelling Using Cellular Automata
author: Darryen Sands
tags: [Cellular Automata, C, Python, Project, Road Modelling]
excerpt_separator: <!-- excerpt -->
image: /assets/img/RoadValues.png
---

This project implements the algorithm found in the 1992 paper [A cellular automaton model for freeway traffic](https://hal.science/jpa-00246697v1/document). The code involves using cellular automata to model traffic flow in a one lane road. In this project, I also add to the model to predict the effects of weather and the effects of speed limits. The repository for this project can be found at [Road Modelling Using Cellular Automata](https://github.com/DarryenSands/MCSC6040-FinalProject).

<!-- excerpt -->
The single lane has a length of \(L\) cells, and each cell can be empty or occupied by a car. The cars can move forward \(v_s\) spaces forward where \(v_s\) is the speed of the car. The simulation runs for a specified number of time steps \(t\), and the results are visualized using space-time diagrams.
The algorithm is comprised of four rules:
* If the car has not reached its maximum speed, it will accelerate by one speed unit.
* If the next car's position is less than the current car's speed, then decrease the speed of the current car to the distance of the next car's position - 1.
* The car will occasionally slow down to random effects, decreasing its speed by 1.
* Advance each car by its speed.

Below are some diagrams that I created to show that I implemented the simulation correctly based on the paper. The darker the rectangle the faster the car is moving. In these images we see that with a low traffic density we have minimal slow-down (traffic jams), but as we increase the density we find that the traffic jam moves somewhat like a wave as time progresses (In the diagram time starts at zero from the top and increases as we go down). 

<center><img src="/assets/img/RoadValues.png" alt="Low Traffic Density"> <img src="/assets/img/RoadValues2.png" alt="High Traffic Density"></center>

When we introduce the effects of rain and speed limits we find that even with low density traffic we have slow-down (this is expected since rain means that drivers will slow-down and speed limits will do the same). The speed limits are in effect from half-way to 3/4 of the road length. Below are the space-time diagrams, 

<center><img src="/assets/img/RoadValues3Rainpt8.png" alt="Rain Traffic Density"> <img src="\assets\img\RoadValuesSpeedLimit.png" alt="Speed Limit Traffic Density"></center>

I also have a video down here to show the wave-like motion of the vehicles based on these cellular automata rules.
 
<video width="320" height="240" controls>
  <source src="\assets\img\test.mov" type="video/mp4">
</video>

