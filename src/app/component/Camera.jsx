"use client";

import { useRef, useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "../firebase/firebase-sdk";

import Webcam from "react-webcam";

function Camera(props) {
  const webcam = useRef(null);
  const [webcamImg, setWebcamImg] = useState(null);

  const [preImage, setPreImage] = useState();


  const [nextblob, setNextblob] = useState(null);

  const [captureCount, setCaptureCount] = useState(0);


  const capture = () => {
    const imgSrc = webcam.current.getScreenshot();
   

    const blob = new Blob([imgSrc], { type: "image/jpeg" });
    const formData = new FormData();
    formData.append("image", blob);

    setNextblob(blob);
    setWebcamImg(imgSrc);

    fetch(imgSrc)
      .then((res) => res.blob())
      .then((blob) => {
    
        const file = new File([blob], `capture_${captureCount}.jpg`, {
          type: "image/jpeg",
        });
        uploadImageToFirebase(file);
        
        setCaptureCount(captureCount + 1);
      });
  };


  const uploadImageToFirebase = (file) => {
    const storageref = ref(storage, `test-id/${file.name}`);
    uploadBytes(storageref, file).then(async (snapshot) => {
      
    const url =
      (await getDownloadURL(ref(storage, snapshot.metadata.fullPath))) +
        `?time=${new Date().getTime()}`;
        setImgList((prevImgList) => [
        ...prevImgList,
        { url, fullPath: snapshot.metadata.fullPath },
      ]);
    });
  };


  const [imgList, setImgList] = useState([]);

  function upload(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const file = formdata.get("photo");


    const storageref = ref(storage, "test-id/" + file.name);
    uploadBytes(storageref, file).then(async (snapshot) => {
  
      const url =  
      (await getDownloadURL(ref(storage, snapshot.metadata.fullPath))) +
      `?time=${new Date().getTime()}`;
      setImgList((prevImgList) => [
      ...prevImgList,
      { url, fullPath: snapshot.metadata.fullPath },
    ]);
    });
  }

  async function getImages() {
    const storageRef = ref(storage, "test-id/");
    listAll(storageRef).then(async (res) => {
      let imgArr = [];
  
      for (let value of res.items) {
        const url = await getDownloadURL(value);
        imgArr.push({ url, fullPath: value.fullPath });
      }

      setImgList(imgArr);
    });
  }


  function delImage(fullPath) {
    const fileRef = ref(storage, fullPath); 
    deleteObject(fileRef)
      .then(() => {
      
        setImgList((currentList) =>
          currentList.filter((item) => item.fullPath !== fullPath)
        );
      })
      .catch((error) => {
        console.error("파일 삭제 중 오류 발생:", error);
      });
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="webcamtop">
      <Webcam
        ref={webcam}
        audio={false}
        screenshotFormat="image/jpeg"
        width="300px"
        height="auto"
        // videoConstraints={{ facingMode: "user" }} /* 전면 */
        videoConstraints={{ facingMode: { exact: "environment" } }} //후면
      />

      <img src={webcamImg} width="300" alt="photo" />
      <button onClick={capture}> Capture photo </button>


      <article >
        <h2>사진등록</h2>
        <form onSubmit={upload}>
          <p>
            <input type="file" name="photo" />
            <button>등록</button>
          </p>
        </form>
      </article>

      <article className="picurupload1">
        {imgList.map((obj, k) => (
          <p className="picurupload2" key={k} >
            <img src={obj.url}  width="200" height="200" alt="photo"/>
            <button
              className="picurupload3"
              onClick={() => {
                delImage(obj.fullPath);
              }}
            >
              {" "}
              삭제
            </button>
          </p>
        ))}
      </article>
    </div>
  );
}

export default Camera;
