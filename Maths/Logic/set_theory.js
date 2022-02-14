const setTheory = {
  data() {
    return {
      rawHtml: String.raw`
        Sets can have the following properties:
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Property</th>
                      <th scope="col">Definition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nonempty</td>
                      <td>\(S \neq \varnothing\)</td>
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
                </table><br>
                
              <div class="accordion">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse1" >
                    Expand to see basic sets
                  </button>
                </h2>
                <div id="collapse1" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Notation</th>
                          <th scope="col">Ordered</th>
                          <th scope="col">Is field</th>
                          <th scope="col">Complete</th>
                          <th scope="col">Algebraically closed</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Naturals</td>
                          <td>\(\mathbb{N}\)</td>
                          <td> ✅ </td>
                          <td> ❌ </td>
                          <td> ❌ </td>
                          <td> ❌ </td>
                        </tr>
                        <tr>
                          <td>Integers</td>
                          <td>\(\mathbb{Z}\)</td>
                          <td> ✅ </td>
                          <td> ❌ </td>
                          <td> ❌ </td>
                          <td> ❌ </td>
                        </tr>
                        <tr>
                          <td>Rationals</td>
                          <td>\(\mathbb{Q}\)</td>
                          <td> ✅ </td>
                          <td> ✅ </td>
                          <td> ❌ </td>
                          <td> ❌ </td>
                        </tr>
                        <tr>
                          <td>Algebraics</td>
                        <td>\(\mathbb{A}\)</td>
                        <td> ✅ </td>
                          <td> ✅ </td>
                          <td> ❌ </td>
                          <td> ❌ </td>
                      </tr>
                        <tr>
                          <td>Reals</td>
                          <td>\(\mathbb{R}\)</td>
                          <td> ✅ </td>
                          <td> ✅ </td>
                          <td> ✅ </td>
                          <td> ❌ </td>
                        </tr>
    
                        <tr>
                          <td>Complexes</td>
                          <td>\(\mathbb{C}\)</td>
                          <td> ❌ </td>
                          <td> ✅ </td>
                          <td> ✅ </td>
                          <td> ✅ </td>
                        </tr>
                      </tbody>
                    </table>
                    <strong>Note </strong> &ensp;\((\mathbb{R}, +, \ \cdot\ , <)\) is a structure defined as a system of reals.<br><br>
                    <strong>Note </strong> &ensp;\(\mathbb{Z} \setminus \mathbb{N}\) is the set of negative integers,  \(\mathbb{Q} \setminus \mathbb{Z}\) is the set of fractional numbers, \(\mathbb{A} \setminus \mathbb{Q}\) is the set of algebraic irrational numbers, \(\mathbb{R} \setminus \mathbb{A}\) is the set of transcendental numbers,
                    \(\mathbb{C} \setminus \mathbb{R}\) is the set of imaginary numbers.
                  </div>
                </div>
              </div>
            </div>
                <br>

                Functions can have the following properties:
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
                  </tbody>
                </table><br>
                Functions in the form \(\cdot\ R\cdot \ : S \times S \rightarrow {0,1}) is called a relation. Then it can have the following properties:
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
              </table><br>

                <div class="accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse1" >
                      Expand to see basic functions
                    </button>
                  </h2>
                  <div id="collapse1" class="accordion-collapse collapse">
                    <div class="accordion-body">
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
                            <td>\(\operatorname{inf}: S \rightarrow S\)</td>
                            <td></td>
                          </tr>
        
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
                
                `

    }
  }
}

Vue.createApp(setTheory).mount('#set_theory_')