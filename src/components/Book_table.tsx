

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"






export function Book_table() {

    

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


                        <TableRow>

                            <TableCell  >
                                <h1>hello wordl</h1>
                            </TableCell>

                        </TableRow>

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
