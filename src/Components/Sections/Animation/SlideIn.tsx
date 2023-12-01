import React, { ReactNode } from "react";

import { Container, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface AnimationProps {
    children: ReactNode;
}

export default function SlideInAniamtion(props: AnimationProps) {
    const animationVariants = {
        hidden: { opacity: 0, y: 300 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 10, stiffness: 100 } },
    };
    return (
        <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
            <ChakraBox
                initial="hidden"
                animate="visible"
                variants={animationVariants}
            >
                {props.children}
            </ChakraBox>
        </Container>
    )
}