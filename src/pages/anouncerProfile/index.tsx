import Header from "../../components/navBar";
import { Footer } from "../../components/footer";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ContainerProfile, UlCardCars } from "./style";
import CarCard from "../../components/cards/car/car";
import { useContext, useEffect, useState } from "react";
import { contextHomeProvider } from "../../context/homePage.context";
import imgPerfil from "../../assets/ImgPerfil.svg";
import { NumberPage } from "./style";

export const AnnouncerProfileCard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { carAd, GetCardsAd } = useContext(contextHomeProvider);

  const pageLimit = 12;
  const pages = Math.ceil(carAd.length / pageLimit) - 1;
  const startPageAt = currentPage * pageLimit;
  const endPageAt = startPageAt + pageLimit;

  useEffect(() => {
    GetCardsAd();
  }, []);

  const pageCard = () => {
    const cards = carAd.slice(startPageAt, endPageAt);

    return cards;
  };

  const cars = [
    {
      id: "f9dd7a3c-dcaa-4f5c-88db-ba2d2843d074",
      brand: "test",
      model: "test",
      year: "test",
      fuel: "test",
      km: "10",
      color: "test",
      price: "10",
      fipe: "10",
      description: "test",
      is_good_price: true,
      published: true,
      cover_image:
        "https://assets-cdn.static-gm.com/Assets/Inventory/Images/e4c6ba57-050a-4aad-8cb7-69b9ad27f0f9/f2504fc6-f517-4ee4-95c8-dfc702a559d7/9BGEB69H0NG203812_637896070136411172.jpg",
    },
    {
      id: "3e5fe6bf-acbb-4baf-bb88-3cb650e88892",
      brand: "test",
      model: "test",
      year: "test",
      fuel: "test",
      km: "10",
      color: "test",
      price: "10",
      fipe: "10",
      description: "test",
      is_good_price: true,
      published: true,
      cover_image:
        "https://assets-cdn.static-gm.com/Assets/Inventory/Images/e4c6ba57-050a-4aad-8cb7-69b9ad27f0f9/f2504fc6-f517-4ee4-95c8-dfc702a559d7/9BGEB69H0NG203812_637896070136411172.jpg",
    },
    {
      id: "be7b534d-4447-4180-a21f-68efc2983e70",
      brand: "test",
      model: "test",
      year: "test",
      fuel: "test",
      km: "10",
      color: "test",
      price: "10",
      fipe: "10",
      description: "test",
      is_good_price: true,
      published: true,
      cover_image:
        "https://assets-cdn.static-gm.com/Assets/Inventory/Images/e4c6ba57-050a-4aad-8cb7-69b9ad27f0f9/f2504fc6-f517-4ee4-95c8-dfc702a559d7/9BGEB69H0NG203812_637896070136411172.jpg",
    },
    {
      id: "bb0aa2fd-8efe-4d49-a583-fcdbb8387107",
      brand: "test",
      model: "test",
      year: "test",
      fuel: "test",
      km: "10",
      color: "test",
      price: "95",
      fipe: "100",
      description: "test",
      is_good_price: true,
      published: true,
      cover_image:
        "https://assets-cdn.static-gm.com/Assets/Inventory/Images/e4c6ba57-050a-4aad-8cb7-69b9ad27f0f9/f2504fc6-f517-4ee4-95c8-dfc702a559d7/9BGEB69H0NG203812_637896070136411172.jpg",
    },
  ];

  return (
    <ContainerProfile>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        maxWidth="1450px"
      >
        <Header />
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            bg={"grey.10"}
            w={"80%"}
            borderRadius={4}
            flexDirection={"column"}
            p={{ base: "30px 28px", xl: "37px 44px" }}
            gap={{ base: "25px", xl: "30px" }}
            marginTop={{ base: "65px", xl: "75px" }}
          >
            <Flex flexDirection={"column"} w={"104px"} h={"104px"}>
              <Image src={imgPerfil} alt="Foto do usuário" />
            </Flex>
            <Text as={"h2"} fontWeight={600} fontSize={"20px"}>
              Samuel Leão
            </Text>
            <Text
              as={"p"}
              fontSize={"16px"}
              fontWeight={400}
              lineHeight={"28px"}
              color={"grey.2"}
              fontFamily={"inter"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </Text>
          </Flex>
          <UlCardCars>
            {cars.map((card) => {
              return (
                <Box margin="0px">
                  <CarCard
                    description={card.description}
                    image={card.cover_image}
                    km={card.km}
                    price={card.price}
                    nameCar={card.model}
                    brandCar={card.brand}
                    year={card.year}
                    id={card.id}
                    key={card.id}
                    userName="usuário"
                  />
                </Box>
              );
            })}
          </UlCardCars>
        </Box>
        <Box>
          <NumberPage>
            <span>{currentPage}</span>
            <span>de {pages}</span>
          </NumberPage>
          <Box display="flex" justifyContent="center">
            <Button
              bg={"grey.10"}
              color={"brand.2"}
              fontWeight="600"
              fontSize="1.10rem"
              mb="30px"
              hidden={currentPage == 1 ? true : false}
              onClick={() =>
                currentPage > 0
                  ? setCurrentPage(currentPage - 1)
                  : setCurrentPage(0)
              }
            >
              &lt; Anterior
            </Button>
            <Button
              bg={"grey.10"}
              color={"brand.2"}
              fontWeight="600"
              fontSize="1.10rem"
              mb="30px"
              hidden={pages == currentPage ? true : false}
              onClick={() => {
                currentPage < pages
                  ? setCurrentPage(currentPage + 1)
                  : setCurrentPage(pages);
              }}
            >
              Seguinte &gt;
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </ContainerProfile>
  );
};
