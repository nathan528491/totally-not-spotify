import {Box, Flex, Text} from "@chakra-ui/layout"
import {Image} from "@chakra-ui/react"

export default function GradientLayout({
    color,
    children,
    image,
    subtitle,
    title,
    description,
    roundImage,
}) {
    return (
        <Box
            height="100%"
            overflowY="auto"
            bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
        >
            <Flex
                bg={`${color}.600`}
                padding="0 32px 24px"
                align="end"
                height="30vh"
                maxHeight="500px"
                minHeight="340px"
            >
                <Box marginRight="24px">
                    <Image
                        boxSize="232px"
                        minWidth="232"
                        boxShadow="2xl"
                        src={image}
                        borderRadius={roundImage ? '100%' : '3px'}
                    />
                </Box>
                <Box color="white">
                    <Text
                        fontSize="12px"
                        fontWeight="bold"
                        casing="uppercase"
                        marginTop="4px"
                    >
                        {subtitle}
                    </Text>
                    <Text
                        letterSpacing="-2px"
                        fontSize="96px"
                        lineHeight="96px"
                        fontWeight="bold"
                        paddingY="8px"
                    >{title}</Text>
                    <Text fontSize="sm" marginTop="8px">{description}</Text>
                </Box>

            </Flex>
            <Box paddingBottom="50px">
                {children}
            </Box>
        </Box>
    )
}
