import React, { useState, useEffect, useRef } from "react";
import { Upload, Button } from "antd";
import { CameraOutlined, DownOutlined } from "@ant-design/icons";
import styled from "styled-components";
import localGovernments from "./LocalGovernment"; 

const CustomButton = styled(Button)`
  background-color: #f6613f !important;
  color: white !important;
  border-radius: 9999px !important;
  border: none !important;

  &:hover {
    background-color: white !important;
    color: #ff6344 !important;
    border: 1px solid #ff6344 !important;
  }
`;

const ContinueButton = styled.button`
  background-color: ${(props) =>
    props.disabled ? "gray" : "#ff6344"} !important;
  color: white !important;
  border-radius: 9999px !important;
  border: none !important;
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const CompleteProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLGA, setSelectedLGA] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [nearestLandmark, setNearestLandmark] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [filteredLGAs, setFilteredLGAs] = useState(localGovernments);

  const dropdownRef = useRef(null);

  const handleImageChange = (info) => {
    if (info.file.status === "done") {
      setSelectedImage(URL.createObjectURL(info.file.originFileObj));
    }
  };

  const handleLGAChange = (e) => {
    const value = e.target.value;
    setSelectedLGA(value);
    const filtered = localGovernments.filter((lga) =>
      lga.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredLGAs(filtered);
    setShowDropdown(true);
  };

  const handleLGASelect = (lga) => {
    setSelectedLGA(lga);
    setShowDropdown(false);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const regex = /^[1-9]\d{0,9}$/;
    if (value === "" || regex.test(value)) {
      setPhoneNumber(value);
      setPhoneError(value.length === 10 ? "" : "Invalid phone number");
    }
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selectedImage &&
      deliveryAddress &&
      selectedLGA &&
      nearestLandmark &&
      phoneNumber.length === 10
    ) {
      // Mock API call
      console.log("Sending data to API...");
      console.log({
        selectedImage,
        deliveryAddress,
        selectedLGA,
        nearestLandmark,
        phoneNumber,
      });
      alert("Profile completed successfully!");
    } else {
      alert("All inputs must be filled!");
    }
  };

  const isFormValid =
    selectedImage &&
    deliveryAddress &&
    selectedLGA &&
    nearestLandmark &&
    phoneNumber.length === 10;

  return (
    <section className="w-10/12 mx-auto py-8 md:w-10/12">
      <div className="w-full flex flex-col mx-auto h-4/6 my-auto shadow-lg gap-4 p-8 md:w-7/12 md:p-16 md:gap-8">
        <div className="">
          <h2 className="capitalize font-sans text-3xl text-center mb-6 font-bold text-[#111b27]">
            Complete Profile
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="rounded-full w-32 h-32 mb-4 bg-[#e0e0e0] object-cover"
                />
              ) : (
                <div className="rounded-full w-32 h-32 mb-4 flex items-center justify-center bg-gray-200">
                  <CameraOutlined
                    style={{ fontSize: "32px", borderColor: "gray-100/50" }}
                  />
                </div>
              )}
              <Upload
                name="imageUpload"
                accept="image/*"
                showUploadList={false}
                customRequest={({ file, onSuccess }) => {
                  setTimeout(() => {
                    onSuccess("ok");
                    setSelectedImage(URL.createObjectURL(file));
                  }, 0);
                }}
                onChange={handleImageChange}
              >
                <CustomButton icon={<CameraOutlined />}>
                  {selectedImage ? "Change Image" : "Upload Picture"}
                </CustomButton>
              </Upload>
            </div>
            <div>
              <div>
                <label>Delivery Address</label>
                <input
                  type="text"
                  placeholder="What's your delivery address?"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="relative w-1/2 mr-2" ref={dropdownRef}>
                  <label>LGA</label>
                  <div className="w-full p-2 border border-gray-300 rounded mt-2 flex items-center cursor-pointer">
                    <input
                      type="text"
                      placeholder="Select LGA"
                      className="w-full focus:outline-none"
                      value={selectedLGA}
                      onChange={handleLGAChange}
                      onFocus={() => setShowDropdown(true)}
                    />
                    <DownOutlined className="ml-2" />
                  </div>
                  {showDropdown && (
                    <div className="absolute left-0 right-0 mt-2 max-h-48 overflow-y-auto bg-white border border-gray-300 rounded shadow-lg z-10">
                      {filteredLGAs.map((lga, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => handleLGASelect(lga)}
                        >
                          {lga}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="w-1/2 ml-2">
                  <label className='text-sm md:text-base'>Nearest Landmark</label>
                  <input
                    type="text"
                    placeholder="Enter close landmark"
                    value={nearestLandmark}
                    onChange={(e) => setNearestLandmark(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                  />
                </div>
              </div>
              <div className="mt-4 mb-12">
                <label>Phone Number</label>
                <div className="flex items-center justify-between">
                  <div className="w-1/4 mr-2">
                    <input
                      type="text"
                      value="+234"
                      className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-100 cursor-not-allowed"
                      readOnly
                    />
                  </div>
                  <div className="w-3/4 ml-2">
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                    {phoneError && (
                      <span className="text-red-500 text-sm">{phoneError}</span>
                    )}
                  </div>
                </div>
              </div>
              <ContinueButton type="submit" disabled={!isFormValid} className=" ">
                Continue
              </ContinueButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CompleteProfile;
