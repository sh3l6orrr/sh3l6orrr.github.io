const topology = {
    data() {
      return {
        rawHtml: String.raw`
        <h3>Topology</h3>
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
                `
        
      }
    }
  }

Vue.createApp(topology).mount('#topology_')