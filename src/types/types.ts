

export type Book_type = {
     _id:string
    title:string,
    author:string,
    genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE' |  'HISTORY' | 'BIOGRAPHY' | 'FANTASY' ,
    isbn : string,
    description:string,
    copies:number,
    available:boolean
}

export interface BorrowInterface { 
    book:string  
    quantity: number;
    dueDate: Date;
}


export interface BookItem {
    book: {
        title: string;
        isbn: string;
    };
    totalQuantity: number;
}
