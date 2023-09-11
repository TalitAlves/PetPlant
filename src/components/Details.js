import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import noimage from "../imgs/no-image.png";
import "../styles/Details.css";

function Details() {
  const { id } = useParams();
  const apiKey = "sk-8UXs64f86f09589372089";
  const [details, setDetails] = useState("");

  useEffect(() => {
    axios
      .get(`https://perenual.com/api/species/details/${id}?key=${apiKey}`)
      .then((response) => {
        setDetails(response.data);
        console.log(response.data);
      });
  }, [id]);

  return (
    <div className="details-card">
      <h2>{details.common_name}</h2>
      <div className="card">
        <div className="details-img">
          {details.default_image && details.default_image.original_url ? (
            <img
              src={details.default_image.original_url}
              alt={details.common_name}
            />
          ) : (
            <img src={noimage} alt={details.common_name} />
          )}
        </div>
        <div className="card-info">
          <h3>DETAILS</h3>
          <div className="more-info">
            <div className="info-title">Dimensions:</div>
            <div>
              {details.dimensions && details.dimensions.type} x Max:{" "}
              {details.dimensions && details.dimensions.max_value}{" "}
              {details.dimensions && details.dimensions.unit} - Min{" "}
              {details.dimensions && details.dimensions.min_value}{" "}
              {details.dimensions && details.dimensions.unit}{" "}
            </div>
            <div className="info-title">Family:</div>
            <div>{details.family && details.family} </div>
            <div className="info-title">Maintenance:</div>
            <div>{details.maintenance && details.maintenance}</div>
            <div className="info-title">Medicinal:</div>
            <div>{details.medicinal && details.medicinal}</div>
            <div className="info-title">Soil:</div>
            <div> {details.soil && details.soil}</div>
          </div>
          <div>
          <hr class="separator-line"/> 
            <h3>DESCRIPTION</h3>
            {details.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
