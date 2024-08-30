import {LoaderCircle} from "lucide-react";

export const Spinner = ({ size = 18 }: { size?: number }) => {
  return (
	  <LoaderCircle className="text-[#4B69FF] animate-spin" size={size} />
  );
};
