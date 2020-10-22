---
layout: post
title: Proof of charge conservation law

---
We first take the derivative of the Gauss Law from the Maxwell Equations with respect to time on both sides

\\begin{equation}
\\dfrac{\\partial}{\\partial t} \\left ( \\nabla \\cdot \\mathbf { E } ( \\mathbf { r } , t ) = \\frac { 1 } { \\varepsilon _ { 0 } } \\rho ( \\mathbf { r } , t ) \\right )
\\end{equation}

If we assume that $\\mathbf E$ and $\\mathbf B$ are [smooth vector functions, the derivative order is interchangeable](https://en.wikipedia.org/wiki/Symmetry_of_second_derivatives). So,

\\begin{equation}
\\nabla \\cdot \\dfrac{\\partial}{\\partial t} \\mathbf { E } ( \\mathbf { r } , t ) = \\frac { 1 } { \\varepsilon _ { 0 } } \\dfrac{\\partial}{\\partial t} \\rho ( \\mathbf { r } , t )
\\end{equation}

Now we take the divergence of Ampere's law

\\begin{equation}
\\nabla \\cdot \\left ( \\nabla \\times \\mathbf { B } ( \\mathbf { r } , t ) = \\frac { 1 } { c ^ { 2 } } \\frac { \\partial \\mathbf { E } ( \\mathbf { r } , t ) } { \\partial t } + \\mu _ { 0 } \\mathbf { j } ( \\mathbf { r } , t ) \\right )
\\end{equation}

and similarly change the order of derivatives

\\begin{equation}
\\nabla \\cdot \\left ( \\nabla \\times \\mathbf { B } ( \\mathbf { r } , t ) \\right ) = \\frac { 1 } { c ^ { 2 } } \\frac { \\partial } { \\partial t } \\left ( \\nabla \\cdot \\mathbf { E } ( \\mathbf { r } , t )\\right )+ \\mu _ { 0 } \\nabla \\cdot \\mathbf { j } ( \\mathbf { r } , t )
\\end{equation}

We know that the divergence of a curl is zero, so the left-hand side of the above equation is zero. The first term of the right-hand side is the same as the time derivative of the Gauss Law. Combining these two,

\\begin{equation}
0 = \\dfrac{1}{c^2} \\dfrac{1}{\\epsilon_0} \\dfrac{\\partial \\rho}{\\partial t} + \\mu_0 \\nabla \\cdot \\mathbf { j } ( \\mathbf { r } , t )
\\end{equation}

and since

\\begin{equation}
\\dfrac{1}{c^2} = \\epsilon_0 \\mu_0
\\end{equation}

then

\\begin{equation}-\\nabla \\cdot \\mathbf { j } ( \\mathbf { r } , t ) = \\dfrac{\\partial \\rho}{\\partial t} \\end{equation}

which is defined as the charge conservation law.