function generateNavbar() {
    return `
    
    <nav class="navbar navbar-expand-lg">
      <div class="container"> <a class="navbar-brand navbar-logo" href="../index.html"><img src="images/logo1.png"  class="logo"> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto ">

              
              <li class="nav-item"> 
                <div class="dropdown ">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </a>
                <ul class="dropdown-menu" >
                <li><a class="dropdown-item" href="../index.html#team">Our team</a></li>
                <li><a class="dropdown-item" href="../index.html#testimonials">Testimonials</a></li>
                </ul>
                
                
  
              </div>  
              </li>
              
            
            
            <li class="nav-item"> <a class="nav-link" href="../about.html" >About</a> </li>
            <li class="nav-item"> <a class="nav-link" href="../features.html" >Features</a></li>
            <li class="nav-item"> <a class="nav-link" href="../services.html" >Services</a> </li>
            <li class="nav-item"> <a class="nav-link" href="../contact.html" >Contact</a> </li>
            <button class="register-btn"><a href="#" class="register-link" >Register now</a></button>
            
          </ul>
        </div>
      </div>
    </nav>
    
    `;
}

// Attach the navbar HTML to the 'navbar' element in the document
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = generateNavbar();
    }
});

