---
layout: post
title: Road Modelling Using Cellular Automata
author: Darryen Sands
tags: [Cellular Automata, C, Python, Project, Road Modelling]
excerpt: <excerpt>
---

This project implements the algorithm found in the 1992 paper <https://hal.science/jpa-00246697v1/document>. The code involves using cellular automata to model traffic flow in a one lane road. In this project, I also add to the model to predict the effects of weather and the effects of speed limits. The repository for this project can be found at [Road Modelling Using Cellular Automata](https://github.com/DarryenSands/MCSC6040-FinalProject).

Below are some diagrams that I created to show that I implemented the simulation correctly based on the paper. The darker the rectangle the faster the car is moving. In these images we see that with a low traffic density we have minimal slow-down (traffic jams), but as we increase the density we find that the traffic jam moves somewhat like a wave as time progresses (In the diagram time starts at zero from the top and increases as we go down). 

![Low Traffic Density](\assets\img\RoadValues.png "Low Traffic Density") ![High Traffic Density](\assets\img\RoadValues2.png "High Traffic Density")

When we introduce the effects of rain and speed limits we find that even with low density traffic we have slow-down (this is expected since rain means that drivers will slow-down and speed limits will do the same). The speed limits are in effect from half-way to 3/4 of the road length. Below are the space-time diagrams, 

![Rain Traffic Density](\assets\img\RoadValues3Rainpt8.png "Rain Traffic Density") ![Speed Limit Traffic Density](\assets\img\RoadValuesSpeedLimit.png "Speed Limit Traffic Density")

I also have a video down here to show the wave-like motion of the vehicles based on these cellular automata rules.
 
<video width="320" height="240" controls>
  <source src="\assets\img\test.mov" type="video/mp4">
</video>
