import { useState } from "react";
import { Container, Heading, VStack, Select, Button, useToast, useColorModeValue } from "@chakra-ui/react";

const DeletePost = () => {
  const [selectedPost, setSelectedPost] = useState("");
  const toast = useToast();
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  const handleDelete = () => {
    if (selectedPost) {
      // Here you would typically send a request to the server to delete the post
      console.log("Deleting Post:", selectedPost);
      toast({
        title: "Post deleted.",
        description: "The selected blog post has been deleted.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setSelectedPost("");
    } else {
      toast({
        title: "Error.",
        description: "Please select a post to delete.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg={bg} color={color}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Delete Post</Heading>
        <Select placeholder="Select post to delete" value={selectedPost} onChange={(e) => setSelectedPost(e.target.value)}>
          {/* Options should be dynamically generated based on available posts */}
          <option value="post1">Post 1</option>
          <option value="post2">Post 2</option>
          <option value="post3">Post 3</option>
        </Select>
        <Button colorScheme="red" size="md" onClick={handleDelete}>Delete</Button>
      </VStack>
    </Container>
  );
};

export default DeletePost;