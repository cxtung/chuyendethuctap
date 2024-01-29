import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Height } from "@mui/icons-material";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { urlImage } from "../../../config";

export default function Product({tenProduct,giaProduct,mota,image}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ background: "#15e8dd", margin: 10 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <img
        src={urlImage+'/product/'+image}
        className="img-fluid"
        alt="ảnh sản phẩm"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {tenProduct}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {mota}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {giaProduct}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <FaCartPlus style={{ marginRight: 5 }} />
          Mua
        </Button>
        <Button size="small">
          <FaEye style={{ marginRight: 5 }} />
          Xem
        </Button>
      </CardActions>
    </Card>
  );
}
