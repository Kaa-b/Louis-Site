import React, { useState, useEffect } from "react";
import Axios from "axios";
// Components
import { Image } from "cloudinary-react";
import CheckboxCategories from "../CheckboxCategories";
//Style
import {
  Wrapper,
  Content,
  File,
  Categorie,
  Pictures,
  PicturesWrapper,
} from "./UploadImg.styles";

 // Create a Cloudinary instance and set your cloud name
//  cloudinary.config({
//   cloud_name: process.env.REACT_APP_CLOUD_NAME,
//   api_key: process.env.REACT_APP_API_KEY,
//   api_secret: process.env.REACT_APP_API_SECRET
// });
//  const cloudinary = new Cloudinary({
//   cloud: {
//     cloudName: process.env.REACT_APP_CLOUD_NAME,
//   }
// });

function UploadImg() {
  //Variables
  const [imageSelected, setImageSelected] = useState("");
  const [categorieSelected, setCategorieSelected] = useState(["all"]);
  const [newCategorieSelected, setNewCategorieSelected] = useState(["all"]);
  const [picturesData, setPicturesData] = useState([]);
  // flags for checkboxes
  const [flagGlider, setFlagGlider] = useState(true);
  const [flagPlane, setFlagPlane] = useState(true);
  const [flagMeeting, setFlagMeeting] = useState(true);

  const { REACT_APP_CLOUDINARY_PRESET, REACT_APP_CLOUDINARY_CLOUDNAME } = process.env;

  //Function to send to mongoDB
  const addToDB = (response) => {
    Axios.post("https://mscl-photography.herokuapp.com/insert", {
      url: response.data.url,
      categorie: response.data.tags,
      public_id: response.data.public_id,
    });
  };

  //Function to update the categorie in mongoDB
  const updateToDB = (id) => {
    Axios.put("https://mscl-photography.herokuapp.com/update", {
      id: id,
      newCategorie: newCategorieSelected,
    });
  };

  //Function to delete picture
  const deleteToDB = (id) => {
    Axios.delete(`https://mscl-photography.herokuapp.com/delete/${id}`);
  };

  //UseEffect to get pictures' url from mongoDB
  useEffect(() => {
    Axios.get("https://mscl-photography.herokuapp.com/read").then((response) => {
      setPicturesData(response.data);
    });
  }, []);

  //Function to upload the Image
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("tags", categorieSelected);
    formData.append("upload_preset", `${REACT_APP_CLOUDINARY_PRESET}`);

    Axios.post(
      `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_CLOUDNAME}/image/upload`,
      formData
    )
      .then((response) => {
        console.log(response);
        addToDB(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Function to upload the Image
  // const deleteImage = (idDB, idCloudinary) => {
  //   cloudinary.v2.uploader.destroy(idCloudinary, function(error,result) {
  //     console.log(result, error) })
  //     .then((response) => {
  //       console.log(response);
  //       deleteToDB(idDB);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  //  const deleteImage = async (e) => {
  //   e.preventDefault();
  //     cloudinary.v2.uploader.destroy(picturesData[0].public_id, function(error,result) {
  //       console.log(result, error) })
  //       .then((response) => {
  //         console.log(response);

  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //Render
  return (
    <Wrapper>
      <Content>
        <File>
          <label for="file">Fichier : </label>
          <input
            type="file"
            id="file"
            onChange={(event) => {
              setImageSelected(event.target.files[0]);
            }}
          />
        </File>
        <Categorie>
          <legend>Catégorie : </legend>
          <CheckboxCategories
            flag={flagGlider}
            setFlag={setFlagGlider}
            setCategorie={setCategorieSelected}
            categorie="glider"
            label="Planeur"
          />
          <CheckboxCategories
            flag={flagPlane}
            setFlag={setFlagPlane}
            setCategorie={setCategorieSelected}
            categorie="civile"
            label="Aviation civile"
          />
          <CheckboxCategories
            flag={flagMeeting}
            setFlag={setFlagMeeting}
            setCategorie={setCategorieSelected}
            categorie="militaire"
            label="Aviation militaire"
          />
        </Categorie>
        <button onClick={uploadImage}>Upload Image</button>
      </Content>
      <PicturesWrapper>
        {picturesData.map((val) => {
          return (
            <Pictures key={val._id}>
              <Image
                cloudName="dfpnxd8gj"
                publicId={val.url}
                style={{ width: 200 }}
              />
              <h3>{val.categorie}</h3>
              <Categorie>
                <legend>Catégorie : </legend>
                <CheckboxCategories
                  flag={flagGlider}
                  setFlag={setFlagGlider}
                  setCategorie={setNewCategorieSelected}
                  categorie="glider"
                  label="Planeur"
                />
                <CheckboxCategories
                  flag={flagPlane}
                  setFlag={setFlagPlane}
                  setCategorie={setNewCategorieSelected}
                  categorie="civile"
                  label="Aviation civile"
                />
                <CheckboxCategories
                  flag={flagMeeting}
                  setFlag={setFlagMeeting}
                  setCategorie={setNewCategorieSelected}
                  categorie="militaire"
                  label="Aviation militaire"
                />
                <button onClick={() => updateToDB(val._id)}>
                  Update Categorie
                </button>
              </Categorie>
              <button onClick={() => deleteToDB(val._id)}>Delete</button>
            </Pictures>
          );
        })}
      </PicturesWrapper>
    </Wrapper>
  );
}

export default UploadImg;
