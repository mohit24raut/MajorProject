import "./RHomePage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function RetailerHomePage() {

    return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-10 mt-1">
                        <div id="carouselExample" class="carousel slide">
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://cdn.zeebiz.com/sites/default/files/2018/11/04/58525-oil-reuters1.jpg" className="d-block w-100" style={{ height: "75vh", objectFit: "fill" }} alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.power-eng.com/wp-content/uploads/2019/12/CameronLNG.png " className="d-block w-100" style={{ height: "75vh", objectFit: "fill" }} alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://kiakiagas.com/sites/default/files/styles/large/public/photos/blog/1_9.jpg?itok=DDjjfUVb" className="d-block w-100" style={{ height: "75vh", objectFit: "fill" }} alt="..."/>
                            </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <p id="h2feat">Services</p>
                    </div>
                </div>

                
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-12">
                        <div className="row justify-content-center">
                            <div className="col-sm-6 col-md-4">
                                <Card style={{ width: "16rem" }}>
                                <img
                                    src="/AddProducts.jpeg"
                                    className="card-img-top imgCard"
                                    width={200} // Adjust the value to change the width
                                />
                                <Card.Body>
                                    <Card.Title>Add Products</Card.Title>
                                    <Button variant="primary">
                                    Click Here
                                    </Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <Card style={{ width: "16rem" }}>
                                <img
                                    src="/seed2.jpg"
                                    
                                    className="card-img-top imgCard"
                                    width={200} // Adjust the value to change the width
                                />
                                <Card.Body>
                                    <Card.Title>View All Products</Card.Title>
                                    <Button variant="primary" >
                                    Click Here
                                    </Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <Card style={{ width: "16rem" }}>
                                <img
                                    src="/seed3.jpg"
                                    
                                    className="card-img-top imgCard"
                                    width={200} // Adjust the value to change the width
                                />
                                <Card.Body>
                                    <Card.Title>Total Sale</Card.Title>
                                    <Button variant="primary" >
                                    Click Here
                                    </Button>
                                </Card.Body>
                                </Card>
                            </div>
                        
                        </div>


                        <div className="row justify-content-center">
                            <div className="col-sm-6 col-md-4">
                                <Card style={{ width: "16rem" }}>
                                <img
                                    src="/AddProducts.jpeg"
                                    className="card-img-top imgCard"
                                    width={200} // Adjust the value to change the width
                                />
                                <Card.Body>
                                    <Card.Title>Check Order</Card.Title>
                                    <Button variant="primary">
                                    Click Here
                                    </Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <Card style={{ width: "16rem" }}>
                                <img
                                    src="/seed2.jpg"
                                    
                                    className="card-img-top imgCard"
                                    width={200} // Adjust the value to change the width
                                />
                                <Card.Body>
                                    <Card.Title>Consumer</Card.Title>
                                    <Button variant="primary" >
                                    Click Here
                                    </Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <Card style={{ width: "16rem" }}>
                                <img
                                    src="/seed3.jpg"
                                    
                                    className="card-img-top imgCard"
                                    width={200} // Adjust the value to change the width
                                />
                                <Card.Body>
                                    <Card.Title>Stock</Card.Title>
                                    <Button variant="primary" >
                                    Click Here
                                    </Button>
                                </Card.Body>
                                </Card>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}