import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ item }) {
  return (
    <Card sx={{ maxWidth: 345 }} className="item-card">
      <CardActionArea>
        <CardMedia component="img" height="140" image={item.imgUrl_div5} />
        <CardContent id="trend_font">
          <Typography gutterBottom variant="h5" component="div">
            {item.name_div5}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.desc_div5}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia component="img" height="140" image={item.imgUrl_div6} />
        <CardContent id="collection_font">
          <Typography gutterBottom variant="h5" component="div">
            {item.name_div6}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.desc_div6}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea id="sponsor_card">
        <CardMedia component="img" height="140" image={item.imgUrl_sponsor} />
        <CardContent id="sponsor_font">
          <Typography gutterBottom variant="h5" component="div">
            {item.name_sponsor}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
