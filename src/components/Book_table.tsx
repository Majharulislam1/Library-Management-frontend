

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetPokemonByNameQuery } from "@/Redux/BookApi/BookApi";
import { Button } from "./ui/button";






export function Book_table() {

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
        <div className="w-full">

            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>

                        <TableRow  >
                            <TableHead  >
                                <h4>Title</h4>
                            </TableHead>
                            <TableHead  >
                                <h4>Author</h4>
                            </TableHead>
                            <TableHead  >
                                <h4>Genre</h4>
                            </TableHead>
                            <TableHead  >
                                <h4>ISBN</h4>
                            </TableHead>
                            <TableHead  >
                                <h4>Copies</h4>
                            </TableHead>
                            <TableHead  >
                                <h4>Availability</h4>
                            </TableHead>
                            <TableHead  >
                                <h4>Actions</h4>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                   
                       {
                         data.data.map((book) => <TableRow key={book._id}>

                            <TableCell  >
                                <h1>{book.title}</h1>
                            </TableCell>
                            <TableCell  >
                                <h1>{book.author}</h1>
                            </TableCell>
                            <TableCell  >
                                <h1>{book.genre}</h1>
                            </TableCell>
                            <TableCell  >
                                <h1>{book.isbn}</h1>
                            </TableCell>
                            <TableCell  >
                                <h1>{book.copies}</h1>
                            </TableCell>
                            <TableCell  >
                                <h1>{book.available ? 'true' :'false'}</h1>
                            </TableCell>
                            <TableCell className="gap-4">
                                  <Button className="mr-4 cursor-pointer">Edit</Button>
                                  <Button className="mr-4 cursor-pointer">Delete</Button>
                                  {
                                     book.available ? <Button className="mr-4 cursor-pointer">Borrow</Button> : <span className="bg-red-400 rounded-lg p-1 ">unavailable</span>
                                  }
                                  
                            </TableCell>

                        </TableRow>)
                       }    
                        

                        {/* : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                          */}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
