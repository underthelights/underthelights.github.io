---
layout: post
date: 2023-06-14
title: "Final Repackaging for ML (1)"
tags: [ML, ]
categories: [Notes, ]
use_math: true
---


# 7. kNN

<details>
  <summary><u>**kNN = Instance based learning**</u></summary>


주어진 test sample X에 대하여, kNN samples (xn1, yn1) … (xnk, ynk)를 위치시켜 majority class label yn1, .. ynk를 xt에 assign한다.



  </details><details>
  <summary><u>**kNN pros and cons**</u></summary>

- pros :
	- training is very fast : feature extraction and save
	- learn complex target fn
	- doesn’t lose info
- cons :
	- slow at test  → not goot
	- requires large storage
	- not robust against irrevalent attributes, outliers


  </details><details>
  <summary><u>**Distance Metrics**</u></summary>

- kNN - test 시점 ) data와 Near한지 distance 계산
- distance : 모든 Classification , regression에서 중요
	- 단 Nominal data다루는 DT에서는 불필요
	- similiarity와 반비례
- Euclidean distance : $\sqrt{\Sigma_{d=1}^{D} |x_{td} - x_{nd}|^2}$
- Manhattan distance : ${\Sigma_{d=1}^{D} |x_{td} - x_{nd}|}$
- $L^n$-norm : $\sqrt{\Sigma_{d=1}^{D} |x_{td} - x_{nd}|^n}$


  </details><details>
  <summary>**VDM**</summary>


provide d measurements for nominal attributes



  </details><details>
  <summary><u>**Problem from Euclidean distance**</u></summary>

1. High dim data - curse of dimensionality
	- 너무 많이 feature, attrib 증가시킬 경우 dim이 너무 많이 증가해 차원의저주
	- sample로부터 available info 가 많고 정확하다면 dim 높아도 괜찮음
2. 보통 sparse하고 density를 shrink하여 적용한다.
3. 과연 d가 동일하다고 data feature를 잘 나타낼까?
	- MSB, LSB 등 bit 연산으로부터 잘 표현이 안될수도 있음
	- Hamming d.


  </details><details>
  <summary><u>**Behavior of limit**</u></summary>


$\lim _{n \rightarrow \infty} \leq 2 \epsilon ^*$


pf) goodnote 참고



  </details><details>
  <summary><u>**Standardization**</u></summary>


z = x - mu / sigma



  </details><details>
  <summary><u>**how to choose k**</u></summary>

- k is too small → sensitive to noise points
- k is too big → neighborhood may include pts from other classes
	- smoother when k get bigger
- 보통 $k = \sqrt N$
- $n \rightarrow \infty$, k gets larger → good performance as good as bayes classifier


  </details><details>
  <summary><u>**Cross Validation !!!**</u></summary>

- N fold cross validation → k to minimize cross valid error

overfitting에 의해 - train error를 줄이는 것이 무작정 좋지는 않다



  </details><details>
  <summary><u>**Condensing!!!**</u></summary>

- [Aim] reduce the number of training samples
- Decision boundary consistent : same with entire training set
	- min. consistent set : smallest subset of samples

1) init subset with single ex. 
→ 2) nearest neighbor 생성, epsilon나오는 incorrected samples 선택 
→ 3) 2)반복 Until no transfers or subset is full → result 구하기



  </details><details>
  <summary><u>**Voronoi Diagram**</u></summary>

- Voronoi Diagram : div space into such cells : 구획으로 나누고 boundary 영향없는 sample del
- Delaunary triagulation 생성 → circumcircle center pt 끼리 연결 : 
각 sample pt class에 따라 전체 영역 Class 결정
	- Delaunary triagulation : 삼각형의 세 점에 외접하는 삼각형, 각도 최대화
	- not unique
- 


  </details>
# **8. ANN**

<details>
  <summary><u>**Differences with**</u> </summary>

- Similar : SVM처럼 high dimension mapping과 유사한 input layer to hidden layer
	- 원래 feature space에서는 not linearly separable → phi fn(high dim) 으로 sol


  </details><details>
  <summary><u>**Bitwise Calc.**</u></summary>


perceptron : AND, OR연산 가능하나 XOR 불가능 

- sol: XOR이 nonlinear해서 생긴 문제 : 2 Decision boundary


  </details><details>
  <summary><u>**ANN Training**</u></summary>

