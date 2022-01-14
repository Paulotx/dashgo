import Link from 'next/link';

import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function ListUsers() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex my="6" maxWidth={1480} mx="auto" px={{ base: '4', lg: '6' }}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                <Text lineHeight="0" marginBottom="-2px">
                  Criar usuário
                </Text>
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={{ base: '4', lg: '6' }} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                {isWideVersion && <Th width="8" />}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={{ base: '4', lg: '6' }}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Paulo André</Text>
                    <Text fontSize="sm" color="gray.300">
                      pauloandre@stagerun.com.br
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de janeiro de 2022</Td>}
                {isWideVersion && (
                  <Td px={{ base: '4', lg: '6' }}>
                    <Button as="a" size="sm" fontSize="sm" colorScheme="purple">
                      <Icon
                        as={RiPencilLine}
                        fontSize="16"
                        mr={isWideVersion ? '2' : '0'}
                      />
                      {isWideVersion && 'Editar'}
                    </Button>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={{ base: '4', lg: '6' }}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Paulo André</Text>
                    <Text fontSize="sm" color="gray.300">
                      pauloandre@stagerun.com.br
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de janeiro de 2022</Td>}
                {isWideVersion && (
                  <Td px={{ base: '4', lg: '6' }}>
                    <Button as="a" size="sm" fontSize="sm" colorScheme="purple">
                      <Icon
                        as={RiPencilLine}
                        fontSize="16"
                        mr={isWideVersion ? '2' : '0'}
                      />
                      {isWideVersion && 'Editar'}
                    </Button>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={{ base: '4', lg: '6' }}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Paulo André</Text>
                    <Text fontSize="sm" color="gray.300">
                      pauloandre@stagerun.com.br
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>08 de janeiro de 2022</Td>}
                {isWideVersion && (
                  <Td px={{ base: '4', lg: '6' }}>
                    <Button as="a" size="sm" fontSize="sm" colorScheme="purple">
                      <Icon
                        as={RiPencilLine}
                        fontSize="16"
                        mr={isWideVersion ? '2' : '0'}
                      />
                      {isWideVersion && 'Editar'}
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
