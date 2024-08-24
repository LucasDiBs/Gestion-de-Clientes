import React from 'react'
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {
    return (
        <div>

            <header>
                

                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand">Navbar</a>

                        <Link to='/clientes' className="btn btn-outline-success me-2">Clientes</Link> 
                        <Link to='/add-cliente' className="btn btn-outline-success me-2">Agregar Cliente</Link>                                        
                    
                        

                    </div>
                </nav>

            </header>

        </div>
    )
}
export default HeaderComponent;
