import { createContext, useState, useEffect } from "react";
import runChat from "../Config/gemini";

export const Context = createContext();

const ContextProvider = (Props) => {
  const [Input, SetInput] = useState("");
  const [RecentPromt, SetRecentPromt] = useState("");
  const [PrevPrompts, SetPrevPromts] = useState([]);
  const [ShowResult, SetShowResult] = useState(false);
  const [Loading, Setloading] = useState(false);
  const [Resltdata, SetResultData] = useState("");

  const newchat = ()=> {
    Setloading(false);
    SetShowResult(false);
  }

  const onSent = async (prompt) => {
    SetResultData("");
    Setloading(true);
    SetShowResult(true)
    SetRecentPromt(Input)
    SetPrevPromts(prev=>[...prev,Input]);
    const response = await runChat(Input);
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i=0; i<responseArray.length; i++) {
      if(i === 0 || i % 2 !== 1) {
         newResponse += responseArray[i];
      } else {
        newResponse += "<b>"+responseArray[i]+"</b>";
      } 
    }
    let newResponse2 = newResponse.split("*").join("</br>")
    SetResultData(newResponse2);
    Setloading(false)
    SetInput("");
  };

    useEffect(() => {
      if (Input.trim() !== "") {
        onSent(Input);
      }
    }, []);

  const ContextValue = {
    onSent,
    Input,
    SetInput,
    RecentPromt,
    SetRecentPromt,
    PrevPrompts,
    SetPrevPromts,
    ShowResult,
    SetShowResult,
    Loading,
    Setloading,
    Resltdata,
    SetResultData,
    newchat
  };

  return (
    <Context.Provider value={ContextValue}>
      {Props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
