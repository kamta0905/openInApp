import React from "react";

function FileUpload(props: any) {
  return (
    <div className="file_container">
      <props.FileUploader handleChange={props.handleChange} name="myFile" types={props.fileTypes} multiple={false} />
      <div className="excel_bg"></div>
      {props.file ? (
        <div className="select_file">
          <p>{props.file.name}</p>
          <p className="remove" onClick={props.handleRemoveFile}>
            Remove
          </p>
        </div>
      ) : (
        <div className="browse">
          Drop your Excel sheet here or <a>browse</a>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
