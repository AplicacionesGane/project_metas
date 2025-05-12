import { Root, Indicator } from "@radix-ui/react-progress";
import { colorBackground } from "@/lib/funtions";
import { useEffect, useState } from "react";

function Progress({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    setDisplayValue(0);
    const timeout = setTimeout(() => {
      setDisplayValue(value);
    }, 200);

    return () => clearTimeout(timeout);
  }, [value]);
  return (
    <Root className={`relative h-2 w-full overflow-hidden rounded-full shadow ${colorBackground(displayValue)}`}>
      <Indicator
        className={`text-black h-full w-full transition-all duration-1000 ease-in-out ${colorBackground(displayValue, 'dark')}`}
        style={{ width: `${displayValue}%` }}
      />
    </Root>
  );
}

export { Progress }
