        
export interface TicketProps{
        id: string;
        name: string;
        status: string;
        description:string;
        created_at: Date | null;
        updated_at: Date | null;
        customerID: string | null;
        userID: string | null;
}