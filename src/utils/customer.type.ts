export interface CustomerProps{
    id: string;
    name: string;
    phone: string;
    email: string;
    key: string | null;
    adress: string | null;
    info: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    userId: string | null;
}