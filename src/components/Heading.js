import NavigationBar from "./NavigationBar";
import PagesBreadCrumb from "./PagesBreadCrumb";

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
        <NavigationBar />
        <PagesBreadCrumb data={titles} />
      </div>
    </>
  );
};

export default Heading;
