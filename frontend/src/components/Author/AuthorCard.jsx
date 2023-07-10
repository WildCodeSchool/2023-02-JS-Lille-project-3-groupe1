import PropTypes from "prop-types";
import autoportait from "../../assets/image/HCNMT_autoportrait.jpg";
import "./AuthorCard.scss";

function AuthorCard({ authors }) {
  return (
    <div className="authorcontainer">
      <div className="authorinfo">
        <img className="profilpic" src={autoportait} alt="" />
        <div className="info">
          <h4>
            {authors.firstname}
            {authors.lastname}
          </h4>
          <h4>Date de naissance: {authors.dob}</h4>
          <h4>Date de mort: {authors.dod}</h4>
          <h4>Nationalité: {authors.nationality}</h4>
        </div>
      </div>
      <div className="description">{authors.description}</div>
    </div>
  );
}

AuthorCard.propTypes = {
  authors: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    dob: PropTypes.string,
    dod: PropTypes.string,
    nationality: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default AuthorCard;
