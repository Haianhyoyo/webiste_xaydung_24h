import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const name = body?.name?.toString().trim();
        const phone = body?.phone?.toString().trim();
        const message = body?.message?.toString().trim();
        const page = body?.page?.toString().trim();

        if (!name || !phone) {
            return NextResponse.json(
                { ok: false, message: "Thiếu tên hoặc số điện thoại" },
                { status: 400 }
            );
        }

        const { error } = await supabase.from("contacts").insert([
            {
                name,
                phone,
                message,
                page,
                user_agent: req.headers.get("user-agent") || "",
            },
        ]);

        if (error) {
            console.error("Supabase error:", error);
            throw error;
        }

        return NextResponse.json({ ok: true });
    } catch (err: any) {
        console.error("API Error:", err);
        return NextResponse.json(
            { ok: false, message: err?.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