- input - hidden - output : hidden layer 수에 따라 네트워크 구조가 좌우되며 linearly nonsolvable 문제도 해결해낼 수 있다
- 1) decide input /output / hidden layer node number 
→ 2) find weight using training alg (backpropagation)
- #class = #node


  </details><details>
  <summary><u>**Backpropagation**</u></summary>

- (등장배경) NN-SVM-DNN에서 SVM이 많이 쓰이는 경우였음. NN에서 overfitting / XOR문제
- (Idea) Weight w를 Error 감소하는 방향으로 Update - between prediction vs ground truth val
- (prob. similar to perceptron) stuck in local minima, iteratively get w, many w to get y
- chain rule


  </details><details>
  <summary><u>**Vanishing Gradient Problem**</u></summary>


error들이 backpropagate하면 gradient가 vanish하는 현상 : layer에서 소수점이 곱해질수록 0으로 수렴하기 때문이다. w = w - eta dE/du

- sol : requires lots of data
- nonlinear ReLU
- Layerwise learning : 충분히 학습되면 넘어감


  </details><details>
  <summary><u>**Overfitting**</u></summary>

- Only get good result for train data only

get stuck in local minima 

- solution : randomly set initial val +many data + much computation power→ train many times → avg 추출

good model check

- solution : train data, test data 변화시키며 stable result를 보이는지 확인한다


  </details>
# 9. DNN

<details>
  <summary><u>**Why is better than traditional ML**</u></summary>

- SVM) Manual, Human supervised, div and conquer
	- 기존에 human이 feature extraction한 후 classification함.
	- SVM에서는 Hand-crafted phi fn을 활용해서 alg에서 Pattern이 더 잘 보이도록 수정했다
- DL) Automatical, end-to-end NN
	- end-to-end joint system : NN이라는 hierarchical structure로 feature extract + classification 과정 수행
		- → data를 지속적으로 분류 : 자체적으로 자동적으로 배우고 지능적인 결정 수행
	- modularization : automatically learned from data (each classes)


  </details><details>
  <summary><u>**DNN consist**</u></summary>

- input layer + multiple hidden l + output layer


  </details><details>
  <summary><u>**(CNN) Layers : FC Layer, Locally connected layer**</u></summary>


corelation 구하는 작업 → 조합을 다음 layer로 전달한다.

- FC : globally corelated - rsrc waste, too much calc., not enough data to train pm
- LC : 일정 convolution내 node (different locations-convolutions with learned kernel)
	- convolution : 특정 Window size filter


  </details><details>
  <summary><u>**(CNN) Conv. operations**</u></summary>

- Conv A * B = B * A
- cross-corelation : A . B ≠ B . A
- auto-correlation : 자기 자신과 동일


  </details><details>
  <summary><u>**(CNN) Pooling**</u></summary>


filter responses at different location → robustnest to spatial location of filters

- max, avg, l2 pooling


  </details><details>
  <summary><u>**(CNN) size of feature map 계산**</u></summary>



  </details><details>
  <summary><u>**tasks**</u></summary>

- Classification : exact class 분류
- Localization : obj 주변에 box를 두고 정답과 적어도 50%이상 겹쳐야 함
- Obj Detection : n개의 obj에 모두 boundary box 처리


  </details><details>
  <summary><u>**Alexnet**</u></summary>

- act. fn. : ReLU in Hidden layers → faster, expressive than sigmoid
- ten different 224*224 patches from from 256*256 img
- dropout to reg. weight in FC layers
- padding


  </details><details>
  <summary><u>**FC Layer**</u> </summary>


has no constrains the input img size (상관 없음)



  </details><details>
  <summary><u>**DNN Evolution**</u></summary>


NN - Perceptron - Backporpagatino ,RNN, RBM - CNN, MNIST, LSTM, BRNN - DBN - GAN - AlphaGo

- data labeled
- obj detection focused
- GPU
	- good for mat*mat multiplies + high bandwidth
- shallower


  </details><details>
  <summary><u>**Backgrounds**</u></summary>

- HW (GPU) + Data (Big data) + Alg (learning Alg)
- limit : cannot do commonsense reasoning - 상식, 윤리의 Lack


  </details>
# 10. DNN2

<details>
  <summary><u>**Data Processing**</u></summary>



  </details><details>
  <summary><u>**Weight Init.**</u></summary>



  </details><details>
  <summary><u>**Batch Normalization**</u></summary>



  </details><details>
  <summary><u>**Regularization**</u></summary>



  </details><details>
  <summary><u>**Dropout**</u></summary>

- (배경) deep NN 일수록 특정 node가 학습 시 dropped case 발생
- (train) assume dropout rate p → (test) no dropout


  </details><details>
  <summary><u>**regularization common pattern**</u></summary>



  </details>
