import {
  Card,
  CardBody,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;

export const SideBarSkeleton = () => {
  return (
    <List>
    <Skeleton>
      <ListItem>
        <SkeletonText></SkeletonText>
      </ListItem>
    </Skeleton>
    </List>
  );
};
