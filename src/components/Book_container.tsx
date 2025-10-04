import { useGetPokemonByNameQuery } from "@/Redux/BookApi/BookApi";
import { Book_table } from "./Book_table";

 

const Book_container = () => {


  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

    if (isLoading) {
        return (
            <div className="relative flex justify-center items-center h-screen">
                <div className="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div>
                <div
                    className="w-12 h-12 rounded-full animate-spin absolute border border-solid border-gray-800 border-t-transparent">
                </div>
            </div>
        )
    }

    return (
        <div className="py-8">
               <Book_table></Book_table>
        </div>
    );
};

export default Book_container;