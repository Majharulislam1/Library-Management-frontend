import Book_container from "@/components/Book_container";
import { Button } from "@/components/ui/button";
 



const Book = () => {

  

    return (
        <div className="mx-auto container py-10">

            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-4xl">All Books</h1>
                </div>
                <div className="gap-4">
                    <Button className="mr-4">Add Book</Button>
                    <Button>Borrow Summary</Button>
                </div>
            </div>

             <Book_container></Book_container>

        </div>
    );
};

export default Book;