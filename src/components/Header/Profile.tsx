import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Paulo André</Text>
                    <Text color="gray.300" fontSize="small">
                        pauloandre@stagerun.com.br
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Paulo André" src="https://github.com/Paulotx.png" />
        </Flex>
    );
}
