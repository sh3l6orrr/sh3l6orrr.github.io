const set_theory = {
    data() {
        return {
            raw_html: `
            <h3>Set Theory</h3>
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Property of Set</th>
                                    <th scope="col">Definition</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Empty</td>
                                    <td>\(S = \varnothing\)</td>
                                  </tr>
                                  <tr>
                                    <td>Ordered</td>
                                    <td>Defined total order \(\leqslant\) or strict total order \(<\)< /td>
                                  </tr>
                                  <tr>
                                    <td>Is field</td>
                                    <td>Defined addition \(+\) and scaler multiplication \(\cdot\)...</td>
                                  </tr>
                                  <tr>
                                    <td>Complete</td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td>Algebraically closed</td>
                                    <td></td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Ordered</th>
                                    <th scope="col">Is field</th>
                                    <th scope="col">Complete</th>
                                    <th scope="col">Algebraically closed</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>\(\mathbb{N}\)</td>
                                    <td> ✅ </td>
                                    <td> ❌ </td>
                                    <td> ❌ </td>
                                    <td> ❌ </td>
                                  </tr>
                                  <tr>
                                    <td>\(\mathbb{Z}\)</td>
                                    <td> ✅ </td>
                                    <td> ❌ </td>
                                    <td> ❌ </td>
                                    <td> ❌ </td>
                                  </tr>
                                  <tr>
                                    <td>\(\mathbb{Q}\)</td>
                                    <td> ✅ </td>
                                    <td> ✅ </td>
                                    <td> ❌ </td>
                                    <td> ❌ </td>
                                  </tr>
                                  <tr>
                                    <td>\(\mathbb{R}\)</td>
                                    <td> ✅ </td>
                                    <td> ✅ </td>
                                    <td> ✅ </td>
                                    <td> ❌ </td>
                                  </tr>
                                  <tr>
                                    <td>\(\mathbb{C}\)</td>
                                    <td> ❌ </td>
                                    <td> ✅ </td>
                                    <td> ✅ </td>
                                    <td> ✅ </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Property</th>
                                    <th scope="col">Definition</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Reflexive</td>
                                    <td>\(xRx\)</td>
                                  </tr>
                                  <tr>
                                    <td>Symmetric</td>
                                    <td>\(xRy \Rightarrow yRx\)</td>
                                  </tr>
                                  <tr>
                                    <td>Transitive</td>
                                    <td>\(xRy \wedge yRz \Rightarrow xRz\)</td>
                                  </tr>
                                </tbody>
                              </table>

                              <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Property</th>
                                    <th scope="col">Definition</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Injective</td>
                                    <td>\(f(x) = f(y) \Rightarrow x = y\)</td>
                                  </tr>
                                  <tr>
                                    <td>Surjective</td>
                                    <td>\(\forall y \in \operatorname{Ran}(f): \exists x \in \operatorname{Dom}(f): f(x) = y\)</td>
                                  </tr>
                                  <tr>
                                    <td>Bijective</td>
                                    <td>Injective & Surjectve</td>
                                  </tr>
                                  <tr>
                                    <td>Sequential</td>
                                    <td> \(\operatorname{Dom}(f) = \mathbb{N}\)</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Function</th>
                                    <th scope="col">Properties</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>\(\operatorname{sup}: S \rightarrow S\)</td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td>inf</td>
                                    <td></td>
                                  </tr>
                
                                </tbody>
                              </table>
        `
        }
    }
}

Vue.createApp(set_theory).mount('#set_theory')