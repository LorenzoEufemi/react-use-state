import languages from "../data/languages";
import { useState } from "react";


function languageCard () {
    const [activeLanguage, setActiveLanguage] = useState("");

    return (
        <>
        <div className="text-center">
          {languages.map((curLanguage, index) => <button className="btn" onClick={() => { setActiveLanguage(curLanguage) }} key={index}>{curLanguage.title}</button>
          )}
        </div>
        <div className="card">
          <div className="card-title">{ activeLanguage ? activeLanguage.title : "nessun linguaggio selezionato"}</div>
          <hr />
          <div className="card-text">{activeLanguage.description}</div>
        </div>
        </>
    )
}
export default languageCard;