# 11. Ensemble learning

<details>
  <summary>Ensemble Learning</summary>

1. 


  </details><details>
  <summary>Generate Ensembles </summary>



  </details><details>
  <summary>**Ensemble learning via negative correlation learning:**</summary>

- Generating sequentially new predictors **negatively correlated** with the existing ones
	- 현재 classifier하고 negative corelation갖는 classifier를 학습하여 융합한다


  </details><details>
  <summary>Bagging</summary>

- Averaging the prediction over a collection of predictors generated from **bootstrap samples** (both classification and regression)

	bootstrap sample :trian data있으면 subset sampling

	- 각각 sampling으로부터 classifier 학습

		Random하게 sampling하며 다양한 model



  </details><details>
  <summary>Boosting</summary>

- Weighted vote with a collection of classifiers that were trained sequentially from training sets given priority to instances **wrongly classified**

	Boosting : 여러 단계를 거쳐 classifier 학습

	- 이전 단계의 classifier의 오답에 초점을 맞춘다.

	오류가 나오는 data들을 모아 다음 stage에서 초점을 맞추어 학습하여 융합한다



  </details><details>
  <summary>Boosting - Adaboost</summary>



  </details><details>
  <summary>Adaboost vs Boosting</summary>



  </details><details>
  <summary>Random Forest</summary>


RandomForest:

- Averaging the prediction over a collection of trees constructed using a **randomly selected subset of features**
	- tree를 randomly생성하여 randomly select해서 만든다.


  </details><details>
  <summary>Heterogeneous ensembles:</summary>

- Combining a set of **heterogeneous predictors**
	- NN + SVM + DT 등 융합


  </details><details>
  <summary>Model Selection</summary>



  </details>
# 12. Clustering

<details>
  <summary><u>**K-means clustering**</u></summary>



  </details><details>
  <summary><u>**K-means clustering properties**</u></summary>



  </details><details>
  <summary><u>**Agglomerative clustering**</u> </summary>



  </details><details>
  <summary><u>**Agglomerative clustering - hierarchical clustering : strength, complexity**</u></summary>



  </details><details>
  <summary><u>**Closest pair (single-link clustering)**</u></summary>



  </details><details>
  <summary><u>**Farthest pair (complete-link clustering)**</u></summary>



  </details><details>
  <summary><u>**Average of all pairs**</u></summary>



  </details>
# 13. Dimensionality Reduction

<details>
  <summary><u>**Goal of Dimensionality Reduction**</u> </summary>


Visualization 용이 : 3dim 이하로 Reduct → visualize easy


Performance 향상 : easy to handle data


Computation cost 감소 



  </details><details>
  <summary><u>**Data Compression**</u></summary>


(필요성) Too high dimension of detection windows : computationally intensive

- Cannot handle them : too high dimensionality → pixel diminish시켜 사용
- Curse of dimensionality : 너무 Data dimension이 높아지면 accuracy가 떨어지는 현상
	- boolean이 아닌 Observed value (measured) : boolean이 아니라 acc 떨어질 수 있음


  </details><details>
  <summary><u>**Feature Extraction**</u></summary>


(과정) very high-dim raw data → feature extraction dimension reduction → classifier



  </details><details>
  <summary><u>**dimension reduction**</u></summary>


axis에 projection한 형태로 reduct dimension



  </details><details>
  <summary><u>**왜 좌표축을 rotate한 것이라고 표현하는가? (multivariate dataset into new config)**</u></summary>

- simplify data
- easy to look at rel. between variable - patterns of units


  </details><details>
  <summary><u>**PCA process**</u></summary>

- [goal] find k-dim projection  which preserves best variance


  </details><details>
  <summary><u>**PCA  - Eigenvalue, vector의 의미?**</u></summary>

- <u>**eigenvector :PCA분석을 했을 때 data가 가장 크게 분산된 방향으로 표현하는 방향벡터이고 그 정도를 가리키는 것은 eigenvalue.**</u>
- smaller eigenvalue 순 - eigenvector 정렬 → 크게 var되는 방향으로 정렬
- 가장 큰 eigenvector로 하여 좌표축을 변환해도 data들이 잘 표현이 됨
	- data를 Eigenvector에 Projection : 새로운 좌표값으로 나오게 됨


  </details><details>
  <summary><u>**LDA**</u></summary>


LDA : labeled 


