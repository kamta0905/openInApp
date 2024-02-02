import React, { useState } from "react";
import "./upload.css";
import { Cards } from "../../components/organism/Cards";
import FileUpload from "../../components/atoms/FileUpload";
import PrimaryBtn from "../../components/atoms/PrimaryBtn";
import uploadIcon from "../../assets/uploadicon.svg";
import { FileUploader } from "react-drag-drop-files";
import { Loader } from "../../components/Skeletons/Loader";
import UpLoadedTable from "../UploadedTable";

interface FileUploaderProps {
  handleChange: (file: FileList) => void;
  name: string;
  types: string[];
}
export const UploadBtn = () => {
  const fileTypes = ["CSV", "JPG", "PNG", "DOC", "XLSX", "JPEG", "PDF"];
  const [file, setFile] = useState<FileList | any>(null);
  const [time, setTime] = useState(false);
  const [btn, setBtnDis] = useState(false);

  const handleChange: FileUploaderProps["handleChange"] = (files) => {
    setFile(files);
    setInterval(() => {
      setTime(true);
    }, 2000);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setBtnDis(false);
    setTime(false);
  };
  console.log(time, btn, !file);
  return (
    <>
      <div className="upload_container">
        <Cards className="card upload_card">
          <FileUpload
            handleChange={handleChange}
            fileTypes={fileTypes}
            file={file}
            FileUploader={FileUploader}
            handleRemoveFile={handleRemoveFile}
          />
          <PrimaryBtn
            className="primary upload_btn"
            onClick={() => setBtnDis(true)}
            disabled={(!time && !btn) || !file}
            type="submit"
          >
            {time ? (
              <div className="flex gap-2">
                <img src={uploadIcon} alt="" /> Upload
              </div>
            ) : !file ? (
              <div className="flex gap-2">
                <img src={uploadIcon} alt="" /> Upload
              </div>
            ) : (
              <Loader />
            )}
          </PrimaryBtn>
        </Cards>
      </div>
      {btn ? <UpLoadedTable /> : null}
    </>
  );
};
