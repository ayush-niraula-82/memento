import axios from "axios";
import logo from "../../assets/logo.png";

const Card = ({ response }) => {
  const deleteMemento = async (id) => {
    try {
      await axios.get(`http://localhost:4001/api/delete/${id}`);
      console.log("deleted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out font-sans">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/027/254/720/small_2x/colorful-ink-splash-on-transparent-background-png.png"
        alt="Image"
        className="w-full h-56 object-cover rounded-t-2xl"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-gray-500 ">
            <span className="ml-2 inline-block rounded-full bg-gray-300 px-3 py-1 text-gray-700 text-xs font-medium">
              {response?.mood}
            </span>
          </span>
          <div className="text-sm text-gray-500">
            {response?.date?.split("T")[0]}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {response?.title}
        </h3>
        <p className="text-sm text-gray-600 mb-6">{response?.description}</p>

        <div className="flex items-center space-x-4 mb-4">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-base font-semibold text-gray-700">
              {response?.location}
            </h4>
            <p className="text-sm text-gray-500">{response?.category}</p>
          </div>
        </div>

        <div className="flex justify-between mt-4 space-x-4">
          <button className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 bg-gray-100 px-4 py-2 rounded-lg transition duration-200 ease-in-out transform hover:scale-105">
            ✏️ Update
          </button>
          <button
            className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 bg-gray-100 px-4 py-2 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
            onClick={() => deleteMemento(response?._id)}
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
