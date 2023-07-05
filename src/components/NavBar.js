import React,{useState} from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    const [cat,setCat]=useState('General')
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">SNewz</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" onClick={()=>setCat('General')} to="/">Home</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {cat}
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" onClick={()=>setCat('General')} to="/">General</Link></li>
            <li><Link class="dropdown-item" onClick={()=>setCat('Business')}to="/business">Business</Link></li>
            <li><Link class="dropdown-item" onClick={()=>setCat('Sports')} to="/sports">Sports</Link></li>
            <li><Link class="dropdown-item" onClick={()=>setCat('Entertainment')} to="/entertainment">Entertainment</Link></li>
            <li><Link class="dropdown-item" onClick={()=>setCat('Health')} to="/health">Health</Link></li>
            <li><Link class="dropdown-item" onClick={()=>setCat('Science')} to="/science">Science</Link></li>
            <li><Link class="dropdown-item" onClick={()=>setCat('Technology')} to="/technology">Technology</Link></li>
          </ul>
        </li>
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
        </div>
    )

}

export default NavBar