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
      <div className="flex-col justify-start py-6">
        <NavigationBar />
        <PagesBreadCrumb data={titles} />
      </div>
    </>
  );
};

export default Heading;
