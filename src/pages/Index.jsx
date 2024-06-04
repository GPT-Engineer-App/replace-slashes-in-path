import { Container, Text, VStack, IconButton, Image } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <IconButton aria-label="Launch Rocket" icon={<FaRocket />} size="lg" />
        <Image src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2h8ZW58MHx8fHwxNzE3NDgzMTA1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Rocket Launch" />
      </VStack>
    </Container>
  );
};

export default Index;
