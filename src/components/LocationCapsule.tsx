import { MapPin } from "lucide-react";

const LocationCapsule: React.FC = () => {

  return (
    <div
      className="fixed bottom-4 right-4 bg-inherit text-black dark:text-white px-4 py-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-100 dark:hover:bg-[#333333] z-50 border border-black dark:border-white flex items-center backdrop-blur-sm"
    >
      <MapPin className="w-4 h-4 mr-2" />
      <span className="border-l border-black dark:border-white pl-2 ml-2 w-48 text-center py-1">
          <div className="text-sm">
            based in{" "}
            <span className="text-base">
              <span className="font-bold">Mumbai</span>, India
            </span>
          </div>
      </span>
    </div>
  );
};

export default LocationCapsule;
