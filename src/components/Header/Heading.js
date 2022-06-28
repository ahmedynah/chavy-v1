import PagesBreadCrumb from "../breadCrumb/BreadCrumb";
import NavBar from "../navigation/NavBar";

const Heading = () => {
  const titles = [
    { title: "الرئيسية", link: "#" },
    { title: "المدونة", link: "#" },
    { title: "تسوق", link: "#" },
    { title: "من نحن", link: "#" },
    { title: "إتصل بنا", link: "#" },
  ];
  return (
    <>
      <div className="container mx-auto">
        <NavBar/>
        <PagesBreadCrumb data={titles} />
      </div>
    </>
  );
};

export default Heading;
