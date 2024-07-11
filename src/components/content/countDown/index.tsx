import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import WaveSvg from "@/assets/svg/wave";

const CountDown = (): JSX.Element => {
  const [targetDate] = useState("11-11-2024");
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const initialTimeLeft = calculateTimeLeft();

  const [days, setDays] = useState(initialTimeLeft.days);
  const [hours, setHours] = useState(initialTimeLeft.hours);
  const [minutes, setMinutes] = useState(initialTimeLeft.minutes);
  const [seconds, setSeconds] = useState(initialTimeLeft.seconds);

  useEffect(() => {
    const timerId = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setDays(timeLeft.days);
      setHours(timeLeft.hours);
      setMinutes(timeLeft.minutes);
      setSeconds(timeLeft.seconds);
    }, 1000);

    return () => clearInterval(timerId);
  }, [targetDate]);

  return (
    <Box padding="3rem" textAlign="center">
      <Text marginBottom="0.75rem">It will be a joy for us if you are still willing to give your blessing from afar. Thank you for all the words, prayers, and attention given.</Text>
      <Box display="flex" justifyContent="center" alignContent="center" gap="2">
        <Box backgroundColor="#f9f7f4" border="1px solid #000" padding="8px 4px" width="60px" height="65px">
          <Heading fontWeight="600" fontSize="1.5rem">
            {days}
          </Heading>
          <Text fontSize="0.75rem">Days</Text>
        </Box>
        <Box backgroundColor="#f9f7f4" border="1px solid #000" padding="8px 4px" width="60px" height="65px">
          <Heading fontWeight="600" fontSize="1.5rem">
            {hours}
          </Heading>
          <Text fontSize="0.75rem">Hours</Text>
        </Box>
        <Box backgroundColor="#f9f7f4" border="1px solid #000" padding="8px 4px" width="60px" height="65px">
          <Heading fontWeight="600" fontSize="1.5rem">
            {minutes}
          </Heading>
          <Text fontSize="0.75rem">Minutes</Text>
        </Box>
        <Box backgroundColor="#f9f7f4" border="1px solid #000" padding="8px 4px" width="60px" height="65px">
          <Heading fontWeight="600" fontSize="1.5rem">
            {seconds}
          </Heading>
          <Text fontSize="0.75rem">Seconds</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CountDown;
