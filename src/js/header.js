// import "./style.css";

document.querySelector("header").innerHTML = `
  
        <div class="container-fluid">
          <div class="row">
            <div class="col-6 col-lg-2 header--logo">
              <a href="../"> 
                <img class="img-fluid" src="img/logo-linked.svg" alt="">
              </a>
            </div>
            <div class="col-lg-10 col-6 header--navegacion d-flex">
              <nav class="navbar-expand-lg">
                <div class="btn-ham" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="ham-top"> </span><span class="ham-mid"> </span><span class="ham-btm"> </span></div>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul>
                    <li class="active"><a class="text-decoration-none" id="li-problematica" href="#problematica">Problemática</a></li>
                    <li><a class="text-decoration-none" id="li-quienes-somos" href="#somos">¿Quiénes somos?</a></li>
                    <li><a class="text-decoration-none" id="li-meta" href="#meta">Nuestra meta</a></li>
                    <li><a class="text-decoration-none" id="li-como" href="#como">¿Cómo lo haremos?</a></li>
                    <li><a class="text-decoration-none" id="li-aliados" href="#aliados">Aliados</a></li><a id="link-btn-header" href="#unete"> 
                      <button class="boton prm" id="btn-header">ÚNETE </button></a>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      
`;
