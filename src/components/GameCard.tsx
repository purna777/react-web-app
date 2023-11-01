
import { Games } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-urls";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={getCroppedImage(game.background_image)}></Image>
      <CardBody>
       
        <HStack justifyContent={"space-between"} marginBottom={3}>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
        <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
