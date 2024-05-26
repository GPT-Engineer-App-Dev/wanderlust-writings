import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm [Your Name], and this is my personal blog where I share my thoughts, experiences, and stories. 
          Feel free to explore and connect with me through my posts.
        </Text>
        <Link href="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
      <Button colorScheme="teal" size="md" onClick={() => navigate('/add-post')}>Add New Post</Button>
      </VStack>
    </Container>
  );
};

export default Index;