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

 
import { useForm, type SubmitHandler } from "react-hook-form"
import { Select } from "@radix-ui/react-select"
 

 
 
// import { useAppDispatch, useAppSelector } from "@/redux/hooks"
// import { add_tasks } from "@/redux/features/task/task"
 
 
import { useState } from "react"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import type { Book_type } from "@/types/types"
import { Textarea } from "./ui/textarea"
import { useCreateBookMutation } from "@/Redux/BookApi/BookApi"


export function Add_books() {

    const [isOpen, setOpen] = useState(false);



    const form = useForm<Book_type>();
    // const dispatch = useAppDispatch();

    // const User = useAppSelector(select_user);

    const [createBooks , {data,isLoading}] = useCreateBookMutation();

   
    if(isLoading){
         return <p>Loading</p>
    }
 
    const onSubmit: SubmitHandler<Book_type> = async (data: Book_type) => {
        const newBooks: Book_type = {
            ...data,
        }

        console.log(newBooks);

        const books = await createBooks(newBooks);
        console.log(books);

        // dispatch(add_tasks(newTask))
        setOpen(false);
        form.reset();
    }

    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Task</Button>
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
                                            <Input placeholder="Title" {...field} value={field.value || ""} required/>
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
                                            <Input placeholder="Author" {...field} value={field.value || ""} required/>
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
                                            <Input placeholder="ISBN" {...field} value={field.value || ""} required/>
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
                                            <Input placeholder="copies" {...field} value={field.value || 0} required/>
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
                                           <Textarea placeholder="Type your message here." id="message" {...field} value={field.value || ""} required/>
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
                                        <Select onValueChange={field.onChange} defaultValue={String(1)}  >
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
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
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