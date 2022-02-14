const setTheory = {
  data() {
    return {
      rawHtml: String.raw`
      <strong>Structure</strong> Set \(S\). This is any set. <br><br>

        <strong>Structure</strong> Field \(F( +, \ \cdot\ ):S\).<br>
        <strong>Property</strong> Algebraically closed: \(\).<br>
        <strong>Instance </strong> &ensp; System of complexes \(\mathbb{C}:F, Algebraically closed\).<br><br>


      <strong>Structure</strong> Ordered set \(S_O(<):S\).  A set with order defined.<br>
        <strong>Structure</strong> Ordered field \(F_O( +, \ \cdot\ , <):F\).<br>
        <strong>Property</strong> Complete: \(\).<br>
        <strong>Instance </strong> &ensp; System of reals \(R:F_O, Complete\).<br><br>

        <strong>Mapping</strong> Any function \(f:S \rightarrow S\) <br>
        <strong>Property</strong> Injective: \(f(x) = f(y) \Rightarrow x = y\).<br>
        <strong>Property</strong> Surjective: \(\forall y \in \operatorname{Ran}(f): \exists x \in \operatorname{Dom}(f): f(x) = y\).<br>
        <strong>Property</strong> Bijective: \(\Injective\ \wedge Surjective\).<br>

        <strong>Mapping</strong> Relation \(R:S \rightarrow \{0,1\}\). <br>
        <strong>Property</strong> Transitive: \(xRy \wedge yRz \Rightarrow xRz\).<br>
        <strong>Property</strong> (Ir)reflexive: \((\lnot) xRx\).<br>
        <strong>Property</strong> (A)symmetric: \(xRy \Rightarrow (\lnot) yRx\).<br>
        <strong>Property</strong> Antisymmetric: \(xRy \wedge x \neq y \Rightarrow \lnot yRx\).<br>
        <strong>Property</strong> (Strongly) Connected: \(xRy \vee yRx ()\vee x=y\).<br>
        <strong>Property</strong> Is Equivalence rel.: \(transitive\wedge reflexive\wedge symmetric\).<br>
        <strong>Property</strong> (Strict) partial order: \((ir)reflexive\wedge transitive\wedge (asymmetric) antisymmetric\).<br>
        <strong>Property</strong> (Strict) total order: \((ir)reflexive\wedge transitive\wedge (asymmetric)antisymmetric\wedge (connected) strongly connected\).<br>
                
                `

    }
  }
}

Vue.createApp(setTheory).mount('#set_theory_')