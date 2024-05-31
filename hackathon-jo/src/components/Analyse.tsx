import {
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

const questionsAndAnswers = [
    {
      question: "Les JO de Londres de 2012 ont été les 1ers JO durant lesquels tous les pays participants ont envoyé des athlètes de sexe féminin ?",
      answer: "Oui, les JO de Londres de 2012 ont été les premiers JO durant lesquels tous les pays participants ont envoyé des athlètes de sexe féminin."
    },
    {
      question: "Les Jeux de 2016, à Rio, ont marqué la première manifestation des JO en Amérique du Sud?",
      answer: "Oui, les Jeux de 2016 à Rio ont été la première manifestation des JO en Amérique du Sud."
    },
    {
      question: "Combien de médailles d'or Johnny Weissmuller a-t-il remporté en natation dans les années 1920 ?",
      answer: "Johnny Weissmuller a remporté 5 médailles d'or en natation dans les années 1920."
    },
    {
      question: "Les JO de Londres de 2012 ont été les 1ers JO durant lesquels tous les pays participants ont envoyé des athlètes de sexe féminin ?",
      answer: "Oui, les JO de Londres de 2012 ont été les premiers JO durant lesquels tous les pays participants ont envoyé des athlètes de sexe féminin."
    },
    {
      question: "Les Jeux de 2016, à Rio, ont marqué la première manifestation des JO en Amérique du Sud?",
      answer: "Oui, les Jeux de 2016 à Rio ont été la première manifestation des JO en Amérique du Sud."
    },
    {
      question: "Combien de médailles d'or Johnny Weissmuller a-t-il remporté en natation dans les années 1920 ?",
      answer: "Johnny Weissmuller a remporté 5 médailles d'or en natation dans les années 1920."
    }
  ];

const plotFiles = [
  '/src/assets/plot_images/plot_0_20.png',
  '/src/assets/plot_images/plot_0_21.png',
  '/src/assets/plot_images/plot_0_22.png',
  '/src/assets/plot_images/plot_1_10.png',
  '/src/assets/plot_images/plot_2_7.png',
  '/src/assets/plot_2_8.png',
  '/src/assets/plot_images/plot_2_9.png',
  '/src/assets/plot_images/plot_2_17.png',
  '/src/assets/plot_images/plot_2_19.png'
];

const Analyse = () => {
  return (
    <Box w="100%" mx="auto" p={6} mt={8}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Analyse des Données
      </Heading>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h3" size="lg" mb={4} textAlign="center">
            Questions et Réponses
          </Heading>
          {questionsAndAnswers.map((qa, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={useColorModeValue('white', 'gray.700')} mb={6}>
              <Text fontSize="xl" fontWeight="bold">{qa.question}</Text>
              <Text mt={2}>{qa.answer}</Text>
            </Box>
          ))}
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={4} textAlign="center">
            Analyses du Modèle
          </Heading>
          {plotFiles.map((plot, index) => (
            <Image key={index} src={plot} alt={`Graphique ${index + 1}`} mb={6} />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Analyse;
