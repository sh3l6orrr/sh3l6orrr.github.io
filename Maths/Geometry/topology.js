const topology = {
  data() {
    return {
      rawHtml: String.raw`
                1. For any set, we have the following defined properties:
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Property</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Finite</td>
                      <td>Exists bijection \(f: [0, n) \rightarrow S\), where \(n \in \mathbb{N}\)</td>
                    </tr>
                    <tr>
                      <td>Countable</td>
                      <td>Exists bijection \(f: \mathbb{N} \rightarrow S\)</td>
                    </tr>
                    <tr>
                      <td>Uncountable</td>
                      <td>Not countable</td>
                    </tr>
                    <tr>
                      <td>Is continuum</td>
                      <td>Exists bijection \(f: \mathbb{R} \rightarrow S\)</td>
                    </tr>
                  </tbody>
                </table>
                2. If we defined on any set a metric \(d: S \times S \rightarrow \mathbb{R}\), which has to satisfy the following:
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Property</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr>
                      <td>Symmetric</td>
                      <td>\(\forall x,y \in S: d(x,y) = d(y,x)\)</td>
                    </tr>
                    <tr>
                      <td>Positive definite</td>
                      <td>\(\forall x,y \in S: d(x,y) \geqslant 0 \wedge d(x,y) = 0 \rightarrow x=y\)</td>
                    </tr>
                    <tr>
                    <td>Satisfy triangle inequality</td>
                    <td>\(\forall x,y,z \in S: d(x,z) \leqslant d(x,y) + d(y,z)\)</td>
                  </tr>

                  </tbody>
                </table>
                Then the following properties of its subset \(E \subseteq S) arise:
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Property</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>Open</td>
                      <td>\(\forall x \in E,\ \exists r>0: B(x,r) \subseteq S\)</td>
                    </tr>
                    <tr>
                      <td>Closed</td>
                      <td>\(\forall x \in E^C,\ \exists r>0: B(x,r) \subseteq S\)</td>
                    </tr>

                  </tbody>
                </table>
                `

    }
  }
}

Vue.createApp(topology).mount('#topology_')