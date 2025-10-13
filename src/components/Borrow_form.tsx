import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import type { Book_type, BorrowInterface } from "@/types/types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { useCreateBorrowMutation } from "@/Redux/BookApi/BookApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";


type Props = {
    book: Book_type;
    isOpen: boolean;
    onClose: () => void;
};


const Borrow_form = ({ book, isOpen, onClose }: Props) => {

    const form = useForm<BorrowInterface>();
    const navigate = useNavigate();

    const [createBorrow] = useCreateBorrowMutation();


    const onSubmit: SubmitHandler<BorrowInterface> = async (data: BorrowInterface) => {
        const newBooks: BorrowInterface = {
            ...data,
            book: book._id,
        }


      if (isNaN(parseInt(data.quantity as unknown as string))) {
    return Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please enter a valid quantity.",
        showConfirmButton: false,
        timer: 2000
    });
}

        if (book.copies < parseInt(data.quantity as unknown as string)) {
            return Swal.fire({
                position: "center",
                icon: "warning",
                title: `We only have ${book.copies} items in stock. Please adjust your order.`,
                showConfirmButton: false,
                timer: 2000
            });
        }



        const borrow = await createBorrow(newBooks);
        if (borrow.data.success === true) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Book Added",
                showConfirmButton: false,
                timer: 2000
            });
        }

        navigate('/borrow-summary');

        onClose();
        form.reset();
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogTrigger asChild>
                {/* <Button>Edit</Button> */}
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Borrow Book</DialogTitle>
                    <DialogDescription className="text-sm">
                        {book.title}
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    {/* Form using React Hook Form */}
                    <form onSubmit={form.handleSubmit(onSubmit)}>

                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem className="my-2">
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                        <Input placeholder="quantity"  {...field} value={field.value || ''} required />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="dueDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col my-4">
                                    <FormLabel>Due Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Due Date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value ? new Date(field.value) : undefined}
                                                onSelect={field.onChange}
                                                captionLayout="dropdown"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormItem>
                            )}
                        />

                        <DialogFooter className="my-2">
                            <DialogClose asChild>
                                <Button onClick={onClose} variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Submit</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default Borrow_form;