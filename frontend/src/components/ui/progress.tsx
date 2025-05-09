import { Root, Indicator } from "@radix-ui/react-progress";
import { colorBackground } from "@/lib/funtions";

function Progress({ value }: { value: number }) {
  return (
    <Root className={`relative h-2 w-full overflow-hidden rounded-full shadow ${colorBackground(value)}`}>
      <Indicator
        className={`text-black h-full w-full transition-all duration-700 ease-in-out ${colorBackground(value, 'dark')}`}
        style={{ width: `${value}%` }}
      />
    </Root>
  );
}

export { Progress }
