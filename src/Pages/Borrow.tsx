import { Add_books } from "@/components/Add_books";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

 

const Borrow = () => {

    const navigate = useNavigate();

    return (
         <div className="mx-auto container py-10">

            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold text-4xl">Borrow summary</h1>
                </div>
                <div className="gap-4 flex">
                    
                     
                    
                    <Button onClick={()=>navigate('/books')}>All Book</Button>
                    
                </div>
            </div>

              <h1>borrow summary</h1>
             

        </div>
    );
};

export default Borrow;