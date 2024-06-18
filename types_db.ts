export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json }
	| Json[];

export type Database = {
	public: {
		Tables: {
			users: {
				Row: {
					avatar_url: string | null;
					billing_address: Json | null;
					full_name: string | null;
					id: string;
					payment_method: Json | null;
				};
				Insert: {
					avatar_url?: string | null;
					billing_address?: Json | null;
					full_name?: string | null;
					id: string;
					payment_method?: Json | null;
				};
				Update: {
					avatar_url?: string | null;
					billing_address?: Json | null;
					full_name?: string | null;
					id?: string;
					payment_method?: Json | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			pricing_plan_interval: "day" | "week" | "month" | "year";
			pricing_type: "one_time" | "recurring";
			subscription_status:
				| "trialing"
				| "active"
				| "canceled"
				| "incomplete"
				| "incomplete_expired"
				| "past_due"
				| "unpaid";
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
