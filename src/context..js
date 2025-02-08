import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "http://openlibrary.org/search.json?q=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const [error, setError] = useState(null);

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        setError(null);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            if (!response.ok) {
                throw new Error('Failed to fetch books');
            }
            const data = await response.json();
            const {docs, numFound} = data;

            if(docs){
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;

                    return {
                        id: key,
                        author: author_name || ["Unknown author"],
                        cover_id: cover_i,
                        edition_count: edition_count || 0,
                        first_publish_year: first_publish_year || "Unknown",
                        title: title
                    }
                });

                setBooks(newBooks);
                setResultTitle(`${numFound} Search Results`);
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
        } catch(error){
            setError(error.message);
            setResultTitle("Error fetching books");
        } finally {
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};