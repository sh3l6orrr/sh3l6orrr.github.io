const linearAlgebra = {
  data() {
    return {
      rawHtml: String.raw`
      A function mapping between linear spaces may have the following properties
        By defining a inner product \(\langle \cdot,\cdot \rangle: V \times V \rightarrow F\) on a vector space \(V\) over \(F\), we can turn it into a inner product space. The inner product should satisfy:
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tr>
          <td>Linearity in 1st argument</td>
          <td>\(\forall x,y,z \in V,\ \forall c \in F: \langle cx+y,z \rangle = c\langle x,z\rangle+\langle y,z\rangle>\)</td>
        </tr>
        <tr>
          <td>Positive definite</td>
          <td>\(\forall x \in V: \langle x,x\rangle > 0\)</td>
        </tr>
        <tr>
        <td>Conjugate symmetry</td>
        <td>\(\forall x,y \in V: \langle x,y \rangle = \overline{\langle y,x\rangle}\)</td>
      </tr>
      </table><br>
      By defining a norm \(\|\cdot\|: V \rightarrow F\) on a vector space \(V\) over \(F\), we can turn it into a normed space. The norm should satisfy:
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tr>
          <td>Absolute homogeneous</td>
          <td> </td>
        </tr>
        <tr>
          <td>Positive definite</td>
          <td></td>
        </tr>
        <tr>
        <td>Satisfy triangle inequality</td>
        <td></td>
      </tr>
      </table><br>
      A mapping \(f: U \rightarrow V\) between two linear spaces over the field \(F\) may have the following properties:
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tr>
            <td>Homogeneous</td>
            <td>\(\forall x\in U,\ \forall c \in F: f(cx) = c^n f(x)\)</td>
          </tr>
          <tr>
            <td>Linear</td>
            <td>\(\forall x\in U,\ \forall c \in F: f(cx) = c f(x) \wedge f(x+y) = f(x) + f(y)\)</td>
          </tr>
        </table>
                `

    }
  }
}

Vue.createApp(linearAlgebra).mount('#linear_algebra_')

