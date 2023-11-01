import {
  Button,
  CircularProgress,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImage from "../services/image-urls";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <CircularProgress isIndeterminate color="green.300" />;
  return (
    <>
    <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit='cover'
              src={getCroppedImage(genre.image_background)}
              overflow={"hidden"}
            ></Image>
            <Button
              whiteSpace={"normal"}
              textAlign="left"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="normal"
              fontSize="lg"
              onClick={() => onSelectGenre(genre)}
              alignContent={"space-between"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
