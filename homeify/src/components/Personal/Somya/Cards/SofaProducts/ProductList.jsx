import React from "react";
import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
function ProductList({ products }) {
  return products.map((item) => {
    return (
      <Card
        className="product_card"
        maxW="50vh"
        maxH="80vh"
        key={item.Position}
      >
        <CardBody>
          <Image
            src={item.imgUrl_product_sofas}
            alt="Green double couch with wooden legs"
            // borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.name_sofas}</Heading>
            <Text>{item.desc_sofas}</Text>
            <Text color="blue.600" fontSize="2xl">
              {item.price_sofas}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    );
  });
}
export default ProductList;
