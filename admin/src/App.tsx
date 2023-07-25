import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="artworks" list={ListGuesser} edit={EditGuesser} />
    <Resource name="authors" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);
