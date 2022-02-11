const linearAlgebra = {
    data() {
      return {
        rawHtml: String.raw`
        <h3>Linear Algebra</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Property</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tr>
            <td>Homogeneous</td>
            <td>\(f(cx) = c^n f(x)\)</td>
          </tr>
          <tr>
            <td>Linear</td>
            <td>\(f(cx) = c f(x) \wedge f(x+y) = f(x) + f(y)\)</td>
          </tr>
          <tr>
            <td>Inner product</td>
            <td></td>
          </tr>
          <tr>
            <td>Norm</td>
            <td></td>
          </tr>
        </table>
                `
        
      }
    }
  }

Vue.createApp(linearAlgebra).mount('#linear_algebra')

