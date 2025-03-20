---
layout: post
title: Detecting Fraudulent Transactions
author: Darryen Sands
tags: [Machine Learning, Finance, Python, Tensorflow, Project]
excerpt_separator: <!-- excerpt -->
image: /assets/img/Presentation1NN.png
---

This is a project where my group was tasked with detecting fraudulent transactions in a skewed dataset. This dataset was created with [PaySim](https://github.com/EdgarLopezPhD/PaySim), which is a transaction simulator used to model realistic transaction data. One of the main challenges was that the distribution of the fraudulent cases to non-fraudulent ones was extremely low. So we had to account for that in our machine learning model and make sure that our model would not overfit the data and penalize incorrectly identifying fraudulent transactions. We did a literature search of papers to help us solve this problem ([Credit card fraud detection](https://www.sciencedirect.com/science/article/abs/pii/S0020025519304451), [Class imbalance survey](https://journalofbigdata.springeropen.com/articles/10.1186/s40537-019-0192-5)). 

<!-- excerpt -->

We created a rudimentary model to predict fraudulent transactions, the model can be seen below. We have four different metrics that we analyze: accuracy, Area-under-the-curve (AUC), precision, and recall. Our model heavily depends on the penalization on incorrect identifications and reward for correct identifications. We tuned these values in order to obtain a better model for prediction. 


<img src="\assets\img\Presentation1NN.png" alt="Neural network" class="center">

Our model's metrics can be seen below. Our accuracy is relatively low, but AUC and recall are quite high. Precision is also quite low. This model has lots of room for improvement, and we can use the theory from the literature to improve our metrics. 

<img src="\assets\img\ModelMetrics.png" alt="Model metrics" class="center">
