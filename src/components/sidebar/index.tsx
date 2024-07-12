import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, VStack, Text, Heading, Box, IconButton } from "@chakra-ui/react";
import BurgerMenu from "@/assets/svg/burgerMenu";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<any>(null); // Explicit type assertion

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeSidebar);
    } else {
      document.removeEventListener("mousedown", closeSidebar);
    }
    return () => {
      document.removeEventListener("mousedown", closeSidebar);
    };
  }, [isOpen]);

  return (
    <>
      <IconButton
        onClick={toggleSidebar}
        borderRadius="50%"
        backgroundColor="#9a7a5e"
        marginLeft="10px"
        icon={isOpen ? <FaTimes color="#FFF" /> : <BurgerMenu />}
        aria-label={isOpen ? "Menu Open" : "Menu Close"}
      />
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%", width: 0 }}
              animate={{ x: 0, width: 500 }}
              exit={{ x: "100%", width: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                maxWidth: 500,
                backgroundColor: "#F9F7F3",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
                padding: "20px",
                overflowY: "auto",
              }}
            >
              <VStack spacing="4" align="flex-end" padding="24px">
                <Heading>#TImetoshaRE</Heading>
                <Box width="100%" textAlign="right" borderBottom="1px solid #000">
                  <Text>BRIDE & GROOM</Text>
                </Box>
                <Box width="100%" textAlign="right" borderBottom="1px solid #000">
                  <Text>LIVE STREAMING</Text>
                </Box>
                <Box width="100%" textAlign="right" borderBottom="1px solid #000">
                  <Text>WEDDING GIFT</Text>
                </Box>

                {/* Add more links or content as needed */}
              </VStack>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "black",
                zIndex: 999,
              }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
