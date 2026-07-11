import { MapPin } from "lucide-react";
import appConfig from "../config/appConfig";

function LocationCard() {
  return (
    <div className="mx-5 mt-5 bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">

      <div className="bg-green-100 p-3 rounded-full">
        <MapPin className="text-green-700" size={22} />
      </div>

      <div>
        <p className="text-sm text-gray-500">
          Delivering to
        </p>

        <h2 className="font-semibold text-lg">
          {appConfig.location}
        </h2>
      </div>

    </div>
  );
}

export default LocationCard;