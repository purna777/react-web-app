import { Flex, Grid, GridItem, Box, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import { GamePlatform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genres | null;
  platform: GamePlatform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >         
      <GridItem area={"nav"}>
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
        <GameHeading gameQuery={gameQuery}/>
        <Flex marginBottom={5}>
          <Box marginRight={3}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            ></PlatformSelector>
          </Box>
          <SortSelector
            selectedSortLabel={gameQuery.sortOrder}
            onselectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          ></SortSelector>
        </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
