import PropTypes from "prop-types";
import { DateTime } from "luxon";
import autoportait from "../../../../backend/public/assets/images/image/HCNMT_autoportrait.jpg";
import "./AuthorCard.scss";

function AuthorCard({ authors }) {
  // Convert the date of birth (dob) and date of death (dod) to Luxon DateTime objects
  const dateOfBirth = DateTime.fromISO(authors.dob);
  const dateOfDeath = DateTime.fromISO(authors.dod);

  return (
    <div className="authorcontainer">
      <div className="authorinfo">
        <img className="profilpic" src={autoportait} alt="" />
        <div className="info">
          <h4>
            {authors.firstname}
            <br />
            {authors.lastname}
          </h4>
          <h4>Date de naissance: {dateOfBirth.toFormat("yyyy-MM-dd")}</h4>
          <h4>Date de mort: {dateOfDeath.toFormat("yyyy-MM-dd")}</h4>
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
