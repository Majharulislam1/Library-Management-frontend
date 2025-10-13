import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import Swal from 'sweetalert2'

import { useForm, type SubmitHandler } from "react-hook-form"
import { Select } from "@radix-ui/react-select"




// import { useAppDispatch, useAppSelector } from "@/redux/hooks"
// import { add_tasks } from "@/redux/features/task/task"



import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import type { Book_type } from "@/types/types"
import { Textarea } from "./ui/textarea"
import { useUpdateBookMutation } from "@/Redux/BookApi/BookApi"



type Props = {
    book: Book_type;
    isOpen: boolean;
    onClose: () => void;
};

export function Update_book({ book, isOpen, onClose }: Props) {






    // const dispatch = useAppDispatch();

    // const User = useAppSelector(select_user);

    const form = useForm<Book_type>({
        defaultValues: {
            title: book.title || '',
            author: book.author || '',
            genre: book.genre || 'FICTION',
            isbn: book.isbn || '',
            description: book.description || '',
            copies: book.copies || 0,
        }
    });






    const [update_book, { isLoading,   }] = useUpdateBookMutation();



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



    const onSubmit: SubmitHandler<Book_type> = async (data: Book_type) => {
        const newBooks: Book_type = {

            ...data,

        }


        if (isNaN(parseInt(newBooks.copies as unknown as string))) {
            return Swal.fire({
                position: "center",
                icon: "warning",
                title: "Please enter a valid Copies.",
                showConfirmButton: false,
                timer: 2000
            });
        }

        const up_book = await update_book({ id: book._id, data: newBooks }).unwrap();




        if (up_book.success === true) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Book Updated",
                showConfirmButton: false,
                timer: 2000
            });
        }
        // dispatch(add_tasks(newTask))

        onClose();
        form.reset();
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <form>
                <DialogTrigger asChild>
                    <Button>Edit</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Book</DialogTitle>
                        <DialogDescription className="sr-only">
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField

                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="my-2">
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Title" {...field} required />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField

                                control={form.control}
                                name="author"
                                render={({ field }) => (
                                    <FormItem className="my-2">
                                        <FormLabel>Author</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Author" {...field} required />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField

                                control={form.control}
                                name="isbn"
                                render={({ field }) => (
                                    <FormItem className="my-2">
                                        <FormLabel>ISBN</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ISBN" {...field} required />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField

                                control={form.control}
                                name="copies"
                                render={({ field }) => (
                                    <FormItem className="my-2">
                                        <FormLabel>Copies</FormLabel>
                                        <FormControl>
                                            <Input placeholder="copies" {...field} required />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="my-2">
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Type your message here." id="message" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="genre"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Genre</FormLabel>
                                        <Select onValueChange={field.onChange}    >
                                            <FormControl>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Genre" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="w-full">
                                                <SelectItem value="FICTION">FICTION</SelectItem>
                                                <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                                <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                                <SelectItem value="HISTORY">HISTORY</SelectItem>
                                                <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                                <SelectItem value="FANTASY">FANTASY</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />

                            {/* <FormField
                                control={form.control}
                                name="assignTo"
                                render={({ field }) => (
                                    <FormItem className="w-full mt-4">
                                        <FormLabel>Assign To:</FormLabel>
                                        <Select onValueChange={field.onChange}  >
                                            <FormControl>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Assign To" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="w-full">

                                                {/* {
                                                    User.map(user => <SelectItem value={user.id} key={user.id}>{user.name}</SelectItem>)
                                                } */}

                            {/* </SelectContent>
                                        </Select>
                            //         </FormItem> */}


                            <DialogFooter className="my-2">
                                <DialogClose asChild >
                                    <Button onClick={onClose} variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit">Submit</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </form>
        </Dialog>
    )
}