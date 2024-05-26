import { useState } from "react";
import { Container, Heading, VStack, Input, Textarea, Button, useToast, useColorModeValue } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      // Here you would typically send the data to a server
      console.log("New Post:", { title, content });
      toast({
        title: "Post created.",
        description: "Your new blog post has been created.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTitle("");
      setContent("");
    } else {
      toast({
        title: "Error.",
        description: "Title and content are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg={bg} color={color}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isRequired
        />
        <Button type="submit" colorScheme="teal" size="md">Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;