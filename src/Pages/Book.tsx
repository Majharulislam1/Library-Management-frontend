import { Add_books } from "@/components/Add_books";
import Book_container from "@/components/Book_container";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
 



const Book = () => {

   const navigate = useNavigate();

    return (
        <div className="  mx-auto container py-10    px-4 sm:px-6 md:px-8 lg:px-0">

            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">All Books</h1>
                </div>
                <div className="gap-4 flex">
                    
                    <Add_books></Add_books>
                    <Button onClick={()=>navigate('/borrow-summary')}>Borrow Summary</Button>
                    
                </div>
            </div>

             <Book_container></Book_container>
             

        </div>
    );
};

export default Book;