--
-- Table structure for table `author`
--

--
--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `mail` varchar(90) NOT NULL,
  `hashedPassword` varchar(45) NOT NULL,
  `admin` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mail_UNIQUE` (`mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `user`
DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `dod` date DEFAULT NULL,
  `nationality` varchar(45) NOT NULL,
  `description` mediumtext NOT NULL,
  `avatarUrl` mediumtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'Hippolyte Charles Napoléon','Mortier de Trévise','1835-05-04','1892-02-13','Française','Fils de Napoléon Mortier de Trévise (1804-1869), 2e duc de Trévise et de la duchesse née Anne-Marie Lecomte-Stuart (1808-1870), il hérite du château de Sceaux en, 1869, en indivision avec ses frères et sœurs mais il cède ses parts à son frère, Jean-François Hippolyte Mortier, marquis de Trévise qui reste seul propriétaire du domaine.Le 23 octobre 1860, il épouse Marie Angèle Emma Le Coat de Kerveguen, fille de Gabriel Le Coat de Kerveguen, un riche colon réunionnais. Il n\'a pas d\'enfant.En 1869, il achète à M. de Turenne le château de Coupvray construit par Hercule de Rohan-Montbazon en 16001.Il est connu aujourd\'hui pour ses talents de dessinateur, qu\'il exerça notamment à La Réunion. Ses tableaux et dessins sont conservés au Musée Léon-Dierx et consultables en ligne dans l\'Iconothèque historique de l\'océan Indien.','HCNMT_autoportrait.jpg');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artworks`
--

DROP TABLE IF EXISTS `artworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artworks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` mediumtext NOT NULL,
  `full_title` varchar(90) NOT NULL,
  `short_title` varchar(90) NOT NULL,
  `description` mediumtext NOT NULL,
  `dimensions` varchar(45) NOT NULL,
  `technique` varchar(45) NOT NULL,
  `year_created` varchar(45) NOT NULL,
  `author_id` int NOT NULL,
  `category` varchar(45) NOT NULL,
  `related_article` mediumtext,
  `img_ref` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_artworks_author_idx` (`author_id`),
  CONSTRAINT `fk_artworks_author` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artworks`
--

LOCK TABLES `artworks` WRITE;
/*!40000 ALTER TABLE `artworks` DISABLE KEYS */;
INSERT INTO `artworks` VALUES (4,'Cheminee_40FI79.jpg','Effet de nuit sur la Cheminée usine du Tampon','Cheminée du Tampon','Attribuée parfois à l\'usine du Grand Tampon, mais c\'est peu probable: l\'usine du Grand Tampon ayant été une scierie. Or, ici, il s\'agit sans doute de l\'usine de Bel Air: on reconnaît les deux corps principaux du bâtiment industriel (purgerie et bâtiment abritant la machine à vapeur) en parallèle, comme sur les figures 2 et 3. La cheminée carrée est sur le côté Nord, construite en basalte, avec intercalation de poutres deux côtés par deux côtés. Devant, un gardien, dont l\'ombre se projette sur la cheminée. En arrière-plan, une allée de palmiers, qui semble mener vers la maison de maître. La disposition des lieux correspond à celle qui existait à Bel Air. Scène d\'apparence paisible ?','20 X 14','Aquarelle','1866',1,'Usines','none','40FI79'),(5,'UsineBelAir_40FI78.jpg','Arrivée à l\'établissement du Tampon','L\'Établissement','Le chemin de l\'Etablissement existe toujours aujourd\'hui, à 400 mètres d\'altitude. Les deux cavaliers sont sans doute Ch. H. N; Mortier de Trévise lui-même, et son beau-frère (Denis-André de K/véguen)? En avant, 3 autres personnages cheminent à pied. La route traverse le lit desseché de la Rivière d\'Abord, et remonte légèrement vers l\'Etablissement (c\'est-à-dire l\'ensemble du fonds avec usine, bâtiments annexes, et camp des travailleurs engagés, non représenté ici. L\'usine elle-même est composée de deux corps parallèles de bâtiments, flanqués chacun d\'une cheminée: l\'une pour évacuer les fumées de combustion pour la batterie Gimart, l\'autre la fumée de la machine à vapeur. En quinconce, un autre bâtiment à l\'avant, abritant les \"tables\" pour le séchage du sucre? ','15 X 13.5','Aquarelle','1866',1,'Usines','none','40FI78'),(6,'FRAD974_40FI80.jpg','Tampon- Une usine','Usine du Tampon','Une autre vue de l\'usine de Bel Air, au Tampon: on retrouve le bâtiment en quinconce accolé au corps de l\'usine, avec ses deux cheminées. Au premier plan, sur le chemin de l\'Etablissement (400 m. d\'altitude), on distingue un groupe de travailleurs engagés, près d\'un point d\'eau: un homme, une femme avec un bébé qui porte une jarre sur la tête, et un autre personnage. L\'auteur note le nom des arbres et plantes (aloés divers, vacoas, palmiers)','11.5 X 20.5','Dessin à la mine de plomb','10 février 1866',1,'Usines','https://view.genial.ly/5fb636d03636f40d7f883f24','40FI80'),(7,'AD974_40FI106.jpg','Quartier St Pierre. Etablissement de la Rivière, montagnes de l\'Entre Deux','Établissement de la Rivière','L\'usine (Etablissement) est installée rive gauche de la Rivière Saint-Etienne, au débouché du lieu-dit l\'Entre-Deux. Elle semble présenter la même physionomie que les autres établissements achetés ou construits par Gabriel de K/Véguen: 2 corps principaux de bâtiments, ici décalés l\'un par rapport à l\'autre, avec des ouvertures en arc de cercle pou évacuer la chaleur, la cheminée qui évacue les fumées de la batterie Gimart, et, à l\'arrière, un ou deux bâtiments pour le séchage du sucre. Au Premier plan, une escouade (une \"bande\") de travailleurs engagés effectue la \"trouaison\", pour la replantation de cannes à sucre, sous la direction d\'un Commandeur, vêtu d\'un pantalon de toile bleue. Un vacoa est ici le témoin indispensable de l\'usage de ses feuilles pour le tressage de sacs, destinés ensuite à transporter le sucre produit.','19.5 X 16.5','Aquarelle','1861 ou 1866',1,'Usines','none','40FI106'),(8,'FRAD974_40FI92.jpg','Boutchiana- Indien','','Boutchiana est devenu le domestique personnel de Ch.Mortier de Trévise, et il a vieilli de 6 ans.','','Aquarelle','juillet 1871',1,'Travailleurs','none','40FI'),(9,'FRAD974_40FI91.jpg','Boutchiana- Casernes','','Travailleur engagé depuis l\'Inde à l\'Etablissement des Casernes, il tient une lance, peut-être a-t-il une fonction de gardien? Sur sa fiche d\'engagement, il était recensé comme tailleur.','19.5 X 11','Aquarelle','24 août 1865',1,'Travailleurs','','40FI91'),(10,'FRAD974_40FI90.jpg','Boutchiana-Casernes, de face','','Complète la précédente aquarelle. On devine la jeunesse de Boutchiana, engagé à l\'adolescence. Arrivé à bord de Yanaon, en Inde, à bord du navire de la famille Kerveguen, Le Canova, on le dit âgé de 17 ans.','19.5 X 8.5','Aquarelle','1865',1,'Travailleurs','','40FI90'),(11,'MORTIERdeTREVISE_caffrine1861.jpg','Cafrine et son petit au Tampon','','C\'est une engagée, ou alors une affranchie. Elle porte la robe de toile bleue, dont la fourniture est obligatoire par l\'employeur, selon les termes du contrat d\'engagement. La pratique ne change guère de ce qui était déjà prévu avant 1848 pour les esclaves, par le `Code noir` de 1723. ','19.5 X 8.5','Aquarelle','1861',1,'Travailleurs','','40FI76'),(12,'FRAD974_40FI52.jpg','La vieille (Victorine) Mme Samsi Casernes','','La vieille dame est assise sur une natte, vêtue de la traditionnelle robe de toile bleue fournie par l\'employeur. Son foulard noué sur la tête est taillé dans la même toile.','19.5 X 12','Aquarelle','15 décembre 1865',1,'Travailleurs','https://belair.hypotheses.org/389','40FI52'),(13,'MORTIERTREVISE_Elise_1861.jpg','Elise','','Elise est une petite fille de Victorine, issue de sa fille Coralie.','','Dessin','août 1861',1,'Travailleurs','','40FI66'),(14,'FRAD974_40FI75.jpg','Lucie le ventre plein de cari','','Une autre petite fille de Victorine, sans doute dans la maison des Casernes.','','Dessin','1866',1,'Travailleurs','','40Fi75'),(15,'Jamali.jpg','Jamali, Cafre, Gardien','','\"Cafre\" veut dire que Jamali n\'est pas né sur l\'Habitation, mais qu\'il a vraisemblablement été recruté comme engagé. Il est armé d\'une lance, et surveille l\'orée des champs, ou les abords du camp des travailleurs.','26 X 16.5','Aquarelle','1861',1,'Travailleurs','https://forgetmenot.objettemoin.org/index.php/fr/actus/36-jamali-gardien-de-cannes','40Fi60'),(16,'FRAD974_40FI75.jpg','La belle Tina','','Visiblement, Mortier de Trévise a été impressionné par la chevelure de Tina. Encore une petite fille de Victorine, plus jeune. il semble que les fillettes fassent leur apprentissage de domestiques dans la propriété des Kerveguen.','','Dessin','1866',1,'Travailleurs','','40Fi74'),(17,'FRAD974_40FI55.jpg','Le parapluie du pauvre Citoyen','','Le titre de citoyen est une fierté pour les affranchis de 1848 qui travaillent sur la propriété ou dans les Etablissements K/Véguen. La pluie est rare à Saint-Pierre, beaucoup plus fréquente au Tampon (pluies orographiques pendant la saison chaude, celle de la coupe des cannes). Ici, le créole engagé dispose d\'une maigre rémunération, juste suffisante pour sa nourriture et de menus frais à la \'boutique\'. Depuis 1859, le salaire est en outre versé en kreutzers ( démonétisés, au cours forcé de 1 franc. A l\'arrière-plan, sur la droite, la silhouette d\'une cheminée d\'usine, peut-être celle de Bel-Air, au Tampon.','19 X 11.5','Aquarelle','1861',1,'Travailleurs','','40FI55'),(18,'lapli Tampon.jpg','La pli y fait pas rien, ça ! Tampon','','La suite du commentaire est: \"Ca ne lui fait rien,... tant pis pour lui ! mais aux cannes ça leur fait du bien tant mieux pour elles !....\" Le jeune créole porte un chapeau de feutre déformé, pas de chaussures, comme la majorité des travailleurs. Janvier est en pleine période cyclonique: est-ce le cas ici? ','30 X 20','Dessin','27 janvier 1866',1,'Travailleurs','','40FI53.2'),(19,'MORTIER.de.TREVISE_Mr.Bourraye.dans.jardin.Casernes_1861.jpg','Monsieur Bourrayne dans le jardin des Casernes','','la suite du commentaire est: \"Allons, Virasami, vivement mettre la racine de ce plant (?) comme à Madras!\"','20 X 12.5','Dessin','1861',1,'Travailleurs','','40FI59'),(20,'AD974_40FI72-ChanvertGolo.jpg','Chanvert descend le chemin de la Plaine, Golo est à ses côtés','Golo et Chanvert','Chanvert est peut-etre un ami de la famille. Golo est un domestique qui l\'accompagne. A l\'arrière du tilbury, il semble qu\'il y ait une borne kilométrique sur le côté de la route. Le chemin de la Plaine relie Saint-Pierre à la Plaine des Cafres, et, au-delà, à Saint-Benoît. L\'Etablissement de Bel-Air est situé au tiers du parcours, entre La Plaine des Cafres et Saint-Pierre.','8 X 15.5','Dessin','1861',1,'Travailleurs','https://belair.hypotheses.org/1351','40Fi72'),(21,'FRAD974_40FI83.png','Sortie du Bras de Jean Payet en allant vers le Tampon','Sortie du Bras de Jean Payet','Le tilbury à quatre roues est tiré par quatre mules (importées du Poitou). La route, encore reconnaissable aujourd\'hui, reliait les chmps de canne situés entre la ravin e Jean Payet (ancienne ravine du Tampon), et la ravine des Cafres. au sommet de ces champs, une scierie fournissait le bois et les planches pour les Etablissements K/Véguen','30 X 22.5','Dessin','29 janvier 1865',1,'Lieux','','40Fi83'),(22,'FRAD974_40FI77.jpg','Le bassin rouge au Tampon, la ravine descend','Bassin rouge','La cascade alimente un bassin à proximité d\'un affluent de la rivière d\'Abord','15 X 9,5','Aquarelle','10 février 1866',1,'Lieux','','40Fi77'),(23,'!cid_C68DA6D1-BF5D-484A-B012-65BDB58BD330.png','Excursion au volcan de Bourbon','Caverne des lataniers','Mortier de Trévise et sa belle-famille sont ne excursion au volcan. Il n\'y avait pas de route, alors: il faut donc dormir en chemin dans cette caverne autrefois connue des noirs marrons, autrement dit fugitifs -avant  l\'abolition de l\'escalvage de 1848','24,5 X 32','Dessin','août 1861',1,'Lieux','https://view.genial.ly/6432b64851cad10018f64868/interactive-image-caverne-lataniers','40Fi104'),(24,'FRAD974_40FI105bis.jpg','Le volcan de Bourbon vu du Pas de Bellecombre','Pas de Bellecombe','Cela ne fait guère longtemps que le passage par le Pas de Bellecombe a été trouvé. Le lieu porte le nom du gouverneur présent au moment de la découverte du passage, mais c\'est un esclave, Jacob, qui l\'a découvert, en réalité. Bellecombe avait commandité l\'expédition.','18 X 24','Dessin','août 1861',1,'Lieux','','40Fi105bis'),(25,'Mamsellemini_40FI108.jpg','Mamzelle','','Les chevaux sont rares sur les établissements: ils font l\'objet de soins attentifs, et ne sont montés que par les propriétaires des Etablissements, et les contremaîtres. Selle et cuirs peuvent être fabriqués sur place: il y eut un atelier sur l\'Etablissement du Tampon.','14.5 X 19.5','Dessin','14 avril 1866',1,'Animaux','','40Fi108'),(26,'trevise-cannes_1861.jpg','Charrette tirée par des mulets','','4 mulets tirent une charrette apportant des cannes frâichement coupées à l\'usine. Les mulets sont nombreux dans l\'île à l\'époque de l\'industrialisation sucrière. Importés du Poitou, ce sont des bêtes robustes, qui coûtent moins chers que des boeufs ou des chevaux, pour lesquelles on construit des écuries. Elles ont des noms: on sait que dans l\'Etablissement des Casernes, Tec Tec, Langoutil, et Malheur sont des noms de mules.','6.5 X 15.5','Dessin','1861',1,'Animaux','','40FI73'),(27,'caille.jpg','Caille de Bourbon','','En réalité, la caille fut introduite d\'Asie, Inde ou chine, vers 1850. C\'est la femelle qui est colorée ainsi de rouge au bas des ailes. A l\'époque de Mortier de Trévise, c\'est donc une curiosité, un peu en disparition, à cause de l\'extension des champs cultivés en cannes à sucre.','19 X 23','Aquarelle','21 septembre 1861',1,'Animaux','','40FI53.1');

/*!40000 ALTER TABLE `artworks` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `favori`
--

DROP TABLE IF EXISTS `favori`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favori` (
  `artworks_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`artworks_id`,`user_id`),
  KEY `fk_artworks_has_user_user1_idx` (`user_id`),
  KEY `fk_artworks_has_user_artworks1_idx` (`artworks_id`),
  CONSTRAINT `fk_artworks_has_user_artworks1` FOREIGN KEY (`artworks_id`) REFERENCES `artworks` (`id`),
  CONSTRAINT `fk_artworks_has_user_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favori`
--

LOCK TABLES `favori` WRITE;
/*!40000 ALTER TABLE `favori` DISABLE KEYS */;
/*!40000 ALTER TABLE `favori` ENABLE KEYS */;
UNLOCK TABLES;

--

-- Dump completed on 2023-06-23  9:39:33