LDA의 필요성



  </details><details>
  <summary><u>**PCA vs. LDA**</u></summary>



  </details><details>
  <summary><u>**Eigenface**</u></summary>


x new = sigma wi xi

- data의 Weighted sum으로 나온다 : linear data
- whoe data to DNN → 더 효과적이더라


  </details>
# 14. RL

<details>
  <summary><u>**Characteristics of Reinforcement Learning**</u> </summary>

- Feedback is delayed, not instantaneous
- Time really matters (sequential, non i.i.d. data)
	- 시간이 중요한 요소 중 하나
	- sequential : 전반의 선택이 후반의 선택에 영향
	iid = independent identically distributed - 상호 연관
- Agent’s actions affect the subsequent data it receives
	- agent action이 이후 data에 영향을 미친다.
- **Goal: select actions to maximize total future reward**
	- 일련의 행동에 따른 reward가 최대가 되도록 학습한다


  </details><details>
  <summary><u>**Diff. with supervised, unsupervised learning**</u></summary>

- What makes reinforcement learning different from other machine learning paradigms?
- supervised l. vs unsupervised l. vs. RL
	- supervised : label + data
	- Unsupervised : just use given data
	- RL : data + reward - Reward에 해당하는 추가적인 input이 존재함

→ There is no supervisor, only a reward signal



  </details><details>
  <summary><u>**Rewards**</u></summary>

- Indicate show well agent is doing at step t & The agent’s job is to maximize cumulative reward
- 각각의 시간에 얼마나 잘 행동 했는지 보고 reward 최대화되는 방향으로 행동하도록 학습
- Reinforcementlearning is based on the reward hypothesis
	- reward = 사람이 만든 기준
	ex. Atari game : target 별 최대한의 점수를 학습할 수 있도록 학습이 되기도 함. 점수가 많은 쪽을 더 빨리 얻을 수 있도록 학습시키는 양상이 생길 수 있다,
	- Reward hypothesis: all goals can be described by the m**aximization of expected cumulative reward**
- Reward may be delayed reward는 delay를 수반하여 주어질 수 있다
- 현재 action으로 인한 reward에 더 중점을 둘 것인지, 미래의 reward에 중점을 더 둘 것인지 : user setting할 수도 있고 학습 단계에서 어떻게 parameter를 설정했는지에 따라 / 학습이 잘 효과적으로 이루어질수 있는지를 고려하여 모수 조정
	- (greedy) 현재 reward에 초점을 맞추는 경우 - current reward
	- (optimal) 전체 reward에 초점을 맞추는 경우 - total reward
		- Itmay be better to sacrifice immediate reward to gain more long-term reward (greedy optimal)


  </details><details>
  <summary><u>**구성 of RL**</u></summary>

- At each stept the agent: agent가 주변을 관찰하고, reward를 받아 action을 취함
	- Executes action At
	- Receives observation Ot
	- Receives scalar reward Rt
- An RL agent may include one or more of these components:
	- Policy: agent’s behavior function 행동 정의
	- Value function: how good is each state and/or action 얼마나 좋은가
	- Model: agent’s representation of the environment  학습 모델

<agent, environment의 상호작용>
agent는 action을 취하고 state에 따라 Reward를 받게 됨
env는 action을 받아들여서 agent에게 주고 변환된 statement를 agent에게 줌

- t타임으로 이루어지는 요소들


  </details><details>
  <summary><u>**Bellman Eq**</u></summary>


$$
V(s) = max_a(R(s,a) + \gamma V(s'))
$$

- $R(s,a) $: reward: state에서 취한 action에 따른 reward
- $V(s)$ : is the value function - value function:전체 reward 를 어떻게 표현할 것인가
- $\gamma$ : is the discounting factor
	- 현재-미래 reward중 어느 것에 초점을 맞출 것인지 중요도 맞추는 상수
- $s'$ : is the next state agent can go from
	- s : 현재 state, s’ : next state

$$
V(s) = max_a(R(s,a) + \gamma V(s'))
$$

- By calculating V(s) for all states
	- Agent can move to the state with larger state value
- 임의의 출발점에서 state function 커지는 쪽으로 action을 취하면 된다
→ equation을 이용해서 value funcition을 구한후 최적의 path를 구할 수 있다


  </details><details>
  <summary><u>**Sequential Decision Making**</u></summary>

- 현재의 action이 다음 턴 action에 영향을 미치는데, 오랜 turn에 대해 영향을 끼칠수도 있음.
- Actions may have long term consequences
	- state가 있고 action을 취해서 s1-(a1)->s2-(a2)->s3


  </details>