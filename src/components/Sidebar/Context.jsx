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

  const onSent = async (prompt) => {
    const response = await runChat(Input);
    SetInput(Input);
  };

  useEffect(() => {
    onSent(Input);
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
    SetResultData
  };

  return (
    <Context.Provider value={ContextValue}>
      {Props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
