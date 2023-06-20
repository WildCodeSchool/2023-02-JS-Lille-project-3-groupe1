import autoportait from "../../assets/image/HCNMT_autoportrait.jpg";
import "./AuthorCard.scss";

export default function Author() {
  return (
    <div className="authorcontainer">
      <div className="authorinfo">
        <img className="profilpic" src={autoportait} alt="" />
        <div className="info">
          <h4>Autheur: Hippolyte Charles Napoléon Mortier{/*  */}</h4>
          <h4>Date de naissance: 4 mai 1835{/*  */}</h4>
          <h4>Date de mort: 13 février 1892</h4>
          <h4>Nationalité: Français{/*  */}</h4>
        </div>
      </div>
      <div className="description">
        Fils de Napoléon Mortier de Trévise (1804-1869), 2e duc de Trévise et de
        la duchesse née Anne-Marie Lecomte-Stuart (1808-1870), il hérite du
        château de Sceaux en, 1869, en indivision avec ses frères et sœurs mais
        il cède ses parts à son frère, Jean-François Hippolyte Mortier, marquis
        de Trévise qui reste seul propriétaire du domaine. Le 23 octobre 1860,
        il épouse Marie Angèle Emma Le Coat de Kerveguen, fille de Gabriel Le
        Coat de Kerveguen, un riche colon réunionnais. Il n'a pas d'enfant. En
        1869, il achète à M. de Turenne le château de Coupvray construit par
        Hercule de Rohan-Montbazon en 16001. Il est connu aujourd'hui pour ses
        talents de dessinateur, qu'il exerça notamment à La Réunion. Ses
        tableaux et dessins sont conservés au Musée Léon-Dierx et consultables
        en ligne dans l'Iconothèque historique de l'océan Indien.{/*  */}
      </div>
    </div>
  );
}
