import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { useGetBorrow_summaryQuery } from "@/Redux/BookApi/BookApi";

const Borrow_table = () => {
    const { data, error, isLoading } = useGetBorrow_summaryQuery('bulbasaur');

    
    if (isLoading) {
        return (
            <div className="relative flex justify-center items-center h-screen">
                <div className="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div>
                <div className="w-12 h-12 rounded-full animate-spin absolute border border-solid border-gray-800 border-t-transparent"></div>
              
            </div>
        );
    }

   
    if (error) {
        return (
            <div className="text-center text-red-500">
                <h2>Error loading data. Please try again later.</h2>
            </div>
        );
    }
  

    if (!data?.data?.length) {
        return (
            <div className="text-center text-gray-500">
                <h2>No Borrowed Books Available.</h2>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <div className="overflow-hidden rounded-md border">
              
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead><h4>Title</h4></TableHead>
                            <TableHead><h4>ISBN</h4></TableHead>
                            <TableHead><h4>Total Quantity</h4></TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {data.data.map((book, index) => (
                            <TableRow key={`${book.book.isbn}-${index}`}>
                                <TableCell>
                                    <h1>{book.book.title}</h1>
                                </TableCell>
                                <TableCell>
                                    <h1>{book.book.isbn}</h1>
                                </TableCell>
                                <TableCell>
                                    <h1>{book.totalQuantity}</h1>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Borrow_table;