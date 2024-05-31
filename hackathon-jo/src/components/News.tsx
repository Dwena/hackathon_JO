import { useState, useEffect } from 'react';
import { Box, Heading, Text, Link, Button, Flex, useColorModeValue, Image, VStack, Center } from '@chakra-ui/react';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: { name: string };
}

const News = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=Jeux%20Olympiques&language=fr&page=${page}&pageSize=10&apiKey=e3e00b9c784b4b0fb5800ced7898fe28`
      );
      const data = await response.json();
      setArticles(data.articles);
      setTotalResults(data.totalResults);
    };

    fetchArticles();
  }, [page]);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <VStack spacing={8} align="stretch">
      <Heading as="h2" size="xl" textAlign="center" my={8}>
        Actualités Olympiques
      </Heading>
      {articles && articles.map((article, index) => (
        <Center key={index}>
          <Box
            w={{ base: '90%', md: '80%', lg: '60%' }}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            bg={useColorModeValue('white', 'gray.700')}
          >
            {article.urlToImage && (
              <Image borderRadius="md" src={article.urlToImage} alt={article.title} mb={4} />
            )}
            <Link href={article.url} isExternal _hover={{ textDecoration: 'none' }}>
              <Heading as="h3" size="lg" mb={2} color={useColorModeValue('blue.600', 'blue.300')}>
                {article.title}
              </Heading>
            </Link>
            <Text mb={4}>{article.description}</Text>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              {new Date(article.publishedAt).toLocaleDateString()} - {article.source.name}
            </Text>
          </Box>
        </Center>
      ))}
      <Flex justifyContent="space-between" w="100%" px={4}>
        <Button
          onClick={() => setPage(page - 1)}
          isDisabled={page === 1}
        >
          Précédent
        </Button>
        <Text>
          Page {page} sur {totalPages}
        </Text>
        <Button
          onClick={() => setPage(page + 1)}
          isDisabled={page === totalPages}
        >
          Suivant
        </Button>
      </Flex>
    </VStack>
  );
};

export default News;
