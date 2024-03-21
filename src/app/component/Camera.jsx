'use client'

import { useRef,useEffect, useState } from 'react';
import {  ref, uploadBytes, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from '../firebase/firebase-sdk';

import Webcam from 'react-webcam';


function Camera(props) {
  
    const webcam = useRef(null);
    const [webcamImg, setWebcamImg] = useState(null);


    const [preImage, setPreImage] = useState();
    const [test, setTest] = useState();

    const file = (e) => {
      // 미리보기
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = (e) => {
        setPreImage(e.target.result);
      }
      
      let t = new Date(e.target.files[0].lastModified)
      t.setSeconds(t.getSeconds() + 10)
  
      setTest(e.target.files[0])

    }  


    const capture = ()=>{
        const imgSrc = webcam.current.getScreenshot();
        console.log(imgSrc)

        const blob = new Blob([imgSrc], { type: 'image/jpeg' });
        const formData = new FormData();
        formData.append('image', blob);

        console.log(formData)

        setWebcamImg(imgSrc);
    }
    // useEffect(() => {

    // }, [])
    const [imgList, setImgList] = useState([]);

    function upload(e) {
      e.preventDefault();
      const formdata = new FormData(e.target);
      const file = formdata.get('photo')
      // console.log(formdata.get('photo').name, e.target.photo, e.target.photo.files[0].name )
      // console.log(Object.fromEntries(formdata))
      // const ref = ref(storage, 'test-id'+'파일명.jpg');
  
      const storageref = ref(storage, 'test-id/'+file.name);
      uploadBytes(storageref, file)
      .then(async snapshot => {
        console.log(snapshot.metadata.fullPath)
        const url = await getDownloadURL(ref(storage, snapshot.metadata.fullPath));
        // console.log(url)
        setImgList([...imgList, url])
      })
    }
  
    async function getImages() {
      const storageRef = ref(storage, 'test-id/');
      listAll(storageRef)
      .then(async (res) => {
        let imgArr = [];
        // let imgArr = [{url:'asfd', fullPath:'test_id/01.jpg'}];
        for(let value of res.items) {
          const url = await getDownloadURL(value);
          imgArr.push({url, fullPath: value.fullPath})
        }
          // console.log(imgArr)
          setImgList(imgArr)
      })
    }
  
    function delImage (path) {
      deleteObject(ref(storage, path));
      setImgList((item) => {
        return item.filter(obj=> obj.fullPath !== path)
      })
    }
  
  
  
    useEffect(() => {
      getImages()
    }, [])


  

    return (
        <div>
          {/* <form method='post' encType='multipart/form-data'></form> */}

            <img src={preImage} width="200" />
            <input type="file" name="photo" onChange={file} multiple />
     
            <div>
              {test?.name} <br />
            </div>


            <Webcam
                ref={webcam}
                audio={false}
                screenshotFormat="image/jpeg"
                width="300px"
                height="auto"
                
                // videoConstraints={{facingMode:"user"}}  /* 전면 */
                videoConstraints={{facingMode:{ exact: "environment" }}} //후면
            />
   
            <button onClick={capture}> Capture photo </button>
            
            <img src={webcamImg} width="300" />

            <article>
                <h2>파일등록</h2>
                <form onSubmit={upload}>
                <p>
                    <input type="file" name="photo" />
                    <button>등록</button>
                </p>
                </form>
            </article>

            <article>
                {
                imgList.map((obj, k ) => 
                <p key={k} style={{display: "inline-block"}}>
                    <img  src={obj.url} alt="" width="200" height="200"/>
                    <button onClick={()=> {delImage(obj.fullPath)}}> 삭제</button>
                </p>
                )
                }
            </article>

        </div>


    );
}    

export default Camera;