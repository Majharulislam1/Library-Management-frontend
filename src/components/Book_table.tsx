

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useDelete_BooksMutation, useGetBooksQuery, } from "@/Redux/BookApi/BookApi";
import { Button } from "./ui/button";
import type { Book_type } from "@/types/types";
import Swal from "sweetalert2";
import { Update_book } from "./Update_book";
import { useState } from "react";






export function Book_table() {

    const [isOpen, setIsOpen] = useState(false);

    const [selectedBook, setSelectedBook] = useState<Book_type | null>(null);

    const openModal = (book: Book_type) => {
        setSelectedBook(book);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedBook(null);
    };

    const { data, error, isLoading } = useGetBooksQuery('bulbasaur');


    const [deleteBook, { isLoading: isDeleting }] = useDelete_BooksMutation();


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





    const handleDelete = (id: string) => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this Book!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#171717',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete Book'
        }).then(async (result) => {
            if (result.isConfirmed) {

                await deleteBook(id);

            }
        })




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
                            data.data.map((book: Book_type) => <TableRow key={book._id}>

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
                                    <h1>{book.available ? 'true' : 'false'}</h1>
                                </TableCell>
                                <TableCell className="gap-4 flex">


                                    {/* <Update_book key={book._id} book={book} isloading={isLoading}></Update_book> */}

                                    <Button
                                        onClick={() => openModal(book)}

                                    >
                                        Update
                                    </Button>


                                    <Button onClick={() => handleDelete(book._id)} disabled={isDeleting} className="mr-4 cursor-pointer">
                                        {
                                            isDeleting ? "Deleting..." : "Delete"
                                        }
                                    </Button>
                                    {
                                        book.available && book.copies >0  ? <Button className="mr-4 cursor-pointer">Borrow</Button> : <span className="bg-red-400 rounded-lg p-1 ">unavailable</span>
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

                {isOpen && selectedBook && (
                    <Update_book
                        book={selectedBook}
                        isOpen={isOpen}
                        onClose={closeModal}
                    />
                )}
            </div>
        </div>
    )
}
