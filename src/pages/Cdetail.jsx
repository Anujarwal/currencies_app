import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import { useParams } from "react-router-dom";

const Cdetail = () => {
  const params = useParams();

  //   const data = fetchCoins();

  //     console.log(data);

  console.log(params)

  return (
    <>
      <Typography
        variant="h4"
        id="crypto"
        sx={{ padding: "80px 0px" }}
        align="center"
        margin={10}
      >
        {params.name}
      </Typography>
      <Container>
        <Typography variant="h4" sx={{ margin: "65px 10px" }}>
          {" "}
          <ArrowBackSharpIcon />{" "}
        </Typography>
        <Card>
          <CardContent>
            {/* <CardMedia image={params?.image?.large} sx={{ height: 180 }} /> */}
            <Typography gutterBottom variant="h3" component="div">
              Name :- {params.name}
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              $ {params.price}
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              symbol :- {params?.symbol}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Description :- {params?.description?.en}
            </Typography>
            <CardActions>
              <Button variant="contained" size="small">
                Office Websitte
              </Button>

              <Button variant="contained" size="small">
                Add to Cart
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Cdetail;
