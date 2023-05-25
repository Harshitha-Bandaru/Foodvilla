import { useEffect, useState } from "react";

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    console.log("isOnline Useeffect");
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  // console.log("isOnline render" + isOnline);
  return isOnline;
};

export default useIsOnline;
