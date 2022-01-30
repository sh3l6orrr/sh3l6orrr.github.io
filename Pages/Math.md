### Proving function is a local minimum

*Problem.*

Let $J: C[0,1] \rightarrow \mathbb{R}$ be defined by $J(y) = 2y^3(0) - 3y^2(0)$, where $C[0,1]$ is a normed space with $\lVert \cdot \rVert_M = \max\lvert y \rvert$. 

Prove $y_0(x) = 1$ is a local minimum of $J$.

*Proof.*

Assume $y \in S_1(y_0)$. Then $\lVert y - y_0 \rVert < 1$.
By definition, $\max\lvert(y - y_0)(x)\rvert < 1 $, which implies
$\lvert y(x) - 1\rvert < 1  $.

Then by replacing the absolute value, $$0 < y  < 2 $$ 
Using this inequality, we show $J(y) - J(y_0) \geqslant 0$:
$$
\begin{aligned}
    J(y) - J(y_0) & = 2y^3(0) - 3 y^2(0) - 2y_0^3(0) + 3 y_0^2(0) \\
    & = 2y^3(0) - 3 y^2(0) + 1 \\
    & \geqslant \min (2y^3 - 3y^2) - 1 \\
    &= -1 + 1 \ \ \text{(Since the function assumes minimal value at $y(1)$)} \\
    &= 0
\end{aligned}
$$
Therefore, $\forall y \in S_1(y_0): J(y) \geqslant J(y_0)$. We've proved $y_0(x) = 1$ is a local minimum for $J$ as desired.
$$

*Jan 29th, 2022*