import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import BaseComponent from "../components/BaseComponent/BaseComponent";
import NotesIcon from "../icons/NotesIcon";

function HomePage(): JSX.Element {
  const notes = useSelector((state: RootState) => state.userNotes);
  const pageLabel = (
    <span className="logo">
      <b>Notes</b>
      <b>React</b>
    </span>
  );
  const notesUnavailableInfo = "Get Started";
  const notesUnavailableIcon = <NotesIcon />;

  return (
    <Fragment>
      <BaseComponent
        notes={notes}
        activePage="home"
        pageLabel={pageLabel}
        notesUnavailableInfo={notesUnavailableInfo}
        notesUnavailableIcon={notesUnavailableIcon}
      />
    </Fragment>
  );
}

export default HomePage;
