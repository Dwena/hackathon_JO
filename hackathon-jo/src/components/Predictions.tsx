import React from 'react';
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import {
  Box,
  Heading,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

// Données de prédiction
const predictions = [
  { country: 'États-Unis', points: 100, discipline: 'Athlétisme', flag: 'https://flagcdn.com/us.svg' },
  { country: 'Chine', points: 90, discipline: 'Natation', flag: 'https://flagcdn.com/cn.svg' },
  { country: 'Japon', points: 80, discipline: 'Gymnastique', flag: 'https://flagcdn.com/jp.svg' },
  { country: 'France', points: 85, discipline: 'Cyclisme', flag: 'https://flagcdn.com/fr.svg' },
];

const getMedalEmoji = (points: number) => {
  if (points >= 100) return '🥇';
  if (points >= 90) return '🥈';
  if (points >= 80) return '🥉';
  return '';
};

const Predictions = () => {
  const data = React.useMemo(() => predictions, []);

  const columns = React.useMemo(() => [
    {
      Header: 'Pays',
      accessor: 'country',
      Cell: ({ row }: {row: any}) => (
        <Flex align="center" justify="center">
          <Image src={row.original.flag} alt={`Drapeau de ${row.original.country}`} boxSize="30px" objectFit="contain" mr={2} />
          {row.original.country}
        </Flex>
      ),
    },
    {
      Header: 'Points',
      accessor: 'points',
      isNumeric: true,
    },
    {
      Header: 'Discipline',
      accessor: 'discipline',
    },
    {
      Header: 'Médaille',
      accessor: 'medal',
      Cell: ({ row }:{row: any}) => (
        <Flex justify="center">{getMedalEmoji(row.original.points)}</Flex>
      ),
    },
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <Box
      w="100%"
      mx="auto"
      bg={useColorModeValue('white', 'gray.800')}
      p={6}
      rounded="md"
      shadow="md"
      mt={8}
    >
      <Heading as="h2" size="lg" mb={4} textAlign="center" fontWeight="bold" color={useColorModeValue('gray.700', 'white')}>
        Prédictions de l'IA
      </Heading>
      <Box overflowX="auto">
        <Table {...getTableProps()} variant="striped" colorScheme="teal" size="md" w="100%">
          <Thead bg={useColorModeValue('gray.100', 'gray.700')}>
            {headerGroups.map((headerGroup: any) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                    textAlign="center"
                    fontSize="md"
                    py={4}
                  >
                    {column.render('Header')}
                    <chakra.span pl="4">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row: any) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} height="60px" _hover={{ bg: useColorModeValue('gray.200', 'gray.600') }}>
                  {row.cells.map((cell: any) => (
                    <Td
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}
                      textAlign="center"
                      borderBottom="1px"
                      borderColor={useColorModeValue('gray.200', 'gray.600')}
                      py={4}
                    >
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Predictions;
