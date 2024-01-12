import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { Divider, Flex, Text } from "@aws-amplify/ui-react";

export default function Header() {
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(!open);
  // };

  const navigate = useNavigate();

  const activity = () => {
    navigate("/activity");
  };

  const account = () => {
    navigate("/account");
  };

  const support = () => {
    navigate("/support");
  };

  const feedback = () => {
    navigate("/feedback");
  };
  const faq = () => {
    navigate("/faq");
  };
  return (
    <div className="flex  border-2 border-[#000000] rounded-[40px] w-[95%] ml-[22px] mt-[15px] h-[76px]">
      <div className="flex">
        <div className="bg-black h-[85px] w-[89px] rounded-full text-center align-center justify-center flex flex-col ml-[-5px] mt-[-5px]">
          <p className="text-white text-[19px] font-normal ">IDEA BOX</p>
        </div>

        <Input
          placeholder="Search any course"
          prefix={<SearchOutlined className="site-form-item-icon" />}
          className="w-[300px] h-[40px] mt-[15px] rounded-[20px] ml-[15px] "
        ></Input>
      </div>

      <div className="flex  w-[20%] justify-evenly items-center ml-[750px]">
        {/* <Menu title={"Title"} color={"text-[red]"} /> */}
        <Flex direction="row">
          {" "}
          <Menu title={"Title"} />
          <Divider orientation="vertical" />{" "}
        </Flex>
        <Flex direction="row">
          {" "}
          <Menu title={"My Diary"} to={"/dairy"} />
          <Divider orientation="vertical" />{" "}
        </Flex>
        <Flex direction="row">
          {" "}
          <Menu title={"Programs"} to={"/programs"} />
          <Divider orientation="vertical" />{" "}
        </Flex>

        {/* <Menu title={"My Diary"} to={"/dairy"}/><span style={{borderRight:"2px solid",height:'20px'}}></span>
        <Menu title={"Programs"} to={"/programs"}/><span style={{borderRight:"2px solid",height:'20px'}}></span>
        <Menu title={"Profile"} /> */}

        {/* <p onClick={handleOpen} className="text-[#000] text-[14px] font-medium">Profile</p>
      {open ? (
        <li>
        <Link to="/activity">My Activities</Link>)</li>
        <Link to=""></Link>
         : null} */}

        <Dropdown
          label=""
          dismissOnClick={false}
          renderTrigger={() => (
            <span
              style={{ cursor: "pointer", fontSize: "14px", fontWeight: "500" }}
            >
              Profile
            </span>
          )}
        >
          <div className="bg-white border-2 border-solid border-black w-[191px] h-[278px] pl-[5px] text-[14px] font-medium text-[#000] z-10">
            <Dropdown.Item onClick={activity}>My Activities</Dropdown.Item>
            <Dropdown.Item onClick={account}>My Account</Dropdown.Item>
            <Dropdown.Item onClick={support}>Help & Support</Dropdown.Item>
            <Dropdown.Item onClick={feedback}>Feedback </Dropdown.Item>
            <Dropdown.Item onClick={faq}>FAQ’s </Dropdown.Item>
            <Dropdown.Item>App Settings </Dropdown.Item>
            <Dropdown.Item>Sign Out </Dropdown.Item>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
