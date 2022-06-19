import { MdOutlineShoppingCart } from "react-icons/md";
import SearchBar from "../components/SearchBar";
import '../style.css'
const NavigationBar = () => {
    return (
        <div className="flex flex-row justify-between items-center pb-4">
          <img
            src="https://via.placeholder.com/300/09f/fff.png"
            className="aspect-video h-12"
            alt="name"
          />
          <div className="flex justify-around items-center basis-3/5">
            <p>Main</p>
            <p>Blog</p>
            <p>Shop</p>
            <p>Who we are</p>
            <p> Contact Us</p>
          </div>
          <div className="flex justify-center items-center gap-1 w-fit bg-black text-white p-6">
            <i className="fa badge fa-lg" value={5}></i>
            <MdOutlineShoppingCart className="text-lg"/>
            <p>Basket</p>
          </div>
        </div>
      );
}

export default NavigationBar;