import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Radium from "radium";
// import {  withRouter } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import ar from "react-phone-input-2/lang/ar.json";
import { WooCommerce } from "../../../config/woocommerce-rest-api/woocommerce.config";
import { Link, useNavigate } from "react-router-dom";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ShippingSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "قصير جدًا, يجب أن يزيد عن حرفين")
    .max(50, "طويل جدًا, يجب أن يقل عن 50 حرفًا!")
    .required("حقل مطلوب"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("حقل مطلوب"),
  city: Yup.string()
    .matches(/^(?!المدينة$).*$/, "برجاء اختيار مدينة")
    .required("حقل مطلوب"),
  address: Yup.string().required("حقل مطلوب"),
  paymentMethod: Yup.string().required("حقل مطلوب"),
  email: Yup.string().email("ايميل غير صحيح").required("حقل مطلوب"),

  // email: Yup.string().email('Invalid email').required('Required'),
});
const ShippingInfo = ({ setInfo, history }) => {
  const phone = "phone";
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  useEffect(() => {
    (async function fetchAppData() {
      await WooCommerce.get("data/countries/eg")
        .then((res) => {
          setCities([
            ...res.data.states.map((el) => {
              return {
                name: el.name,
              };
            }),
          ]);
          console.log(cities);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    })();
  }, []);
  return (
    <>
      <h3 className="md:hidden w-full text-[16px] my-5 font-semibold">
        معلومات الشحن
      </h3>
      <Formik
        initialValues={{
          fullName: "",
          phone: "",
          city: "",
          address: "",
          notes: "",
          paymentMethod: "",
          email: "",
        }}
        validationSchema={ShippingSchema}
        onSubmit={(values) => {
          // same shape as initial values
          sessionStorage.setItem("shippingInfo",JSON.stringify(values))
          setInfo(values);
          alert(JSON.stringify(values))
          navigate("/basket/payment");
          // console.log(navigate.toString())
        }}
      >
        {(props) => {
          const generalStyling = (input) =>
            `w-full p-2 h-[48px] ${
              props.errors.input ? " outline-red-500 " : "outline-[#ACCAFB]"
            }   rounded-md  bg-slate-100 focus:bg-white placeholder:text-[14px]`;

          const phoneInputStyle = {
            width: "100%",
            height: "48px",
            outlineColor: props.errors.phone ? " #ef4444 " : "#ACCAFB",
            "--tw-bg-opacity": 1,
            backgroundColor: `rgb(241 245 249 / var(--tw-bg-opacity))`,
            textAlign: "right",
            border: "none",
            ":focus": {
              backgroundColor: "white",
            },
          };
          return (
            <Form className="flex flex-col gap-3 justify-start items-start w-full">
              <Field
                type="text"
                className={generalStyling("fullname")}
                id="fullName"
                name="fullName"
                placeholder="الاسم بالكامل"
              />
              {props.touched.fullName && props.errors.fullName ? (
                <div className="text-red-500 font-bold text-right">
                  {console.log(props.errors, props.touched, props.values)}
                  {props.errors.fullName}
                </div>
              ) : null}
              <Field
                className={generalStyling("email")}
                name="email"
                type="email"
                placeholder="البريد الإلكتروني"
              />
              {props.errors.email && props.touched.email ? (
                <div className="text-red-500 font-bold text-right">
                  {" "}
                  {props.errors.email}
                </div>
              ) : null}
              <div dir="ltr" className="w-full">
                <PhoneInput
                  containerStyle={{
                    display: "flex",
                  }}
                  inputClass={generalStyling("phone")}
                  inputStyle={phoneInputStyle}
                  id={phone}
                  preferredCountries={["eg", "sa"]}
                  name={phone}
                  type="tel"
                  localization={ar}
                  specialLabel=""
                  masks={{ eg: "... ... ...." }}
                  onChange={(v) => props.setFieldValue(phone, v)}
                  onBlur={props.handleBlur}
                  defaultValue={props.initialValues[phone]}
                  placeholder={"+20 12X XXX X543  الهاتف"}
                />
                {props.touched.phone && props.errors.phone ? (
                  <div className="text-red-500 font-bold text-right">
                    {" "}
                    {props.errors.phone}
                  </div>
                ) : null}
              </div>
              <Field
                className="w-full outline-[#ACCAFB]  focus:border-2 focus:bg-white bg-[#F1F5F9] h-[48px] p-2 rounded-md outline-2"
                name="city"
                id="city"
                as="select"
              >
                <option value="المدينة">المدينة</option>
                {cities.map((el) => {
                  return <option value={el.name}>{el.name}</option>;
                })}
              </Field>
              {props.touched.city && props.errors.city ? (
                <div className="text-red-500 font-bold text-right">
                  {" "}
                  {props.errors.city}
                </div>
              ) : null}
              <Field
                type="text"
                className="w-full h-[63px] p-2 outline-[#ACCAFB]  rounded-md border-1 bg-slate-100 focus:bg-white placeholder:text-[14px]"
                as="textarea"
                placeholder="العنوان بالكامل"
                name="address"
                id="address"
              />
              {props.touched.address && props.errors.address ? (
                <div className="text-red-500 font-bold text-right">
                  {" "}
                  {props.errors.address}
                </div>
              ) : null}
              <h3 className="w-full text-[16px] mt-5 font-semibold">
                الدولة / المنطقة:
              </h3>
              <h3 className="w-full text-[16px] mb-5 font-semibold">
                جمهورية مصر العربية{" "}
              </h3>
              <Field
                type="text"
                className="w-full h-[63px] p-2  outline-none rounded-md border-1 bg-slate-100 focus:bg-white placeholder:text-[14px]"
                as="textarea"
                placeholder="ملاحظات الطلب ( اختياري)"
                name="notes"
                id="notes"
              />
              <h3 className="w-full text-[16px] mt-3 font-semibold">
                اختر طريقة الدفع{" "}
              </h3>
              <div
                role="group"
                className="w-full my-3 flex gap-8 justify-between items-center"
              >
                <div className="border-2 flex items-center w-full h-[40px] border-black opacity-40">
                  <label className="p-2 text-[12px] md:text-[15px]">
                    <Field
                      id="paymentMethod"
                      name="paymentMethod"
                      className="w-[16px]"
                      disabled
                      type="radio"
                      value="card"
                    />
                    {"بطاقة ائتمان"}
                  </label>
                </div>
                <div
                  className="border-2 flex items-center w-full h-[40px] border-black"
                  // onClick={(e) => setChecked(!checked)}
                >
                  <label className="p-2 text-[12px] md:text-[15px]">
                    <Field
                      //   onChange={(e) => setChecked(!checked)}
                      id="paymentMethod"
                      name="paymentMethod"
                      labelProps={{ class: "text-[12px]" }}
                      className="w-[16px] mx-1"
                      type="radio"
                      value="cash"
                    />
                    {"الدفع عند الاستلام"}
                  </label>
                </div>
              </div>
              {props.touched.paymentMethod && props.errors.paymentMethod ? (
                <div className="text-red-500 font-bold text-right">
                  {" "}
                  {props.errors.paymentMethod}
                </div>
              ) : null}
              <button
                className="w-full md:h-[60px] md:text-[20px] flex justify-center items-center h-[40px] text-[14px] font-semibold bg-[#FF4E00]"
                style={{ borderRadius: "0px" }}
                type="submit"
                >
                أكد الطلب
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
const ShippingForm = Radium(ShippingInfo);
export default ShippingForm;
