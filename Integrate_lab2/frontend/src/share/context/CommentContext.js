import { createContext, useState, useContext } from "react";
const CommentContext = createContext({ comments: [], setComments: () => { } });;
export default CommentContext;

const CommentContextProvider = ({ children }) => {
    const [comments, setComments] = useState([]);
    return <commentContext.Provider value={{ comments, setComments }} > {children} </commentContext.Provider>;
}
export { CommentContextProvider };