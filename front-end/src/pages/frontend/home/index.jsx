import ProductService from "../../../service/ProductService";
import Product from "../product";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { urlImage, urlImg } from "./../../../config";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Height } from "@mui/icons-material";
import { FaCartPlus, FaEye } from "react-icons/fa";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);
  // const [image, setImage] = useState(null);
  const [load, setLoad] = useState(Date.now());
  //call API into brandservice
  useEffect(() => {
    (async () => {
      const result = await ProductService.getList();
      // result la variable ,brands is name table
      setProducts(result.data.products);
    })();
  }, [load]);

  return (
    <div className="content">
      <h1></h1>
      
      {  products.map(products => {
          if (products.status !== 0) (
            
              <Card
                sx={{ maxWidth: 345 }}
                style={{ background: "#15e8dd", margin: 10 }}
                key={products.id}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <img
                  src={urlImage + "/product/" + products.img}
                  className="img-fluid"
                  alt="ảnh sản phẩm"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {products.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {products.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {products.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <FaCartPlus style={{ marginRight: 5 }} />
                    Mua
                  </Button>
                  <Button size="small" >
                    <FaEye style={{ marginRight: 5 }} />
                    Xem
                  </Button>
                </CardActions>
              </Card>
            );
          }
        )}
    </div>
  );
};

export default HomePage;
