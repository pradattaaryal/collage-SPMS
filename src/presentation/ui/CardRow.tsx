import { CardData, CURRENT_BASE_URL_image } from "../../constants/constants";
import p2 from "../assets//image/p2.png";
interface CardRowProps {
  data: CardData[]; // Explicitly type the data prop
}
const CardRow: React.FC<CardRowProps> = ({ data }) => {
  return (
    <div className="flex justify-cente   w-full flex-col gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="  flex justify-between items-center w-full  gap-14      shadow-md  rounded-lg    flex-shrink-0"
        >
          <div className=" w-[250px] md:h-[180px] h-[100px]">
            <img
              /*src={`https://th.bing.com/th/id/OIP.mnMdlFOgPl2jNXBDQHKCWgHaE8?rs=1&pid=ImgDetMain`}*/
              src={p2}
              alt={item.title}
              className=" w-full h-full rounded-xl object-cover"
            />
          </div>

          <div className="p-4 w-full flex justify-evenly flex-col ">
            <h2 className=" sm:text-base md:text-lg lg:text-custom-28 font-boldd">
              {item.title}
            </h2>
            <p className=" text-custom-18 font-mediumm text-gray-700">
              <strong>Skills:</strong> {item.skills}
            </p>
            <p className="text-custom-18 font-mediumm text-gray-700">
              <strong>Year:</strong> {item.year}
            </p>
            <p className="text-custom-18  font-mediumm  text-gray-700">
              <strong>Club:</strong> {item.club}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardRow;
