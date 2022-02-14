const realAnalysis = {
    data() {
      return {
        rawHtml: String.raw`
        Sequences are functions \(a: \mathbb{N} \rightarrow M\). They can have the following properties:
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cauchy</td>
              <td>\(\forall \epsilon > 0,\ \exists N \in \mathbb{N}, \forall m,n > N: d(a_m, a_n) < \epsilon\)</td>
            </tr>
            <tr>
              <td>Convergent</td>
              <td>\(\exist L,\ \forall \epsilon > 0,\ \exists N \in \mathbb{N}, \forall n > N: d(a_n, L) < \epsilon\)</td>
            </tr>
          </tbody>
        </table>
        Moreover, if \(a\) has a range of function space and is convergent, then it can have the additional properties:
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pointwise convergent</td>
              <td>\(\exist L(x),\ \forall \epsilon > 0,\ \exists N(x,\epsilon) \in \mathbb{N}, \forall n > N: d(a_n(x), L(x)) < \epsilon\)</td>
            </tr>
            <tr>
              <td>Uniformly convergent</td>
              <td>\(\exist L(x),\ \forall \epsilon > 0,\ \exists N(\epsilon) \in \mathbb{N}, \forall n > N: d(a_n(x), \\L(x)) < \epsilon\)</td>
            </tr>
            <tr>
              <td>Convergent in norm</td>
              <td>\(n\rightarrow 0 \Rightarrow \|a_n(x) - L(x)\| \rightarrow 0\)</td>
            </tr>
          </tbody>
        </table>

        If a sequence takes the form \(a_n = \sum_{k=0}^n f(k)\), and is taken the limit of \(n \rightarrow \infty\) then it's called a series, notated by: \(\lim_{n\rightarrow \infty} a_n = \lim_{n\rightarrow \infty} \sum_{k=0}^n f(k) := \sum_{k=0}^\infty f(k)\). A series is said to converge if its partial sum's sequence converge. <br><br>


        <div class="accordion">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse1" >
                Expand to see common types of series
              </button>
            </h2>
            <div id="collapse1" class="accordion-collapse collapse">
              <div class="accordion-body">
                Geometric series: \(\sum_{k=0}^\infty p^k\) for some \(p\).<br>
                P-series: \(\sum_{k=0}^\infty (\frac{1}{k})^p\).<br>
                &emsp; Harmonic series:\(\sum_{k=0}^\infty \frac{1}{k}\) for some \(p\).<br>
                Power series: \(\sum_{k=0}^\infty c_k(x-c)^k\) for some \(c, c_k\).<br>
                &emsp; Maclaurin series: \(\sum_{k=0}^\infty \frac{f^{(k)}}{k!}(0)x^k\) for some \(f\).<br>
                &emsp; Taylor series: \(\sum_{k=0}^\infty \frac{f^{(k)}}{k!}(c)(x-c)^k\) for some \(f,c \neq 0\).<br>
                Generalized Fourier series: \(\sum_{k=0}^\infty \langle f(x), \phi_k \rangle \phi_k\) for some \(f, \phi_k\), where \(\phi_k\) have linearly independent terms. <br>
                &emsp; Complex Fourier series: \(\sum_{k=-\infty}^\infty \langle f(x), e^{ikx} \rangle e^{ikx}\) for some \(f\).<br>
                &emsp; Fourier series: \(\frac{a_0}{2}+\sum_{k=1}^\infty \langle f(x), \cos(kx) \rangle \cos(kx) + \langle f(x), \sin(kx) \rangle \sin(kx)\) for some \(f\).<br>
                &emsp; &emsp; Fourier cosine series: \(\frac{a_0}{2}+\sum_{k=1}^\infty \langle f(x), \cos(kx) \rangle \cos(kx)\) for some \(f\).<br>
                &emsp; &emsp; Fourier sine series: \(\sum_{k=1}^\infty \langle f(x), \sin(kx) \rangle \sin(kx)\) for some \(f\).<br>
              </div>
            </div>
          </div>
        </div>
        `
        
      }
    }
  }

Vue.createApp(realAnalysis).mount('#real_analysis_')