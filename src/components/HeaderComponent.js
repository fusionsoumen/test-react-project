function HeaderComponent(){
    return(
        <nav className="navbar navbar-expand-lg fixed-top sticky" id="navbar">
            <div className="container">
                <a href="index.html" className="navbar-brand">
                    <img src="images/logo-sm.png" className="logo-sm" alt="" height="24" />
                    <img src="images/logo-light.png" className="logo-light" alt="" height="16" />
                    <img src="images/logo-dark.png" className="logo-dark" alt="" height="16" />
                </a>
                <a href="javascript:void(0)" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"><i data-feather="menu"></i></span>
                </a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto navbar-center mt-lg-0 mt-2">
                        <li className="nav-item">
                            <a className="nav-link active" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="services.html">Services</a>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link" href="resume.html">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="projects.html">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="blogs.html">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <a href="#" className="btn btn-sm nav-btn text-primary mb-4 mb-lg-0">Hire Me! <i className="icon-xxs ms-1" data-feather="chevrons-right"></i></a>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;