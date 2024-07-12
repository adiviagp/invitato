import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, VStack, Text } from "@chakra-ui/react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
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
      <Button onClick={toggleSidebar}>Menu</Button>
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
                backgroundColor: "white",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
                padding: "20px",
                overflowY: "auto",
              }}
            >
              <VStack spacing="4" align="stretch">
                <Text fontSize="xl">Menu</Text>
                <Button onClick={toggleSidebar}>Close</Button>
                <Text>Link 1</Text>
                <Text>Link 2</Text>
                <Text>Link 3</Text>
                <Text>Link 4</Text>
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
