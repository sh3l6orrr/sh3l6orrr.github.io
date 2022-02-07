const app = {
    data() {
      return {
        rawHtml: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light d-block d-sm-none mb-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">sh3l6or</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <li class="nav-item"> <a class="nav-link active"
                                href="https://sh3l6orrr.github.io/index.html"> Home </a> </li>
                        <li class="nav-item"> <a class="nav-link"
                                href="https://sh3l6orrr.github.io/math.html"> Math </a> </li>
                        <li class="nav-item"> <a class="nav-link"
                                href="https://sh3l6orrr.github.io/coding.html"> Coding </a> </li>
                        <li class="nav-item"> <a class="nav-link"
                                href="https://sh3l6orrr.github.io/music.html"> Music </a> </li>
                        <li class="nav-item"> <a class="nav-link"
                                href="https://sh3l6orrr.github.io/peculiarities.html"> Peculiarities  </a>  </li>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="mt-4 mb-3 d-none d-sm-block">
            <ul class="nav nav-tabs">
                <li class="nav-item"> <a class="nav-link active"
                        href="https://sh3l6orrr.github.io/index.html"> Home </a> </li>
                <li class="nav-item"> <a class="nav-link"
                        href="https://sh3l6orrr.github.io/math.html"> Math </a> </li>
                <li class="nav-item"> <a class="nav-link"
                        href="https://sh3l6orrr.github.io/coding.html"> Coding </a> </li>
                <li class="nav-item"> <a class="nav-link"
                        href="https://sh3l6orrr.github.io/music.html"> Music </a> </li>
                <li class="nav-item"> <a class="nav-link"
                        href="https://sh3l6orrr.github.io/peculiarities.html"> Peculiarities </a>
                </li>
            </ul>
        </nav>
        `
      }
    }
  }
  
Vue.createApp(app).mount('#navbar')