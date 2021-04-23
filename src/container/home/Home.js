import './Home.scss'

export function Home(){

    return(
        <div className="cntFather">
            <div className="cntHeader">
                <div className="boxHeader">
                    <div>
                        <p>Header</p>
                    </div>
                </div>
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand">Navbar</a>
                        <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
            <div className="cntMain">
                <div className="boxMain">
                    <div className ="main">
                        <p>Main</p> 
                        <div className="article"></div>
                        <div className="aside"></div>
                    </div>
                </div>  
            </div>
            <div className="cntFooter">
                <div className="boxFooter">
                    <div>
                        <p>Footer</p>  
                    </div>
                </div>
            </div>
        </div>
    )
}